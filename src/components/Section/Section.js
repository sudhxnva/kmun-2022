import React from "react"
import { SectionStyles } from "./SectionStyles"

const Section = ({ title, content }) => {
  return (
    <SectionStyles>
      <div className="sc-container">
        <div className="sc-heading-container">
          <h1 className="sc-heading">{title}</h1>
        </div>
        <div className="sc-description">
          <p>{content}</p>
        </div>
      </div>
    </SectionStyles>
  )
}

export default Section
