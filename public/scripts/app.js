'use strict';

console.log("App is running!");

var app = {
  title: 'Visibility Toggle',
  toggle: 'Toggle visibility',
  hidden: []
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  renderApp();
};

var onClicked = function onClicked() {
  if (app.hidden === undefined) {
    app.hidden = 'This is now visible!';
    console.log('working');
  } else {
    app.hidden = undefined;
    console.log('working');
  }
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide Details' : 'Show Details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey, These are some details you can now see!'
      )
    ),
    React.createElement(
      'p',
      null,
      app.hidden
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderApp();
