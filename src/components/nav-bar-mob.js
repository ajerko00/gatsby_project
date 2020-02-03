import React from "react"
import { useStaticQuery, Link, navigate } from "gatsby"
import { logout } from "../services/auth"
import Img from "gatsby-image"
import "../styles/nav-mob.css"

const NavBarMob = () => {
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
      <Link
        to="/app/login/"
        className="ikone"
        href="/"
        onClick={event => {
          event.preventDefault()
          logout(() => navigate(`/app/login/`))
        }}
      >
        <Img
          className="iconLogout"
          fluid={data.allFile.edges[6].node.childImageSharp.fluid}
        />
      </Link>
    </div>
  )
}

export default NavBarMob

/* export const squareImage = graphql`
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
    Home: file(relativePath: { eq: "layout/home.png" }) {
      ...squareImage
    }
    Teams: file(relativePath: { eq: "layout/teams.png" }) {
      ...squareImage
    }
    Drivers: file(relativePath: { eq: "layout/drivers.png" }) {
      ...squareImage
    }
    Schedule: file(relativePath: { eq: "layout/schedule.png" }) {
      ...squareImage
    }
    Standings: file(relativePath: { eq: "layout/standings.png" }) {
      ...squareImage
    }
    Login: file(relativePath: { eq: "layout/login.png" }) {
      ...squareImage
    }
  }
` */
