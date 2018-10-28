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
          whatDidILearn: "As this was my first project outside of required coursework. It was a huge learning curve but during the process I learned the value of being able to push through adverse situations when it comes to software. I also learned how to use the Android SDK and Android Studio.",
          whatToImprove: "I would improve the app its self in terms of quality. As mentioned before it was my first application so I was learning the basics of software development."
        },
      {
        name: "Fitter",
        platform: "Web Applicaiton",
        technologiesUsed: "AngularJS, NodeJS, Express, Firebase",
        description: "Social media platform that allows for people in the fitness community to connect while serving as an “All-in-One” fitness tool. Fitter allows people to find trainers, pay trainers, log calories, log workouts, log progress for specific movements, view workouts from their trainer, view diets from their trainer and look at a workout of the day.",
        whatDidILearn: "I learned how a Single Page Web Application works. I learned how to set up a server (NodeJS) and how to implement Firebase to store my data.",
        whatToImprove: "I would add unit testing. As this was my first web base application I did not learn ahout unit testing until the end of the development of Fitter."
      },
      {
        name: "WyoHackathon 2018",
        platform: "Web Application and Blockchain",
        technologiesUsed: "AngularJS, TCR, TCR-UI, Git, NodeJS, Express ",
        description: "Implemented a token curated registry to manage how music producers and aspiring artists interact with one another by creating an incentivized list of the top music which is judged by the users and rewarded with our own token ERT.",
        whatDidILearn: "I learned the basics of developing a blockchain application. Before this project I had no experience with blockchain and by the end of the Hackathon I felt very welcomed to a wonderful community.",
        whatToImprove: "Testing Improve"
      },
      {
        name: "This website",
        platform: "Website",
        technologiesUsed: "React",
        description: "Portfolio website.",
        whatDidILearn: "With this project I learned the basics of React.",
        whatToImprove: "I would improve the UI design as that is one of my biggest weaknesses."
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