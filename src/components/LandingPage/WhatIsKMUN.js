import React from "react"
import ButtonFilled from "../Button/ButtonFilled"
import { BasicTextModuleStyles } from "../BasicTextModule/BasicTextModuleStyles"
import { Link } from "gatsby"

const WhatIsKMUN = ({ title, content, link, linkText }) => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="container container__tight">
        <div>
          <h1 style={{ fontSize: "80px", fontWeight: "900" }}>
            WHAT IS <span style={{ fontSize: "160px" }}>KMUN</span>
          </h1>
          <p style={{ marginBottom: "60px", textAlign: "justify" }}>
            Kumarans Model United Nations is a well reputed simulation of the
            United Nations and its other multi-lateral bodies where students
            assume roles of ambassadors of countries, individuals or any
            portfolios of power while deliberating, discussing and debating
            topics of global importance and relevance.
          </p>
          <p style={{ textAlign: "justify", paddingBottom: "20px" }}>
            KMUN has its roots sown back in 2008 to encourage students to
            understand and find solutions to real world problems, not just those
            in textbooks.
          </p>

          <ButtonFilled text={linkText} as={Link} to={link} />
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default WhatIsKMUN
