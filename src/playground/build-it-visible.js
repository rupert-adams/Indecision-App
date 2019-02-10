// create a componant VisibilityToggle - constructor, render, handleToggleVisibility
// visibility is false default

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: 'Visibility Toggle',
      toggle: 'Toggle visibility',
      hidden: [],
      visibility: false
    };
  }

  handleToggleVisibility(prevState) {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey, These are some details you can now see!</p>
          </div>
        )}
        <p>{this.state.hidden}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
