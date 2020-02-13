import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "../styles/index.css"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Layout />
      <div className="test">
        <Img className="asd" fluid={data.backGr.childImageSharp.fluid} />

        <div className="NextRace">
          <Img fluid={data.BigOne.childImageSharp.fluid} />
          <p>NEXT RACE: AUSTIN, USA 01 - 03 NOV</p>
        </div>
      </div>
      <div id="container-art">
        <Link to="/first-article" className="article">
          <Img className="artImg" fluid={data.article1.childImageSharp.fluid} />
          <h2>Exciting week in Mexico City</h2>
        </Link>
        <Link to="/second-article" className="article">
          <Img className="artImg" fluid={data.article2.childImageSharp.fluid} />
          <h2>Hamilton close to his 6th title</h2>
        </Link>
        <Link to="/third-article" className="article">
          <Img className="artImg" fluid={data.article3.childImageSharp.fluid} />
          <h2>Young talent looking to challenge the old guard</h2>
        </Link>
      </div>
      <Footer />
    </>
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
