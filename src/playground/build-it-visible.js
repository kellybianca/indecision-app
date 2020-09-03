const indecision = {
    title: 'meu projeto que não funciona'
};

let visibilityButton = false;

const onButtonTitle = () => {
    
    visibilityButton = !visibilityButton;

    if(visibilityButton) {
        console.log(visibilityButton);
    }
    else {
        visibilityButton = false;
        console.log(visibilityButton);
    }
    render();
};

const render = () => {
    const template = (
        <div>
            <h1> {indecision.title} </h1>
            <button onClick={onButtonTitle}>
                {visibilityButton ? 'esconder' : 'mostrar'}            
            </button>
            {visibilityButton &&  (
                <div>
                    <p>Hey, aqui voce encontra mais detalhes</p>
                </div>
            )}
        </div>
    );


    ReactDOM.render(template, document.getElementById('app'));
};

render();

