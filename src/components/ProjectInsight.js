import React, { Component } from 'react';
import LoadingIcon from "./LoadingIcon"
import styled from "styled-components";
import {Router, Link} from "@reach/router"
export default class ProjectInsight extends Component {
    state = {
        loading: true
    }

    componentWillMount(){
        this.setState({loading: true});
        console.log("Will Mount" + this.state.loading);
        
    };
    
    componentDidMount(){
      setTimeout(() => this.setState({loading: false}), 500);
    };

    
    render() {
        const currentProjectData =   {
            name: "",
            platform: "",
            technologiesUsed: "",
            description: "",
            whatDidILearn: "",
            linkToProj: "",
            whatToImprove: ""
        }
        this.initProject = () => {
           switch (this.props.name) {
                case "Fitter":
                    currentProjectData.name = this.props.name;
                    currentProjectData.platform = "Web Application";
                    currentProjectData.technologiesUsed = "AngularJS, NodeJS, Express, Firebase";
                    currentProjectData.description = "Allows for people in the fitness "+
                    "community to connect while serving as an “All-in-One” fitness tool. " +
                    "Fitter allows people to find trainers, pay trainers, log calories," +
                    "log workouts, log progress for specific movements, view workouts from " + 
                    "their trainer, view diets from their trainer and look at a workout of " +
                     "the day.";
                     currentProjectData.whatDidILearn = "Enter Stuff";
                     currentProjectData.linkToProj = "link"
                     currentProjectData.whatToImprove = "enter information";

                   console.log("Fitter")
                   break;
                case "Tapt":
                    console.log("Tapt");
                    break;
               default:
                   break;
           }
        }
        this.initProject();

        const {loading} = this.state;
        
        return (
            loading ? 
           <LoadingIcon />  :
             <Wrap>
                 <ProjectInsightComp>
                   <h1>{this.props.name}</h1>
                   <h2>Description: {currentProjectData.description}</h2>
                   <h2>Description: {currentProjectData.description}</h2>
                   <h2>Platform: {currentProjectData.platform}</h2>
                   <h2>Technologies Used: {currentProjectData.technologiesUsed}</h2>
                   <h2>What Did I learn: {currentProjectData.whatDidILearn}</h2>
                   <h2>What to improve: {currentProjectData.whatToImprove}</h2>
                   <h2>Link: <a href={currentProjectData.description}>{this.props.name}</a></h2>
                 </ProjectInsightComp>
                 <Link to="/">
                    Back home
                 </Link>
             </Wrap>
        )
    }
};


const ProjectInsightComp = styled.div`
color: whitesmoke;
h1{
    font-size: 70px;
    text-align: center;
}

`
const Wrap = styled.div`
height: 75%; 
width: 80%;
margin-top: 10px;
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
background:hsl(0, 61%, 50%);
border-radius: 10px;
padding: 5px;
`


