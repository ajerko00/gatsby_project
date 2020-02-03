import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "../styles/teams.css"
import Footer from "../components/footer"

const Teams = ({ data }) => {
  return (
    <>
      <Layout />
      <div className="teams_f1">
        <SEO title="Teams" />

        <div id="grid-container-teams">
          <Link to="/AlfaRomeo" className="grid-item-teams">
            <Img fluid={data.AlfaRomeo.childImageSharp.fluid} />
          </Link>
          <Link to="/Ferrari" className="grid-item-teams">
            <Img fluid={data.Ferrari.childImageSharp.fluid} />
          </Link>
          <Link to="/Haas" className="grid-item-teams">
            <Img fluid={data.Haas.childImageSharp.fluid} />
          </Link>
          <Link to="/McLaren" className="grid-item-teams">
            <Img fluid={data.McLaren.childImageSharp.fluid} />
          </Link>
          <Link to="/Mercedes" className="grid-item-teams">
            <Img fluid={data.Mercedes.childImageSharp.fluid} />
          </Link>
          <Link to="/RacingPoint" className="grid-item-teams">
            <Img fluid={data.RacingPoint.childImageSharp.fluid} />
          </Link>
          <Link to="/RedBull" className="grid-item-teams">
            <Img fluid={data.RedBull.childImageSharp.fluid} />
          </Link>
          <Link to="/Renault" className="grid-item-teams">
            <Img fluid={data.Renault.childImageSharp.fluid} />
          </Link>
          <Link to="/ToroRosso" className="grid-item-teams">
            <Img fluid={data.ToroRosso.childImageSharp.fluid} />
          </Link>
          <Link to="/Williams" className="grid-item-teams">
            <Img fluid={data.Williams.childImageSharp.fluid} />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Teams

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
    AlfaRomeo: file(relativePath: { eq: "teams/AlfaRomeo.jpg" }) {
      ...squareImage
    }
    Ferrari: file(relativePath: { eq: "teams/Ferrari.jpg" }) {
      ...squareImage
    }
    Haas: file(relativePath: { eq: "teams/HAAS.jpg" }) {
      ...squareImage
    }
    McLaren: file(relativePath: { eq: "teams/McLaren.jpg" }) {
      ...squareImage
    }
    Mercedes: file(relativePath: { eq: "teams/Mercedes.jpg" }) {
      ...squareImage
    }
    RacingPoint: file(relativePath: { eq: "teams/RacingPoint.jpg" }) {
      ...squareImage
    }
    RedBull: file(relativePath: { eq: "teams/RedBull.png" }) {
      ...squareImage
    }
    Renault: file(relativePath: { eq: "teams/Renault.png" }) {
      ...squareImage
    }
    ToroRosso: file(relativePath: { eq: "teams/ToroRosso.jpg" }) {
      ...squareImage
    }
    Williams: file(relativePath: { eq: "teams/Williams.png" }) {
      ...squareImage
    }
  }
`
