import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {
    console.log("componentDidMount has been called");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate has been called");
  }

  increment = () => {
    let x = this.state.counter + 1;
    this.setState({ counter: x });
  };
  render() {
    console.log("render function has been called");
    return (
      <div>
        <button onClick={this.increment}>Click</button>
        <p>Count is: {this.state.counter} </p>
      </div>
    );
  }
}

export default App;
