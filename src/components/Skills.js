import React, { Component } from "react";
import styled from "styled-components";
import { HorizontalBar } from "react-chartjs-2";

import "../App.css";
const programmingLanguageData = {
  labels: ["", "Java", "JavaScript", "Python", "Matlab", "MySQL", "HTML5"],
  datasets: [
    {
      label: "Programming Languages",
      backgroundColor: "hsl(0, 61%, 87%)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(245,245,245,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [0, 6, 6, 5, 4, 3, 8]
    }
  ]
};
const technologiesData = {
  labels: [
    "",
    "AngularJS",
    "Android SDK",
    "NodeJS",
    "Bootstrap",
    "Firebase",
    "React",
    "Spring Boot"
  ],
  datasets: [
    {
      label: "Technologies",
      backgroundColor: "hsl(0, 61%, 87%)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(245,245,245,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [0, 7, 5, 4, 6, 5, 2, 3]
    }
  ]
};

const Skills = () => (
  <SkillsContainer>
    <h1>Skills</h1>
    <SkillsWrapper>
      <img src="../../Images/Skills/JavaLogo.jpg"></img>
      <img src="../../Images/Skills/JSLogo.png"></img>
      <img src="../../Images/Skills/PythonLogo.png"></img>
      <img src="../../Images/Skills/HTMLLogo.png"></img>
      <img src="../../Images/Skills/CSSLogo.png"></img>
      <img src="../../Images/Skills/MatlabLogo.png"></img>
      <img src="../../Images/Skills/MySqlLogo.png"></img>
    </SkillsWrapper>
    <h1>Technologies</h1>
    <SkillsWrapper>
      <img src="../../Images/Technologies/AngularJSLogo.png"></img>
      <img src="../../Images/Technologies/ReactLogo.png"></img>
      <img src="../../Images/Technologies/NodeJSLogo.png"></img>

    </SkillsWrapper>
  </SkillsContainer>
);

export default Skills;

const SkillsContainer = styled.div`
  margin: 0;
  padding: 1.5em;
  background: hsl(0, 61%, 50%);
  color: whitesmoke;
  /* div{
    background-color: whitesmoke;
    border-radius: 10px;
    height: 50%;
    width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
} */
`;

const SkillsWrapper = styled.div`
  width: 80%;
  height: 20%;
  margin-top: 10px;
  background-color: whitesmoke;
  border-radius: 40px;

  img{
    width: 100px;
    height:100px;
    border-radius: 30px;
    margin-left: 10px;
  }
`;
