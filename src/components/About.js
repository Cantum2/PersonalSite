import React from "react";
import styled from "styled-components";

const About = () => (
  <AboutContainer>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum
      ligula at est iaculis elementum. Proin aliquet aliquam nulla, ac ultricies
      quam maximus non. Vestibulum eu euismod tortor. Duis pulvinar venenatis
      malesuada. Cras eu lorem laoreet, fermentum orci at, hendrerit nisl. Duis
      imperdiet nulla nec ligula volutpat faucibus. Morbi dignissim at dolor sit
      amet pharetra. Cras eleifend rhoncus odio in blandit. Nam dictum sit amet
      odio in porttitor. Donec nec tellus sit amet ante maximus euismod. Vivamus
      a turpis euismod, scelerisque quam et, vehicula mauris. Mauris sit amet
      condimentum libero, ut dapibus eros. Nulla commodo sodales ante vel
      blandit.
    </p>
  </AboutContainer>
);
export default About;

const AboutContainer = styled.div`
  margin: 0;
  padding: 1.5em;
  font-weight: lighter;
  background: hsl(0, 61%, 50%);
  color: whitesmoke;
  width: 100%;
  h1 {
    font-weight: bold;
    font-size: 1.2em;
  }
`;
