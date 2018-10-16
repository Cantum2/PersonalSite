import React from "react";
import styled from "styled-components";
import Social from "./Social.js";

const Header = () => (
  <HeaderContainer>
    <div>
      <h1>Marcus Cantu</h1>
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
  }
  div {
     justify-content: center;
     margin: 0 auto;
  }
`;
