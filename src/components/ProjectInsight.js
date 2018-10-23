import React, { Component } from 'react';
import LoadingIcon from "./LoadingIcon"
import styled from "styled-components";

export default class ProjectInsight extends Component {
    state = {
        loading: true
    }

    componentWillMount(){
        this.setState({loading: true});
        console.log("Will Mount" + this.state.loading);
        
    };
    
    componentDidMount(){
      setTimeout(() => this.setState({loading: false}), 2000);
    };

    nameOfFunction = () => {
        console.log("Testing");
    }

    render() {
        const {loading} = this.state;
        
        return (
            loading ? 
           <LoadingIcon />  :
             <div>
                 <ProjectInsightComp>
                    {this.props.name}
                 </ProjectInsightComp>
             </div>
        )
    }
};


const ProjectInsightComp = styled.div`
font-size: 15em;
color: hsl(0, 61%, 50%);

`



