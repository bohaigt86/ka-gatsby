import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Leadership = () => {
  // const { allMarkdownRemark } = useStaticQuery(graphql`
  //   query pageQuery {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             description
  //             date
  //             slug
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // return (
  //   <div className="">
  //     <ul className="academic">
  //       {allMarkdownRemark.edges.map(post => {
  //         if (
  //           post.node.frontmatter.slug.includes("/academic-leadership-team")
  //         ) {
  //           console.log(post.node.frontmatter)
  //           return <li>{post.node.frontmatter.title}</li>
  //         }
  //       })}
  //     </ul>
  //   </div>
  // )

  return <></>
}

export default Leadership
