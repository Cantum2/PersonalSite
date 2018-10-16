import React, { Fragment } from "react";
import "../App.css";
import About from "./About.js";
import Projects from "./Projects.js";
import Header from "./Header";

<<<<<<< HEAD
const App = () => (
  <Fragment>
    <Header />
    <About />
    <Projects />
  </Fragment>
); 
=======
class App extends Component {
    render() {
        return(
            <div className="backgroundColor">
                <h1 align="center" className="nameHeader">Marcus Cantu</h1>
                <h2 align="center" className="nameHeader">Software Developer</h2>
                <Social />
                <About />
                <Projects />
            </div>
        )
    }
}
>>>>>>> 5a56c76d63d7f3ff4ec602ddea63fac28a047a12

export default App;
