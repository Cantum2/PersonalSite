import React, { Component, Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Projects />
        <Skills />
      </Fragment>
    );
  }
}