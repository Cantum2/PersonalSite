import React from "react";
import styled from "styled-components";
import Social from "./Social.js";
import Particles from 'react-particles-js';

const Header = () => (
  <HeaderContainer>
    <div>
      <h1>Marcus Cantu</h1>
      <img src="../../Images/Me.png" className="headerImg"/>
         <h2>Software Developer</h2>
      <Social />
    </div>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  background: whitesmoke;
  color: hsl(0, 61%, 50%);
  padding: 1em;
  margin-top: 0 !important;
  h1{
      font-size: 10em;
      margin-top: 10px;
      margin-bottom: 0px;
  }

  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}
.headerImg { 
  width: 100%;
  margin-top: 0px;
  height: auto; 
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  object-fit: cover !important;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
div {
    justify-content: center;
    margin: 0 auto;
}
`;
