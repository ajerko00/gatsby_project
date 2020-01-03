import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/post-teams.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div>
      <Layout />
      <h1>{post.frontmatter.title}</h1>
      <div>{post.frontmatter.stuff}</div>
      <Img fluid={featuredImgFluid} />
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
