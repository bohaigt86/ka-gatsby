import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.name}</h2>
        <h2>{post.frontmatter.job}</h2>
        <p>{post.frontmatter.description}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        job
        description
      }
    }
  }
`
