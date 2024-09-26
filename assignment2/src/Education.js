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
          <div className="smallerbox">
            <h3>New Jersey Institute of Technology</h3>
            <p>BS in Computer Science</p>
            <p>2018 - 2022</p>
            <p>GPA: 3.9</p>
          </div>
          <div className="smallerbox">
            <h3>New Jersey Institute of Technology</h3>
            <p>MS in Computer Science</p>
            <p>2022 - 2023</p>
            <p>GPA: 4.0</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
