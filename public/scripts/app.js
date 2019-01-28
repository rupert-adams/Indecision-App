'use strict';

console.log("App is running!");

var app = {
  title: 'Visibility Toggle',
  bool: false,
  toggle: 'Toggle visibility',
  hidden: []
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
    { onClick: onClicked },
    app.toggle
  ),
  React.createElement(
    'p',
    null,
    app.hidden
  )
);

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
      { onClick: onClicked },
      app.toggle
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
