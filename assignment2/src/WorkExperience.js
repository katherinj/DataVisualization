import React, { Component } from "react";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section class="box">
        <div class="col-header">
          <h2>Work Experience</h2>
        </div>
        <div class="description">
          {this.props.workExperience.map((experience) => (
            <div class="smallerbox">
              <h3>
                {experience.title} at {experience.company} (
                {experience.startDate} – {experience.endDate})
              </h3>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default WorkExperience;
