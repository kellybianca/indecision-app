let count = 0;

const addOne = () => {
    count+=1;
    console.log('addOne');
    renderCounterApp();
};

const minusOne = () => {
    if(count > 0)   count--;
    console.log('minusOne');
    renderCounterApp();
};

const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();