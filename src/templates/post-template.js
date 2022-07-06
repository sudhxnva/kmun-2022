import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Post/PostStyles"
import RichText from "../components/RichText"

const PostTemplate = (contentfulPost) => {
  const { title, committee, authors, createdAt, content } = contentfulPost
  return (
    <>
      <section>
        <PostSingleStyles>
          {title && <h1 className="blogsingle__title">{title}</h1>}
          <div class="grid-container">
          {authors && (
        <p className="author">{authors}</p>
      )}
          {createdAt && (
            <p className="date">{createdAt}</p>
          )}
          
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
