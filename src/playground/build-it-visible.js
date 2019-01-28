console.log("App is running!");

const app = {
  title: 'Visibility Toggle',
  toggle: 'Toggle visibility',
  hidden: []
}

let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
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

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey, These are some details you can now see!</p>
        </div>
      )}
      <p>{app.hidden}</p>
    </div>
  );
  ReactDOM.render(template, appRoot)
};

const appRoot = document.getElementById('app');

renderApp();
