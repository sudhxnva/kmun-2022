import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import About from "../components/About/About"

const CommitteesPage = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <About />
      </Layout>
    </>
  )
}

export default CommitteesPage
