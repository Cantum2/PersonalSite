import React from "react";
import { FlexContainer } from "./Project";
import "../App.css";

const Social = () => {
  let linkedInPicUrl = "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png";
  let gitHubPicUrl = "https://image.flaticon.com/icons/svg/25/25231.svg";
  let gmailPicUrl = "https://image.flaticon.com/icons/svg/60/60543.svg";
  return (
    <FlexContainer style={{ justifyContent: "center" }}>
      <li>
          <a href="https://www.linkedin.com/in/marcus-cantu-a0b569131/"><img src={linkedInPicUrl} height="42" width="42" className="grow"/></a>
      </li>
      <li>
        <a href="https://github.com/Cantum2"><img src={gitHubPicUrl} height="42" width="42" className="grow" /></a>
      </li>
      <li>
        <a href="mailto:cantumarcus19@gmail.com" target="_top"> <img src={gmailPicUrl} height="42" width="42" className="grow"/></a>
      </li>
    </FlexContainer>
  );
};

export default Social;
