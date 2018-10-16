import React, { Fragment } from "react";
import "../App.css";
import About from "./About.js";
import Projects from "./Projects.js";
import Header from "./Header";

const App = () => (
  <Fragment>
    <Header />
    <About />
    <Projects />
  </Fragment>
); 

export default App;
