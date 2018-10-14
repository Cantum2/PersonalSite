import React, { Component } from 'react'
import Project from '../components/Project.js'
let projectsArr = [
  {
    name: "Tapt",
    platform: "Android",
    technologiesUsed: "Java, Android SDK",
    description: "Tapt was a game for Android that the goal was to click a ball that randomly moves around the screen. Upon clicking the user was awarded points which could be spent in the in game store."
  },
  {
    name: "Fitter",
    platform: "Web Applicaiton",
    technologiesUsed: "AngularJS, NodeJS, Express, Firebase",
    description: "Social media platform"
  }
];

class Projects extends Component {
  
  render() {
    
    const currentProjects = projectsArr.map((proj) => 
    <li>{proj.name}</li>
    )

    return (
      <div>
        <h1>Projects</h1>
        <ul>
          {currentProjects}
        </ul>
        <Project />
      </div>
    )
  }
}

export default Projects;
