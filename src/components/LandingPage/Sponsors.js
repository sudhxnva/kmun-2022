import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { BasicTextModuleStyles } from "../BasicTextModule/BasicTextModuleStyles"

const Sponsors = () => {
  return (
    <BasicTextModuleStyles className="section">
      <div className="container container__tight">
        <h1
          style={{
            fontSize: "150px",
            fontWeight: "900",
            color: "var(--primary)",
            textAlign: "center",
          }}
        >
          SPONSORED BY
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "0 auto",
            marginTop: "5%",
          }}
        >
          <StaticImage
            src="../../../static/logos/tvs-motors.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
            style={{ alignSelf: "center", width: "70%" }}
          />
          {/* <p style={{ paddingTop: "4%" }}>Title Sponsor</p> */}
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default Sponsors
