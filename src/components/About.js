import React from "react";
import styled from "styled-components";

const About = () => (
  <AboutContainer>
    <h1>About</h1>
    <p>
     Hello! My name is Marcus Cantu and I am a student at the University of Wyoming. 
     I am originally from Pinedale, Wyoming. After highschool I went to Western Wyoming 
     Community College and graduated in May 2018 with my AS in Computer Science. 
     My hobbies include working on side projects, reading and going to the gym. I am 
     constantly learning. I am currently learning React and a few other technologies to being working 
     on a project using the MERN stack. 
    </p>
  </AboutContainer>
);
export default About;

const AboutContainer = styled.div`
  margin: 0;
  padding: 1.5em;
  font-weight: lighter;
  background: hsl(0, 61%, 50%);
  color: whitesmoke;
  h1 {
    font-weight: bold;
    font-size: 1.2em;
  }
`;
