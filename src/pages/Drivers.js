import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/drivers.css"

const Drivers = ({ data }) => {
  return (
    <div>
      <SEO title="Drivers" />
      <Layout />

      <div id="grid-container-drivers">
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div class="grid-item-drivers">
          <Img fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}
export default Drivers

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
