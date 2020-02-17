import React from "react"
import { useStaticQuery, Link, navigate, graphql } from "gatsby"
import { logout } from "../services/auth"
import Img from "gatsby-image"
import "../styles/nav-mob.css"

const NavBarMob = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/src/images/layout/" } }) {
        edges {
          node {
            name
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
          fluid={data.allFile.edges.node.name["home.png"]}
        />
      </Link>
      <Link to="/Teams" className="ikone">
        <Img className="iconTeams" fluid={data.allFile.edges.node["2_teams"]} />
      </Link>
      <Link to="/Drivers" className="ikone">
        <Img
          className="iconDrivers"
          fluid={data.allFile.edges.node["3_drivers"]}
        />
      </Link>
      <Link to="/Schedule" className="ikone">
        <Img
          className="iconSchedule"
          fluid={data.allFile.edges.node.name["4_schedule"]}
        />
      </Link>
      <Link to="/Standings" className="ikone">
        <Img
          className="iconStandings"
          fluid={data.allFile.edges.node.name["5_standings"]}
        />
      </Link>
      <Link
        to="/app/login/"
        className="ikone"
        href="/"
        onClick={event => {
          if (window.confirm("Are you sure you want to log out?")) {
            event.preventDefault()
            logout(() => navigate(`/app/login/`))
          }
        }}
      >
        <Img
          className="iconLogout"
          fluid={data.allFile.edges.node.name["logout"]}
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
