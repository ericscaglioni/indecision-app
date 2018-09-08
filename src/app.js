const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision app',
    subtitle: 'We will choose your destiny',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    // (e.target) referencia ao objeto que disparou o evento, no caso o form
    // (elements) onde o formulário possui seus elementos indexados por nome
    // (option.value) option é o nome do input e por ser um input ele possui o value
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderTemplateApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderTemplateApp();
};

const renderListOfOptions = () => {
    if(app.options && app.options.length > 0) {
        return (
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
        );
    }
};

const renderTemplateApp = () => {
    // JSX - JavaScript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'You have no options'}</p>
            <button onClick={removeAll}>Remove All</button>
            {renderListOfOptions()}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderTemplateApp();