'use strict';

var indecision = {
    title: 'meu projeto que não funciona'
};

var visibilityButton = false;

var onButtonTitle = function onButtonTitle() {

    visibilityButton = !visibilityButton;

    if (visibilityButton) {
        console.log(visibilityButton);
    } else {
        visibilityButton = false;
        console.log(visibilityButton);
    }
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            indecision.title,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: onButtonTitle },
            visibilityButton ? 'esconder' : 'mostrar'
        ),
        visibilityButton && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, aqui voce encontra mais detalhes'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
