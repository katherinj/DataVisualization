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
      workExperience: [
        {
          title: "Job Title",
          company: "Company",
          startDate: "August 2022",
          endDate: "December 2023",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Job Title 2",
          company: "Company 2",
          startDate: "August 2020",
          endDate: "December 2021",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      keySkills: [
        ["A Key skill", "A Key skill", "A Key skill"],
        ["A Key skill", "A Key skill", "A Key skill"],
        ["A Key skill", "A Key skill", "A Key skill"],
      ],
      education: [
        {
          institution: "New Jersey Institute of Technology",
          degree: "BS",
          major: "Computer Science",
          startDate: "2018",
          endDate: "2022",
          gpa: "3.9",
        },
        {
          institution: "New Jersey Institute of Technology",
          degree: "MS",
          major: "Computer Science",
          startDate: "2022",
          endDate: "2023",
          gpa: "4.0",
        },
      ],
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
          web={this.state.web}
          mobile={this.state.mobile}
        ></Header>
        <main className="information">
          <PersonalProfile
            personalProfile={this.state.personalProfile}
          ></PersonalProfile>
          <WorkExperience
            workExperience={this.state.workExperience}
          ></WorkExperience>
          <Skills keySkills={this.state.keySkills}></Skills>
          <Education education={this.state.education}></Education>
        </main>
      </div>
    );
  }
}

export default App;
