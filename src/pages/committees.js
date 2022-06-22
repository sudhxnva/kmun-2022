import * as React from "react"
import Layout from "../components/Layout"
import Committees from "../components/Committee/Committees"
import Seo from "../components/SEO"
import useCommitteeDetails from "../hooks/useCommitteeDetails"

const CommitteesPage = () => {
  const committees = useCommitteeDetails()

  return (
    <>
      <Seo title="Committees" />
      <Layout>
        <Committees committees={committees} />
      </Layout>
    </>
  )
}

export default CommitteesPage
