import { Router } from "@reach/router";
import React from "react";
import "../App.css";
import HomePage from "./HomePage";
import ProjectInsight from "./ProjectInsight";
const App = () => (
  <Router>
    <HomePage path="/" />
    <ProjectInsight path="/projins" />
  </Router>
);

export default App;