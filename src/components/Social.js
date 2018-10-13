import React, { Component } from 'react'

 class Social extends Component {
  render() {

    let  linkedInPicUrl= 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png';
    let gitHubPicUrl = 'https://image.flaticon.com/icons/svg/25/25231.svg';
    let gmailPicUrl = 'https://image.flaticon.com/icons/svg/60/60543.svg';
    return (
      <div align="center" className="fiveTop socialBackground">
        <img src={linkedInPicUrl}  height="42" width="42" className="fiveRight"/>
        <img src={gitHubPicUrl}  height="42" width="42" className="fiveRight"/>
        <img src={gmailPicUrl}  height="42" width="42"/>
      </div>
    )
  }
}

export default Social;
