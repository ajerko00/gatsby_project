import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/teams.css"

const Teams = ({ data }) => {
  return (
    <div>
      <SEO title="Teams" />
      <Layout />

      <div id="grid-container-teams">
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}
export default Teams

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//src/images//" } }) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
