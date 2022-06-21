import { graphql, useStaticQuery } from "gatsby"

const useCommitteeDetails = () => {
  const {
    allContentfulCommittee: { nodes },
  } = useStaticQuery(graphql`
    query featuredProductLinksQuery {
      allContentfulCommittee {
        nodes {
          id
          committeeName
          committeeDescription {
            committeeDescription
          }
          committeeLogo {
            url
            gatsbyImageData(width: 300, placeholder: TRACED_SVG)
          }
          chairpersonName
          chairpersonPosition
          chairpersonImage {
            url
            gatsbyImageData(
              width: 250
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          viceChairName
          viceChairImage {
            url
            gatsbyImageData(
              width: 250
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          viceChairPosition
          modName
          modImage {
            url
            gatsbyImageData(
              width: 250
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          modPosition
        }
      }
    }
  `)

  return nodes
}

export default useCommitteeDetails
