import React from "react"
import { useStaticQuery, Link, navigate, graphql } from "gatsby"
import { logout } from "../services/auth"
import Img from "gatsby-image"
import "../styles/nav-mob.css"

const NavBarMob = () => {
  const data = useStaticQuery(graphql`
    {
      Home: file(relativePath: { eq: "layout/home.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Teams: file(relativePath: { eq: "layout/teams.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Drivers: file(relativePath: { eq: "layout/drivers.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Schedule: file(relativePath: { eq: "layout/schedule.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Standings: file(relativePath: { eq: "layout/standings.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Logout: file(relativePath: { eq: "layout/logout.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="grid-ikone">
      <Link to="/" className="ikone">
        <Img className="iconHome" fluid={data.Home.childImageSharp.fluid} />
      </Link>
      <Link to="/Teams" className="ikone">
        <Img className="iconTeams" fluid={data.Teams.childImageSharp.fluid} />
      </Link>
      <Link to="/Drivers" className="ikone">
        <Img
          className="iconDrivers"
          fluid={data.Drivers.childImageSharp.fluid}
        />
      </Link>
      <Link to="/Schedule" className="ikone">
        <Img
          className="iconSchedule"
          fluid={data.Schedule.childImageSharp.fluid}
        />
      </Link>
      <Link to="/Standings" className="ikone">
        <Img
          className="iconStandings"
          fluid={data.Standings.childImageSharp.fluid}
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
        <Img className="iconLogout" fluid={data.Logout.childImageSharp.fluid} />
      </Link>
    </div>
  )
}

export default NavBarMob
