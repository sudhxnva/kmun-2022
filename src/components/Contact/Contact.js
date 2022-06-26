import React from "react"
import { ContactStyles } from "./ContactStyles"

// @refresh reset

const Contact = () => {
  return (
    <ContactStyles className="section">
      <div className="container">
        <h1>Get in Touch</h1>
        <div className="email-container">
          <div className="email">
            Questions/information about the MUN:{" "}
            <span className="bold">support@kmun.in</span>
          </div>
          <div className="email">
            Queries on sponsorships:{" "}
            <span className="bold">finance@kmun.in</span>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="contact">
            <div className="title">Secretary General</div>
            <div className="name">Ananyan Sampath</div>
            <div className="phone">+91 70227 72669</div>
          </div>
          <div className="contact">
            <div className="title">Director General</div>
            <div className="name">Advait Kaluve</div>
            <div className="phone">+91 96867 83550</div>
          </div>
          <div className="contact">
            <div className="title">Head of Finance</div>
            <div className="name">Supraja N</div>
            <div className="phone">+91 86189 42576</div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Location</h1>
        <div className="map-embed">
          <iframe
            title="kumarans-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2536.925144191935!2d77.5429587716022!3d12.847200076536524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae403924492967%3A0xf833209c13c73fe1!2sSri%20Kumaran%20Public%20School%20-%20ICSE!5e0!3m2!1sen!2sin!4v1656043942650!5m2!1sen!2sin"
            style={{
              border: 0,
              width: "100%",
              height: 300,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </ContactStyles>
  )
}

export default Contact
