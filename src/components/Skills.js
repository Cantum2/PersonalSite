import React, { Component }from "react";
import styled from "styled-components";
import {HorizontalBar} from "react-chartjs-2";

const data = {
    labels: ['Java', 'JavaScript', 'Python', 'MySQL', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Programming Languages',
        backgroundColor: 'rgba(245,245,245,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(245,245,245,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [7, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
const Skills = () => (
    <SkillsContainer>
       <h1>Skills</h1>
       <div>
            <HorizontalBar data={data}/>
        </div>
    </SkillsContainer>
);

export default Skills;

const SkillsContainer = styled.div`
margin: 0;
padding: 1.5em;
background: hsl(0, 61%, 50%);
color: whitesmoke;
div{
    background-color: whitesmoke;
    border-radius: 10px;
    height: 50%;
    width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`