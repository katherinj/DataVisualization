import React, { Component } from "react";

class Child1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <section className="box no-border">{this.props.child1}</section>;
  }
}

export default Child1;
