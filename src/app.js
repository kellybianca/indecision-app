//onde vão ficar os arquivos JSX
console.log('App.js is running');

// JSX - JavaScript XML
var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
</div>);

var newTemplate = (
<div>
    <h1>Kelly Bianca</h1>
    <p>Age: 20 years old</p>
    <p>Location: Rio Largo, Alagoas - Brazil</p>
</div>
);

var appRoot = document.getElementById('app');
var newApp = document.getElementById('newapp');

ReactDOM.render(template, appRoot);
ReactDOM.render(newTemplate, newApp);