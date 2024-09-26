import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="box">
        <div class="col-header">
          <h2>Key Skills</h2>
        </div>
        <div class="description column">
          <ul class="key-skills">
            <li>A Key skill</li>
            <li>A Key skill</li>
            <li>A Key skill</li>
          </ul>
          <ul class="key-skills">
            <li>A Key skill</li>
            <li>A Key skill</li>
            <li>A Key skill</li>
          </ul>
          <ul class="key-skills">
            <li>A Key skill</li>
            <li>A Key skill</li>
            <li>A Key skill</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
