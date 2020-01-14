import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/post-drivers.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div>
      <Layout />
      <h1>{post.frontmatter.title}</h1>
      <div className="upper">
        <div
          className="text1"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <Img className="slika-md" fluid={featuredImgFluid} />
      </div>

      <div className="text" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
