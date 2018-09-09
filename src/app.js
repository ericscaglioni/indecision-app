class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Item one', 'Item two', 'Item four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    //React Component require one method to be define = render
    render() {
        return (
          <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
          </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option}/>)
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));