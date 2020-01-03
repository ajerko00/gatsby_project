import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/teams.css"

const Teams = ({ data }) => {
  return (
    <div className="teams_f1">
      <SEO title="Teams" />
      <Layout />

      <div id="grid-container-teams">
        {/* {data.allFile.edges.map(edge => (
          <Img fluid={edge.node.childImageSharp.fluid} />
        ))} */}

        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[4].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[5].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[6].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[7].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[8].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-teams">
          <Img fluid={data.allFile.edges[9].node.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}
export default Teams

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/src/images/teams/" } }) {
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
