import React, {Component} from 'react';
import '../App.css'
import  Social  from "../components/Social.js";
import About from "../components/About.js"
import Projects from "../components/Projects.js"

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

export default App;