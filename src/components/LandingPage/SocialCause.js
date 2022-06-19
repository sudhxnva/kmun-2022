import React from "react"
import { SocialCauseStyles } from "./LandingPageStyles"

const SocialCause = ({ title, content, link, linkText }) => {
  return (
    <SocialCauseStyles className="section">
      <div className="sc-container">
        <div className="sc-heading-container">
          <h1 className="sc-heading">SOCIAL</h1>
          <br />
          <h1 className="sc-heading larger">CAUSE</h1>
        </div>
        <div className="sc-description">
          <p>
            This year, KMUN is making provisions to aid students of underserved
            communities to also participate apart from a wide array of school
            students across Bengaluru, encompassing various relevant global
            issues that the students shall engage in. KMUN, as always,
            encourages healthy competition amongst the budding changemakers.
          </p>
        </div>
      </div>
    </SocialCauseStyles>
  )
}

export default SocialCause
