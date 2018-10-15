import React, { Component } from 'react'
import ProjectsCard from '../components/ProjectCard.js';
import ProjectCardDetail from '../components/ProjectCardDetail';
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
  },
  {
    name: "WyoHackathon 2018",
    platform: "Web Application and Blockchain",
    technologiesUsed: "AngularJS, TCR, TCR-UI, Git, NodeJS, Express ",
    description: "Social media platform"
  },
  {
    name: "This website",
    platform: "Website",
    technologiesUsed: "React",
    description: "Portfolio website."
  }
  
];

 class Project extends Component {
  render() {
    return (
      <div>
        <p>From project</p>
        {projectsArr.map(proj => { 
          return (
            <ProjectsCard key={proj.name}>
              <ProjectCardDetail>
                {proj.name}
              </ProjectCardDetail>
              <ProjectCardDetail>
                {proj.platform}
              </ProjectCardDetail>
              <ProjectCardDetail>
                Technologies Used: {proj.technologiesUsed}
              </ProjectCardDetail>
              <ProjectCardDetail>
                {proj.description}
              </ProjectCardDetail>
            </ProjectsCard>
          )
        })}
      
      </div>
    )
  }
}

export default Project;
