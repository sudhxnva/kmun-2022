import React from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css"

import { RegistrationStyles } from "./RegistrationStyles"
import { useEffect } from "react"
import { useRef } from "react"

const Registration = () => {
  const form = useRef()

  useEffect(() => {
    console.log(form.current)
    createWidget("sL32D2at", {
      container: form.current,
      opacity: 0,
    })
  }, [])

  return (
    <RegistrationStyles className="section">
      <h1>Register</h1>
      <div ref={form} style={{ width: "100%", height: "70vh" }}></div>
    </RegistrationStyles>
  )
}

export default Registration
