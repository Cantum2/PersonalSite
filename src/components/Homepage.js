import React, { Component, Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default class HomePage extends Component {
  render() {
    const {projects} = this.props;
    return (
      <Fragment>
        <Header />
        <About />
        <Projects projects={projects}/>
        <Skills />
      </Fragment>
    );
  }
}