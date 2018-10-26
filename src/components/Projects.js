

import React, { Component } from "react";
import Project from "../components/Project.js";
import styled from "styled-components";

const Projects = ({ projects }) => (
  <ProjectsContainer>
    <h1>Projects</h1>
    <Project projects={projects} />
  </ProjectsContainer>
);

export default Projects;


const ProjectsContainer = styled.div`
  margin: 0;
  padding: 1.5em;
  background: whitesmoke;
  color: hsl(0, 61%, 50%);
`;

