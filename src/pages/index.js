import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import Countdown from "../components/Countdown/Countdown"
import WhatIsKMUN from "../components/LandingPage/WhatIsKMUN"
import SocialCause from "../components/LandingPage/SocialCause"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule title="REKINDLE THE FLAME" />
        <Countdown />
        <WhatIsKMUN link="/register" linkText="Register Now" />
        <SocialCause />
      </Layout>
    </>
  )
}

export default Index
