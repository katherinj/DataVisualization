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
          <div class="smallerbox">
            <h3>Job Title at Company (August 2022 – December 2023)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              adminim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="smallerbox">
            <h3>Job Title 2 at Company 2 (August 2020 – December 2021)</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim adminim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkExperience;
