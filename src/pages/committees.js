import * as React from "react"
import Layout from "../components/Layout"
import Committee from "../components/Committee/Committee"
import {Wrapper,Flow} from "../components/Committee/CommitteeStyles"
import Seo from "../components/SEO"

const committees = () => {
  return (
    <>
      <Seo title="Committee" />
      <Layout>
      <Flow>
      <p
      style={{
        marginTop:'10rem',
        marginLeft:'4rem',
        fontSize:'3rem',
        color:'#E7A9D4',
        fontWeight:'800',
      }}
      >CRISIS</p>
        <Wrapper>
        <Committee />
        <Committee />
        <Committee />
        <Committee />
        </Wrapper>
        <p
        style={{
          marginTop:'2rem',
          marginLeft:'4rem',
          color:'#E7A9D4',
          fontSize:'3rem',
          fontWeight:'800',
        }}>NON-CRISIS</p>
        <Wrapper>
        <Committee />
        <Committee />
        <Committee />
        <Committee />
        <Committee />
        <Committee />
        </Wrapper>
        </Flow>
      </Layout>
    </>
  )
}

export default committees
