import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import RichText from "../components/RichText"

const PostTemplate = (contentfulPost) => {
  const { title, committee, authors, postDate, content } = contentfulPost
  return (
    <>
      <section>
        <PostSingleStyles>
          {title && (
            <h1 className="blogsingle__title" style={{ marginBottom: "0" }}>
              {title}
            </h1>
          )}
          {committee && (
            <p style={{ margin: 0, marginBottom: "10px" }}>{committee}</p>
          )}
          <div className="byline-container">
            {authors && (
              <span className="author">
                <span style={{ color: "#999999" }}>by </span>
                {authors}
              </span>
            )}
            {postDate && <span className="date">{postDate}</span>}
          </div>
          {content && (
            <article className="blogsingle__content">
              <RichText richText={content} />
              <div className="blogsingle__back">
                <Button to="/press" text="Back to Press" as={Link} />
              </div>
            </article>
          )}
        </PostSingleStyles>
      </section>
    </>
  )
}

export default PostTemplate
