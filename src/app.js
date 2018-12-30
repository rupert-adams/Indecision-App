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

const app = {
  title: 'Indecision App',
  subtitle: "Put your life in the hands of a computer",
  options: ['one', 'two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
    </ol>
  </div>
);

const user = {
  name: 'Rupert Adams',
  age: 27,
  location: 'London'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const templateTwo = (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+ 1</button>
  <button onClick={minusOne}>- 1</button>
  <button onClick={reset}>reset</button>
  </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+ 1</button>
    <button onClick={minusOne}>- 1</button>
    <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
