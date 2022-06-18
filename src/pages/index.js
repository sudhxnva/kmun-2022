import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import Countdown from "../components/Countdown/Countdown"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule title="REKINDLE THE FLAME" />
        <Countdown />
      </Layout>
    </>
  )
}

export default Index
