import React from "react";
import { FlexContainer } from "./Project";

const Social = () => {
  let linkedInPicUrl = "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png";
  let gitHubPicUrl = "https://image.flaticon.com/icons/svg/25/25231.svg";
  let gmailPicUrl = "https://image.flaticon.com/icons/svg/60/60543.svg";
  return (
    <FlexContainer style={{ justifyContent: "center" }}>
      <li>
        <img src={linkedInPicUrl} height="42" width="42" />
      </li>
      <li>
        <img src={gitHubPicUrl} height="42" width="42" className="fiveRight" />
      </li>
      <li>
        <img src={gmailPicUrl} height="42" width="42" />
      </li>
    </FlexContainer>
  );
};

export default Social;
