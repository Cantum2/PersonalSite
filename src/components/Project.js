import React, { Fragment, Component } from "react";
import styled from "styled-components";

let projectsArr = [
  {
    name: "Tapt",
    platform: "Android",
    technologiesUsed: "Java, Android SDK",
    description:
      "Tapt was a game for Android that the goal was to click a ball that randomly moves around the screen. Upon clicking the user was awarded points which could be spent in the in game store."
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


export default class Project extends Component {
  openProjectDetail = key => {
    console.log("Button working:");
  };
   
  render() {
    return (
      <Fragment>
        <FlexContainer>
          {projectsArr.map(proj => (
            <ProjectsCard
              key={proj.name}
              onClick={this.openProjectDetail}
            >
              <p>{proj.name}</p>
              <p>{proj.platform}</p>
              <p>Technologies Used: {proj.technologiesUsed}</p>
              <p>{proj.description}</p>
            </ProjectsCard>
          ))}
        </FlexContainer>
      </Fragment>
    );
  }
}

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;

  li {
    margin-left: 1.5em;
  }
`;

const ProjectsCard = styled.div`
  width: 20%;
  height: 200px;
  grid-area: project;
  border-radius: 5px;
  background-color: hsl(0, 61%, 50%);
  margin: 10px;
  box-shadow: 5px 5px hsl(0, 0%, 19%);
  padding: 1.5em;
  &:hover {
    background-color: hsl(0, 0%, 12%);
  }

  p {
    color: whitesmoke;
    font-size: 15px;
  }
`;
