"use strict";

console.log("app.js is running!");

//create app object title/subtitle
//user title/subtitle in the template
//render template

//if statements
//ternary operators
//logical and operator

//only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length > 0 " Here are your options", "no options"

//JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: "Put your life in the hands of a computer",
  options: ['one', 'two']
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? 'Here are your options' : 'no options'
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    ),
    React.createElement(
      "li",
      null,
      "Item three"
    )
  )
);

var user = {
  name: 'Rupert Adams',
  age: 27,
  location: 'London'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+ 1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "- 1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+ 1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "- 1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
