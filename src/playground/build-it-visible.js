class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>Hey, now you can see some detailed information!</p>}
            </div> 
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// const app = {
//     title: 'Visibility Toggle',
//     visible: false
// };

// const onToggleInformation = () => {
//     app.visible = !app.visible;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggleInformation}>{app.visible ? 'Hide details' : 'Show details'}</button>
//             {app.visible && <p>Hey, now you can see some detailed information!</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();