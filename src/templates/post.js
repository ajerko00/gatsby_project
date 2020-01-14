import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/post.css"
import TalkyardCommentsIframe from "@debiki/gatsby-plugin-talkyard"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div>
      <Layout />
      <h1>{post.frontmatter.title}</h1>
      <Img className="slika-md" fluid={featuredImgFluid} />
      <div className="text" dangerouslySetInnerHTML={{ __html: post.html }} />
      <TalkyardCommentsIframe />
    </div>
  )
}

export const query = graphql`
  query postQueryAndPostQuery($path: String!) {
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
