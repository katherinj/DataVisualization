import React, { Component } from "react";

class PersonalProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="box">
        <div className="col-header">
          <h2>Personal Profile</h2>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    );
  }
}

export default PersonalProfile;
