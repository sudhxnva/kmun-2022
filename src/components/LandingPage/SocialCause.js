import React from "react"
import { BasicTextModuleStyles } from "../BasicTextModule/BasicTextModuleStyles"

const SocialCause = ({ title, content, link, linkText }) => {
  const headerStyle = {
    fontSize: "180px",
    fontWeight: "900",
    lineHeight: "170px",
    color: "var(--inActive)",
  }
  return (
    <BasicTextModuleStyles
      className="section"
      style={{
        backgroundColor: "var(--background-secondary)",
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <div
        className="container container__tight"
        style={{
          display: "grid",
          gridAutoFlow: "column",
          maxWidth: "90%",
          alignItems: "center",
        }}
      >
        <div>
          <span style={headerStyle}>SOCIAL</span>
          <br />
          <span style={{ ...headerStyle, fontSize: "200px" }}>CAUSE</span>
        </div>
        <div>
          <p style={{ paddingLeft: "10%" }}>
            This year, KMUN is making provisions to aid students of underserved
            communities to also participate apart from a wide array of school
            students across Bengaluru, encompassing various relevant global
            issues that the students shall engage in. KMUN, as always,
            encourages healthy competition amongst the budding changemakers.
          </p>
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default SocialCause
