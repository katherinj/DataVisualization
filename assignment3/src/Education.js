import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="box no-border">
        <div className="col-header">
          <h2>Education</h2>
        </div>
        <div className="description">
          {this.props.education.map((education) => (
            <div className="smallerbox">
              <h3>{education.institution}</h3>
              <p>
                {education.degree} in {education.major}
              </p>
              <p>
                {education.startDate} - {education.endDate}
              </p>
              <p>GPA: {education.gpa}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Education;
