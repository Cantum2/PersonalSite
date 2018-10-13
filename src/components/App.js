import React, {Component} from 'react';
import '../App.css'
import  About  from "../components/About.js";

class App extends Component {
    render() {
        return(
            <div>
                <h1 align="center" className="nameHeader">Marcus Cantu</h1>
                <h2 align="center">Software Developer</h2>
                <About/>
            </div>
        )
    }
}

export default App;