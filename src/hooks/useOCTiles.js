import { graphql, useStaticQuery } from "gatsby"

const useOCTiles = () => {
  const {
    allContentfulOcImageTile: { nodes },
  } = useStaticQuery(graphql`
    query OCTilesQuery {
      allContentfulOcImageTile {
        nodes {
          id
          ocName
          ocTitle
          ocHead
          ocImage {
            gatsbyImageData(width: 250, placeholder: BLURRED)
          }
        }
      }
    }
  `)

  return nodes
}

export default useOCTiles
