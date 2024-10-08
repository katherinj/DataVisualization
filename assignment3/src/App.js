import React, { Component } from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { child1: "Child 1", child2: "Child 2" };
  }

  render() {
    return (
      <main>
        <Child1 child1={this.state.child1}></Child1>
        <Child2 child2={this.state.child2}></Child2>
      </main>
    );
  }
}

export default App;
