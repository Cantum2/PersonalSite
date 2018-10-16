import React, { Fragment } from "react";
import "../App.css";
import About from "./About.js";
import Projects from "./Projects.js";
import Header from "./Header";
import Skills from "./Skills";
const App = () => (
  <Fragment>
    <Header />
    <About />
    <Projects />
    <Skills />
  </Fragment>
); 

export default App;
