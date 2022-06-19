import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { BasicTextModuleStyles } from "../BasicTextModule/BasicTextModuleStyles"

const committees = [0, 0, 0, 0, 0]

const TenCommittees = () => {
  const comContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "0 auto",
  }

  return (
    <BasicTextModuleStyles className="section">
      <div style={comContainerStyles}>
        {committees.map((c, idx) => (
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "var(--bodyColor)",
              padding: "10px",
            }}
            key={idx}
          >
            <StaticImage
              alt="HOC Committee"
              src="../../../static/committee/HOC.svg"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>
        ))}
      </div>

      <div
        className="container container__tight"
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 4fr",
          fontWeight: "900",
        }}
      >
        <h1
          style={{
            fontSize: "300px",
            justifySelf: "end",
            fontWeight: "900",
            lineHeight: "280px",
            color: "var(--primary)",
          }}
        >
          10
        </h1>
        <div style={{ alignSelf: "center" }}>
          <p style={{ fontSize: "80px", color: "var(--primary)" }}>
            {" "}
            th EDITION
          </p>
          <p style={{ fontSize: "80px", color: "var(--primary)" }}>
            COMMITTEES
          </p>
        </div>
      </div>

      <div style={comContainerStyles}>
        {committees.map((c, idx) => (
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "var(--bodyColor)",
              padding: "10px",
            }}
            key={idx}
          >
            <StaticImage
              alt="HOC Committee"
              src="../../../static/committee/HOC.svg"
              layout="constrained"
              placeholder="tracedSVG"
            />
          </div>
        ))}
      </div>
    </BasicTextModuleStyles>
  )
}

export default TenCommittees
