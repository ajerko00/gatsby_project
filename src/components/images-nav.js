import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "../styles/images-nav.css"

const ImagesNav = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/src/images/layout/" } }) {
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
  `)

  return (
    <div id="grid-ikone">
      <Link to="/" className="ikone">
        <Img
          className="iconHome"
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        />
      </Link>
      <Link to="/Teams" className="ikone">
        <Img
          className="iconTeams"
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
        />
      </Link>
      <Link to="/Drivers" className="ikone">
        <Img
          className="iconDrivers"
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
        />
      </Link>
      <Link to="/Schedule" className="ikone">
        <Img
          className="iconSchedule"
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
        />
      </Link>
      <Link to="/Standings" className="ikone">
        <Img
          className="iconStandings"
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
        />
      </Link>
      <Link to="/app/login" className="ikone">
        <Img
          className="iconLogin"
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
        />
      </Link>
    </div>
  )
}

export default ImagesNav
