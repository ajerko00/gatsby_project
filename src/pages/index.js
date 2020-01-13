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

      <Img className="asd" fluid={data.backGr.childImageSharp.fluid} />

      <div className="NextRace">
        <Img fluid={data.BigOne.childImageSharp.fluid} />
        <p>NEXT RACE: AUSTIN, USA 01 - 03 NOV</p>
      </div>

      <div id="container-art">
        <Link to="/first-article" className="article">
          <Img className="artImg" fluid={data.article1.childImageSharp.fluid} />
          <p>Exciting week in Mexico City</p>
        </Link>
        <Link to="/second-article" className="article">
          <Img className="artImg" fluid={data.article2.childImageSharp.fluid} />
          <p>Hamilton close to his 6th title</p>
        </Link>
        <Link to="/third-article" className="article">
          <Img className="artImg" fluid={data.article3.childImageSharp.fluid} />
          <p>Young talent looking to challenge the old guard</p>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const query = graphql`
  query {
    article1: file(relativePath: { eq: "home/article1.jpg" }) {
      ...squareImage
    }
    article2: file(relativePath: { eq: "home/article2.jpg" }) {
      ...squareImage
    }
    article3: file(relativePath: { eq: "home/article3.jpg" }) {
      ...squareImage
    }
    backGr: file(relativePath: { eq: "home/background.jpg" }) {
      ...squareImage
    }
    BigOne: file(relativePath: { eq: "home/BigOne.jpg" }) {
      ...squareImage
    }
  }
`
