import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Zh Rimel",
      title: "Data Scientist",
      email: "abc@gmail.com",
      web: "abc.github.io/abc",
      mobile: "01234567890",
      personalProfile:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  }
  input_change = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <Header
          name={this.state.name}
          title={this.state.title}
          email={this.state.email}
          web={this.state.email}
          mobile={this.state.mobile}
        ></Header>
        <main className="information">
          <PersonalProfile
            personalProfile={this.state.personalProfile}
          ></PersonalProfile>
          <WorkExperience></WorkExperience>
          <Skills></Skills>
          <Education></Education>
        </main>
      </div>
    );
  }
}

export default App;
