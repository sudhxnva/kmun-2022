import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Registration from "../components/Registration/Registration"

const Register = () => {
  return (
    <>
      <Seo title="Committee" />
      <Layout>
        <Registration />
      </Layout>
    </>
  )
}

export default Register
