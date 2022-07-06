import { graphql, useStaticQuery } from "gatsby"

const useAllBlogPost = () => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery(graphql`
    query allBlogLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          gatsbyPath(filePath: "/press/{contentfulPost.url}")
          createdAt(formatString: "DD MMMM, YYYY")
          introduction
          committee
          authors
          postDate(formatString: "h:mm A | DD MMMM, YYYY ")
        }
      }
    }
  `)

  return nodes
}

export default useAllBlogPost
