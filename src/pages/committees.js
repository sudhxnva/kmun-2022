import * as React from "react"
import Layout from "../components/Layout"
import Committee from "../components/Committee/Committee"
import Seo from "../components/SEO"

const committees = () => {
  return (
    <>
      <Seo title="Committee" />
      <Layout>
        <Committee />
      </Layout>
    </>
  )
}

export default committees
