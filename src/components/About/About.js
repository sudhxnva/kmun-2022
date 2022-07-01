import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ButtonFilled from "../Button/ButtonFilled"
import Section from "../Section/Section"
import SectionHeading from "../Section/SectionHeading"
import { AboutStyles } from "./AboutStyles"

const aboutMun = `Model United Nations is a simulation of the United Nations and its other multi-lateral bodies where students assume roles of ambassadors of countries, individuals or any portfolios of power while deliberating, discussing and debating topics of global importance and relevance.
          
          Kumarans Model United Nations is one such reputed venture that has its roots sown back in 2008 to encourage students to understand and find solutions to real world problems, not just those in textbooks. From then, KMUN has evolved into an inter school conference across Bengaluru and has been in the past acredited to United Nations Information Centres Bhutan and India. After a long hiatus due to the COVID-19 Pandemic, staying true to the school’s motto “Lead Kindly Light”, KMUN is back to rekindle the light. This year is special not only because the event is back after a break, but it also happens to be our 10th edition, which means we are ready to make it bigger and more spectacular than ever. To grace our event, we have also invited students from underserved communities to give them an equal platform to learn, teach, compete and win.`

const secGen = (
  <>
    <div className="secgen-section">
      <div className="tile-img secgen-img">
        <StaticImage
          src="../../../static/core/ananyan.png"
          alt="Core Committee Member Image"
        />
      </div>
      <div className="tile-info secgen-info">
        <div className="tile-name secgen-name">Ananyan Sampath</div>
        <div className="tile-title secgen-title">Secretary General</div>
      </div>
    </div>
    <div className="letter">
      <ButtonFilled text="Secretary General's Letter" />
    </div>
  </>
)

const core = (
  <div className="tile-section">
    <div className="tile">
      <div className="tile-img">
        <StaticImage
          src="../../../static/core/advait.png"
          alt="Core Committee Member Image"
        />
      </div>
      <div className="tile-info">
        <div className="tile-name">Advait Kaluve</div>
        <div className="tile-title">Directory General</div>
      </div>
    </div>
    <div className="tile">
      <div className="tile-img">
        <StaticImage
          src="../../../static/core/sudhanva.png"
          alt="Core Committee Member Image"
        />
      </div>
      <div className="tile-info">
        <div className="tile-name">Sudhanva M</div>
        <div className="tile-title">Under Secretary General</div>
      </div>
    </div>
    <div className="tile">
      <div className="tile-img">
        <StaticImage
          src="../../../static/core/samartha.png"
          alt="Core Committee Member Image"
        />
      </div>
      <div className="tile-info">
        <div className="tile-name">Samartha S</div>
        <div className="tile-title">Under Secretary General</div>
      </div>
    </div>
    <div className="tile">
      <div className="tile-img">
        <StaticImage
          src="../../../static/core/ashwin.png"
          alt="Core Committee Member Image"
        />
      </div>
      <div className="tile-info">
        <div className="tile-name">Ashwin Sarathi Krishnan</div>
        <div className="tile-title">International Head of Press</div>
      </div>
    </div>
  </div>
)

const About = () => {
  return (
    <AboutStyles className="section">
      <div className="container">
        <Section title="About the Conference" content={aboutMun} />
        <SectionHeading title="The Core Committee" />
        {secGen}
        {core}
        <SectionHeading title="Organising Committee" />
      </div>
    </AboutStyles>
  )
}

export default About
