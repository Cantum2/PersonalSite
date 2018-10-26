import { Router } from "@reach/router";
import React, {Component} from "react";
import "../App.css";
import HomePage from "./HomePage";
import ProjectInsight from "./ProjectInsight";

 class App extends Component {
  state = {
    projectsArr: [
      {
        name: "Tapt",
        platform: "Android",
        technologiesUsed: "Java, Android SDK",
        description:
          "Tapt was a game for Android that the goal was to click a ball that randomly moves around the screen. Upon clicking the user was awarded points which could be spent in the in game store.",
          whatDidILearn: "Test",
          whatToImprove: "Testing Improve"
        },
      {
        name: "Fitter",
        platform: "Web Applicaiton",
        technologiesUsed: "AngularJS, NodeJS, Express, Firebase",
        description: "Social media platform",
        whatDidILearn: "Test",
        whatToImprove: "Testing Improve"
      },
      {
        name: "WyoHackathon 2018",
        platform: "Web Application and Blockchain",
        technologiesUsed: "AngularJS, TCR, TCR-UI, Git, NodeJS, Express ",
        description: "Social media platform",
        whatDidILearn: "Test",
        whatToImprove: "Testing Improve"
      },
      {
        name: "This website",
        platform: "Website",
        technologiesUsed: "React",
        description: "Portfolio website.",
        whatDidILearn: "Test",
        whatToImprove: "Testing Improve"
      }
    ]
  };

  render() {
    const { projectsArr } = this.state;
    return (
      <Router>
        <HomePage projects={projectsArr} path="/" />
        <ProjectInsight projects={projectsArr} path="/project-insight/:name" />
      </Router>
    );
  }
}

export default App;