import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule title="REKINDLE THE FLAME" />
      </Layout>
    </>
  )
}

export default Index
