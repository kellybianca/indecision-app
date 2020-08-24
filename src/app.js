//onde vão ficar os arquivos JSX
console.log('App.js is running');

// JSX - JavaScript XML
const app = {
    title: 'Indecision app ',
    subtitle: 'it is a very funny',
    options: ['One', 'Two']
};

const template = (
<div>
    <h1>{ app.title}</h1>
    { app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'here are your options' :'No options' } </p>
    <ol>
        <li>one</li>
    </ol>
</div>);

const user = {
    name: 'Kelly',
    age: 20,
    location: "rio largo"
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    } 
}

const newTemplate = (
<div>
    <h1>{ user.name ? user.name : "Anonymous" }</h1>
    { ( user.age && user.age >= 18) && <p>Age: {user.age}</p> }
    {getLocation(user.location)}
</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);