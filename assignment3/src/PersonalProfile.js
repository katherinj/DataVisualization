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
          <p>{this.props.personalProfile}</p>
        </div>
      </section>
    );
  }
}

export default PersonalProfile;
