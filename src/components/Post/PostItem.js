import * as React from "react"
import Button from "../Button/Button"
import { PostItemStyles } from "./PostStyles"

const BlogItem = ({ node }, key) => {
  const { title, gatsbyPath, introduction, committee, authors, postDate } = node

  return (
    <PostItemStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      <span style={{ paddingBottom: "20px" }}>{committee}</span>
      {introduction && <p>{introduction}...</p>}
      {authors && (
        <span style={{ paddingBottom: "20px", fontSize: "13px" }}>
          <span style={{ color: "#999999" }}>by</span> {authors}
        </span>
      )}
      <div className="blogitem__meta">
        <Button as="span" text="Read More" arrow={true} />
        <p>{postDate}</p>
      </div>
    </PostItemStyles>
  )
}

export default BlogItem
