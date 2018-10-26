import React, { Component, Fragment } from 'react';
import LoadingIcon from "./LoadingIcon"
import styled from "styled-components";
import {Router, Link} from "@reach/router"

export default class ProjectInsight extends Component {
    state = {
      project: {},
      loading: true
    };
  
    componentDidMount() {
      const { projects, name } = this.props;
  
      const project = projects.filter(project => project.name === name);
      setTimeout(() => this.setState({ loading: false }), 500);
  
      this.setState({
        project: project[0]
      });
    }
    render() {
      const {
        name,
        description,
        platform,
        technologiesUsed,
        whatDidILearn,
        whatToImprove,
        linkToProj
      } = this.state.project;
      console.log(this.state.project);
      return (
        <Fragment>
          {this.state.loading ? (
            <LoadingIcon />
          ) : (
            <Wrap>
              <ProjectInsightComp>
                <h1>{name}</h1>
                <h2>Description: {description}</h2>
                <h2>Platform: {platform}</h2>
                <h2>Technologies Used: {technologiesUsed}</h2>
                 <h2>What Did I learn: {whatDidILearn}</h2> 
                {/* <h2>What to improve: {whatToImprove}</h2> */}
                {/* <h2>
                  Link: <a href={linkToProj}>{name}</a>
                </h2> */}
              </ProjectInsightComp>
              <Link to="/">Back home</Link>
            </Wrap>
          )}
        </Fragment>
      );
    }
  }


const ProjectInsightComp = styled.div`
color: whitesmoke;
h1{
    font-size: 70px;
    text-align: center;
}

`
const Wrap = styled.div`
width: 80%;
margin-top: 10px;
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
background:hsl(0, 61%, 50%);
border-radius: 10px;
padding: 5px;

`


