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
          {this.props.keySkills.map((col) => (
            <ul class="key-skills">
              {col.map((keySkill) => (
                <li>{keySkill}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>
    );
  }
}

export default Skills;
