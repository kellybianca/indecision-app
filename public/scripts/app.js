'use strict';

//onde vão ficar os arquivos JSX
console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);

var newTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Kelly Bianca'
    ),
    React.createElement(
        'p',
        null,
        'Age: 20 years old'
    ),
    React.createElement(
        'p',
        null,
        'Location: Rio Largo, Alagoas - Brazil'
    )
);

var appRoot = document.getElementById('app');
var newApp = document.getElementById('newapp');

ReactDOM.render(template, appRoot);
ReactDOM.render(newTemplate, newApp);
