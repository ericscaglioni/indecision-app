const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility Toggle',
    visible: false
};

const onToggleInformation = () => {
    app.visible = !app.visible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleInformation}>{app.visible ? 'Hide details' : 'Show details'}</button>
            {app.visible && <p>Hey, now you can see some detailed information!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();