import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "../styles/index.css"

import SEO from "../components/seo"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Layout />

      <div className="asd">
        <Img fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
      </div>

      <div className="NextRace">
        <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
        <p>NEXT RACE: AUSTIN, USA 01 - 03 NOV</p>
      </div>

      <div id="container-art">
        <Link to="/first-article" className="article">
          <Img
            className="artImg"
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          />
          <p>Exciting week in Mexico City</p>
        </Link>
        <Link to="/second-article" className="article">
          <Img
            className="artImg"
            fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          />
          <p>Hamilton close to his 6th title</p>
        </Link>
        <Link to="/third-article" className="article">
          <Img
            className="artImg"
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          />
          <p>Young talent looking to challenge the old guard</p>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "src/images/home/" } }) {
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
