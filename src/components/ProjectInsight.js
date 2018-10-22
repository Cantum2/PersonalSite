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
        
    }
    
    componentDidMount(){
      setTimeout(() => this.setState({loading: false}), 2000);
    }

    render() {
        const {loading} = this.state;
        
        return (
            loading ? 
           <LoadingIcon />  :
             <div>
                {this.props.name}
             </div>
        )
    }
};




