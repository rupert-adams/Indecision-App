console.log("App is running!");

const app = {
  title: 'Visibility Toggle',
  bool: false,
  toggle: 'Toggle visibility',
  hidden: []
}

const onClicked = () => {
  if (app.hidden === undefined) {
    app.hidden = 'This is now visible!'
    console.log('working');
  } else {
    app.hidden = undefined;
    console.log('working');
  }
  renderApp();
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <button onClick={onClicked}>{app.toggle}</button>
    <p>{app.hidden}</p>
  </div>
);

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onClicked}>{app.toggle}</button>
      <p>{app.hidden}</p>
    </div>
  );
  ReactDOM.render(template, appRoot)
};

const appRoot = document.getElementById('app');

renderApp();
