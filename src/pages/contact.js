import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Contact from "../components/Contact/Contact"

const Register = () => {
  return (
    <>
      <Seo title="Contact Us" />
      <Layout>
        <Contact />
      </Layout>
    </>
  )
}

export default Register
