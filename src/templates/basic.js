import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Basic = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Basic

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
