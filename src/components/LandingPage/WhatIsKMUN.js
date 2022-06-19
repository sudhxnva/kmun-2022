import React from "react"
import ButtonFilled from "../Button/ButtonFilled"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { KMUNIntroStyles } from "./LandingPageStyles"

const WhatIsKMUN = ({ title, content, link, linkText }) => {
  return (
    <KMUNIntroStyles className="section">
      <div className="container container__tight kmun-inner-container">
        <div className="kmun-desc-inner-container">
          <h1 className="kmun-desc-heading">
            WHAT IS <span>KMUN</span>
          </h1>
          <p>
            Kumarans Model United Nations is a well reputed simulation of the
            United Nations and its other multi-lateral bodies where students
            assume roles of ambassadors of countries, individuals or any
            portfolios of power while deliberating, discussing and debating
            topics of global importance and relevance.
          </p>
          <p>
            KMUN has its roots sown back in 2008 to encourage students to
            understand and find solutions to real world problems, not just those
            in textbooks.
          </p>

          <ButtonFilled text={linkText} as={Link} to={link} />
        </div>
        <div className="desc-image">
          <StaticImage
            alt="HOC Committee"
            src="../../../static/auditorium-1-masked.png"
            layout="constrained"
            placeholder="tracedSVG"
            className="hello"
          />
        </div>
      </div>
    </KMUNIntroStyles>
  )
}

export default WhatIsKMUN
