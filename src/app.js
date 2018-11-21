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

var template = (
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

var user = {
  name: 'Rupert Adams',
  age: 27,
  location: 'London'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
// Create a templateTwo var JSX expression
// div
// h1 --> Rupert Adams
// p --> Age: 27
//p --> Location: London
//p --> RendertemplateTwo instead of template


var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
