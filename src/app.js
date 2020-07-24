//onde vão ficar os arquivos JSX
console.log('App.js is running');

// JSX - JavaScript XML
var app = {
    title: 'Indecision app ',
    subtitle: 'it is a very funny',
    options: ['One', 'Two']
};

var template = (
<div>
    <h1>{ app.title}</h1>
    { app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'here are your options' :'No options' } </p>
    <ol>
        <li>one</li>
    </ol>
</div>);

var user = {
    name: 'Kelly',
    age: 20,
    location: "rio largo"
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    } 
}

var newTemplate = (
<div>
    <h1>{ user.name ? user.name : "Anonymous" }</h1>
    { ( user.age && user.age >= 18) && <p>Age: {user.age}</p> }
    {getLocation(user.location)}
</div>
);

var app = document.getElementById('app');
// var newApp = document.getElementById('newapp');

// ReactDOM.render(template, app);
ReactDOM.render(template, app);