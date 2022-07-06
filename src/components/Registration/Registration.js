import React from "react"
import "@typeform/embed/build/css/widget.css"

import { RegistrationStyles } from "./RegistrationStyles"

const Registration = () => {
  return (
    <RegistrationStyles className="section">
      <div className="reg-banner container">
        <h1>
          REGISTRATIONS ARE <span className="highlight">CLOSED</span>
        </h1>
      </div>

      <div className="pricing container">
        <h2 className="reg-title">REGISTRATION FEES</h2>
        <div className="reg-grid">
          <div className="reg-grid-box border-right-lg">
            <h3 className="reg-type">Individual</h3>
            <div className="price-info-container">
              <div className="price-info border-right">
                <div className="price">&#x20B9;999</div>
                <div className="price-type">Early Bird</div>
              </div>
              <div className="price-info">
                <div className="price">&#x20B9;1199</div>
                <div className="price-type">Regular (Post 30th June)</div>
              </div>
            </div>
          </div>
          <div className="reg-grid-box">
            <h3 className="reg-type">Delegation</h3>
            <div className="price-info-container">
              <div className="price-info border-right">
                <div className="price">&#x20B9;8999</div>
                <div className="price-type">Early Bird</div>
              </div>
              <div className="price-info">
                <div className="price">&#x20B9;11599</div>
                <div className="price-type">Regular (Post 30th June)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RegistrationStyles>
  )
}

export default Registration
