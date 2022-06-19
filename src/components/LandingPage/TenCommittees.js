import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { CommitteeStyles } from "./LandingPageStyles"

const committees = [0, 0, 0, 0, 0]

const TenCommittees = () => {
  return (
    <CommitteeStyles className="section">
      <div className="com-container">
        {committees.map((c, idx) => (
          <div className="com-image-container" key={idx}>
            <StaticImage
              alt="HOC Committee"
              src="../../../static/committee/HOC.svg"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>
        ))}
      </div>

      <div className="com-text-container">
        <h1 className="com-10">10</h1>
        <div className="com-text">
          <h1> th EDITION</h1>
          <h1>COMMITTEES</h1>
        </div>
      </div>

      <div className="com-container">
        {committees.map((c, idx) => (
          <div className="com-image-container" key={idx}>
            <StaticImage
              alt="HOC Committee"
              src="../../../static/committee/HOC.svg"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>
        ))}
      </div>
    </CommitteeStyles>
  )
}

export default TenCommittees
