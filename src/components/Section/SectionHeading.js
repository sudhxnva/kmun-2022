import React from "react"
import { SectionHeadingStyles } from "./SectionStyles"

const SectionHeading = ({ title }) => {
  return (
    <SectionHeadingStyles className="section">
      <h1 className="section-heading">{title}</h1>
    </SectionHeadingStyles>
  )
}

export default SectionHeading
