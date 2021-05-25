import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const TopBanner = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query pageQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              thumbnail {
                childImageSharp {
                  gatsbyImageData
                }
              }
              featured
              description
              date
              slug
              title
            }
          }
        }
      }
    }
  `)

  return (
    <div id="top-banner">
      <Slide {...settings}>
        {allMarkdownRemark.edges.map(post => {
          if (
            post.node.frontmatter.featured &&
            post.node.frontmatter.slug.includes("/news")
          ) {
            const image = getImage(
              post.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
            )

            return (
              <div className="slide-item" key={post.node.frontmatter.date}>
                <GatsbyImage
                  className="image"
                  image={image}
                  alt={post.node.frontmatter.title}
                />
                <div className="title">
                  <h2>{post.node.frontmatter.title}</h2>
                </div>
              </div>
            )
          }
        })}
      </Slide>
    </div>
  )
}

export default TopBanner
