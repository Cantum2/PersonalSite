import React, { Fragment, Component } from "react";
import styled from "styled-components";
import  {Router, Link} from "@reach/router";
import ProjectInsight from "./ProjectInsight";

export default class Project extends Component {
  openProjectDetail = key => {
    console.log("Button working:" + key);
  };

  render() {
    const { projects } = this.props;

    return (
      <Fragment>
        <FlexContainer>
          {projects.map(proj => (
            <ProjectsCard
              key={proj.name}
              onClick={() => this.openProjectDetail(proj.name)}
            >
              <Link to={`/project-insight/${proj.name}`}>
                <p>{proj.name}</p>
                <p>{proj.platform}</p>
                <p>Technologies Used: {proj.technologiesUsed}</p>
                <p>{proj.description}</p>
              </Link>
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
