'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecision app',
    subtitle: 'We will choose your destiny',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    // (e.target) referencia ao objeto que disparou o evento, no caso o form
    // (elements) onde o formulário possui seus elementos indexados por nome
    // (option.value) option é o nome do input e por ser um input ele possui o value
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderTemplateApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderTemplateApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    alert(option);
};

var renderListOfOptions = function renderListOfOptions() {
    if (app.options && app.options.length > 0) {
        return React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        );
    }
};

var renderTemplateApp = function renderTemplateApp() {
    // JSX - JavaScript XML
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options' : 'You have no options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        renderListOfOptions(),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplateApp();
