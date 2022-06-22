import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import useCommitteeDetails from "../../hooks/useCommitteeDetails"
import { CommitteeStyles } from "./LandingPageStyles"

const TenCommittees = () => {
  const committees = useCommitteeDetails()
  const topFive = committees.slice(0, 5)
  const bottomFive = committees.slice(5)

  return (
    <CommitteeStyles className="section">
      <div className="com-container">
        {topFive.map((c, idx) => (
          <div className="com-image-container" key={idx}>
            <GatsbyImage
              image={c.committeeLogo.gatsbyImageData}
              alt={c.committeeName + " committee logo"}
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
        {bottomFive.map((c, idx) => (
          <div className="com-image-container" key={idx}>
            <GatsbyImage
              image={c.committeeLogo.gatsbyImageData}
              alt={c.committeeName + " committee logo"}
            />
          </div>
        ))}
      </div>
    </CommitteeStyles>
  )
}

export default TenCommittees
