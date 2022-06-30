import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { SponsorStyles } from "./LandingPageStyles"

const Sponsors = () => {
  return (
    <SponsorStyles className="section">
      <div className="container container__tight">
        <h1 className="sponsor-heading">SPONSORED BY</h1>
        <div className="tvs-container">
          <StaticImage
            src="../../../static/logos/tvs-motors.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
            style={{ alignSelf: "center", width: "70%" }}
          />
          <p style={{ paddingTop: "4%" }}>Title Sponsor</p>
        </div>

        <div className="cosponsor-container">
          <div className="cosponsor-grid">
            <StaticImage
              src="../../../static/logos/Zylus-Logo@5x.png"
              alt="Perk Image"
              layout="constrained"
              placeholder="tracedSVG"
              className="sponsor-img"
            />
            <StaticImage
              src="../../../static/logos/datta-impact-logo.png"
              alt="Perk Image"
              layout="constrained"
              className="sponsor-img sm"
            />
            <StaticImage
              src="../../../static/logos/PDM-Logo.jpeg"
              alt="Perk Image"
              layout="constrained"
              className="sponsor-img"
            />
            <StaticImage
              src="../../../static/logos/dr-agarwals.svg"
              alt="Perk Image"
              layout="constrained"
              className="sponsor-img"
            />
          </div>
          <p>Co-Sponsors</p>
        </div>
      </div>
    </SponsorStyles>
  )
}

export default Sponsors
