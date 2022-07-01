import { motion } from "framer-motion"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import React, { useCallback, useState } from "react"
import useOCTiles from "../../hooks/useOCTiles"
import ButtonFilled from "../Button/ButtonFilled"
import Section from "../Section/Section"
import SectionHeading from "../Section/SectionHeading"
import { AboutStyles } from "./AboutStyles"

const aboutMun = `Model United Nations is a simulation of the United Nations and its other multi-lateral bodies where students assume roles of ambassadors of countries, individuals or any portfolios of power while deliberating, discussing and debating topics of global importance and relevance.
          
          Kumarans Model United Nations is one such reputed venture that has its roots sown back in 2008 to encourage students to understand and find solutions to real world problems, not just those in textbooks. From then, KMUN has evolved into an inter school conference across Bengaluru and has been in the past acredited to United Nations Information Centres Bhutan and India. After a long hiatus due to the COVID-19 Pandemic, staying true to the school’s motto “Lead Kindly Light”, KMUN is back to rekindle the light. This year is special not only because the event is back after a break, but it also happens to be our 10th edition, which means we are ready to make it bigger and more spectacular than ever. To grace our event, we have also invited students from underserved communities to give them an equal platform to learn, teach, compete and win.`

const letterContent = `Greetings!


It brings me immense pleasure to welcome you to the 10th Edition of the Kumarans Model United Nations, which, for the first time since the COVID-19 pandemic, will be held in person from the 6th to the 8th of July 2022. As the world creates order from chaos, world leaders are leading their citizens to peace, harmony and safety, and it is time the leaders of tomorrow also become part of this fabric. 

The entire world’s abrupt halt led most students to resort to online modes of education and competition, which could never replace face-to-face interaction even though it was enlightening in many ways. With the entire world coming together once again, fighting together, we invite the students, the leaders of tomorrow, to step out of their shells and enter a realm of discussion, debate and deliberation to act upon relevant socio-political issues of the day and find cooperative solutions to it.

Kumarans Model United Nations is a unified venture by the Alumni of the Kumaran Group of Institutions. This torch has been passed down by many hands as the flame remained steady and bright. Since its inception in 2008, our conference has striven to deliver a robust and comprehensive simulation of the United Nations and its multilateral institutions. It has laid the foundation for many successful internationally recognised MUNners. KMUN is also one of the few Model UNs recognised by the United Nations Information Centres of Bhutan and India in its previous editions.

The Secretariat team has been working diligently to ensure that all delegates will be given the opportunity to develop broader perspectives, voice their opinions on contentious issues, and cooperate with others to produce impactful resolutions. 

We expect that the topics covered in the committee will be challenging; as such, our conference staffers undergo a rigorous training process so that they may provide helpful guidance and assistance when needed. After a conference such as KMUN, full of diplomacy, debate, and delight, delegates will leave with a higher potential to become future leaders of our society.

After having taken feedback from delegates, advisors and our staff, we have decided to host a curated set of ten committees: The General Assembly, United Nations Security Council, The Joint Crisis Committees, The Secretary General’s AdHoc Crisis Committee, The Historic House of Commons, The All India Political Parties Meet, The Union of European Football Association and The Black Gold Cooperation. The committees span a broad spectrum of conventional committees, crisis committees and specialised committees where delegates will have the opportunity to shape the very course of human history as we know it. 

Our conference will continue to uphold our fundamental values: the unrivalled, immersive educational experience we seek to deliver to each of our delegates, the necessity of inter-human respect and communication and also encourage students who are venturing into this world for the first time by specialised provisions in speeches, valour and confidence. 

The conference staff is composed entirely of undergraduate students, while they represent various academic interests from the Medical Sciences, Law to Communication Engineering, they are united in their passion for Model UN and desire to make a change. 

This Model United Nations understands that change is not privy only to those who can have it but is the birthright of everyone who can dream it. To uphold this dream, this KMUN hosts students from underserved communities apart from students from over ten schools to be a part of the change we strive to create and sustain. Ultimately, we will always strive to create an atmosphere receptive to learning, debating, cooperating, and most importantly, to strive to be better humans, better leaders and for a better tomorrow.

On behalf of the KMUN Secretariat, we welcome you to witness something beyond the realm of mundane life, a portal to ideate, employ and sustain change to deliver peace, harmony and hope to the future.

Please check our website for continuous updates and resources for the Model United Nations.
With no further delay , we welcome you to the Kumarans Model United Nations.


Yours Sincerely
Ananyan Sampath
Secretary General
KMUN 2022
`

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
        <div className="tile-title">Director General</div>
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
  const members = useOCTiles()
  const heads = members.filter((member) => member.ocHead)
  const nonHeads = members.filter((member) => !member.ocHead)

  const [letterOpen, setLetterOpen] = useState(false)

  const toggleLetter = useCallback(() => setLetterOpen((open) => !open), [])

  return (
    <AboutStyles className="section">
      <div className="container">
        <Section title="About the Conference" content={aboutMun} />
        <SectionHeading title="The Core Committee" />
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

        {letterOpen && (
          <motion.div
            className={"letter-container"}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.6] }}
          >
            <div className="letter-content">{letterContent}</div>
          </motion.div>
        )}

        <div className="letter">
          <ButtonFilled
            text={
              letterOpen ? "Close Letter" : "Letter from the Secretary General"
            }
            onClick={toggleLetter}
          />
        </div>
        {core}
        <SectionHeading title="Organising Committee" />
        <div className="tile-section">
          {heads.map((member) => (
            <div className="tile" key={member.id}>
              <div className="tile-img oc-img">
                <GatsbyImage
                  image={member.ocImage.gatsbyImageData}
                  alt={"Photo of" + member.ocTitle + " - " + member.ocName}
                />
              </div>
              <div className="tile-info">
                <div className="tile-name">{member.ocName}</div>
                <div
                  className="tile-title"
                  style={{ color: member.ocHead ? "" : "var(--bodyColor)" }}
                >
                  {member.ocTitle}
                </div>
              </div>
            </div>
          ))}
          {nonHeads.map((member) => (
            <div className="tile" key={member.id}>
              <div className="tile-img oc-img">
                <GatsbyImage
                  image={member.ocImage.gatsbyImageData}
                  alt={"Photo of" + member.ocTitle + " - " + member.ocName}
                />
              </div>
              <div className="tile-info">
                <div className="tile-name">{member.ocName}</div>
                <div
                  className="tile-title"
                  style={{ color: member.ocHead ? "" : "var(--bodyColor)" }}
                >
                  {member.ocTitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AboutStyles>
  )
}

export default About
