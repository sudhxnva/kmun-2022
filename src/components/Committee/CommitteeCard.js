import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const CommitteeCard = ({ data }) => {
  return (
    <div className="comm-card">
      <div className="comm-intro-grid">
        <div className="comm-img-container">
          {data.committeeLogo.gatsbyImageData ? (
            <GatsbyImage image={data.committeeLogo.gatsbyImageData} />
          ) : (
            <img
              src={data.committeeLogo.url}
              style={{ width: "100%" }}
              alt="Committee logo"
            />
          )}
        </div>

        <span className="comm-name">{data.committeeName}</span>
        <div className="comm-desc">
          <p className="writeup">
            {data.committeeDescription.committeeDescription}
          </p>
        </div>
      </div>
      <div className="dais">
        <div className="eb-member">
          <div className="eb-img">
            <GatsbyImage image={data.chairpersonImage.gatsbyImageData} />
          </div>
          <div className="eb-text">
            <span className="eb-title"> {data.chairpersonName}</span>
            <span className="eb-name">{data.chairpersonPosition}</span>
          </div>
        </div>
        <div className="eb-member">
          <div className="eb-img">
            <GatsbyImage image={data.viceChairImage.gatsbyImageData} />
          </div>
          <div className="eb-text">
            <span className="eb-title">{data.viceChairName}</span>
            <span className="eb-name"> {data.viceChairPosition}</span>
          </div>
        </div>
        <div className="eb-member">
          <div className="eb-img">
            <GatsbyImage image={data.modImage.gatsbyImageData} />
          </div>
          <div className="eb-text">
            <span className="eb-title">{data.modName}</span>
            <span className="eb-name">{data.modPosition}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommitteeCard
