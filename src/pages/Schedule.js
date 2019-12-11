import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/schedule.css"

const Schedule = ({data}) => {
  return (
    <div>
      <SEO title="Schedule" />
      <Layout />

      <div id="grid-container-schedule">
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-schedule">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
      </div>

      <h1>Schedule</h1>
    </div>
  )
}
export default Schedule

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
