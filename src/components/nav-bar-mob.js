import React from "react"
import { useStaticQuery, Link, navigate, graphql } from "gatsby"
import { logout } from "../services/auth"
import Img from "gatsby-image"
import "../styles/nav-mob.css"
import imgNav from "./imagesNav"

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
        <Img
          className="iconStandings"
          fluid={data.Logout.childImageSharp.fluid}
        />
      </Link>
    </div>
  )
}

export default NavBarMob

/* const NavBarMob = () => {
  return (
    <div id="grid-ikone">
      <Link to="/" className="ikone">
        <imgNav className="iconHome" filename={"home.png"} />
      </Link>
      <Link to="/Teams" className="ikone">
        <imgNav className="iconTeams" filename={"teams"} />
      </Link>
      <Link to="/Drivers" className="ikone">
        <imgNav filename="drivers.png" className="iconDrivers" />
      </Link>
      <Link to="/Schedule" className="ikone">
        <imgNav className="iconSchedule" filename="schedule" />
      </Link>
      <Link to="/Standings" className="ikone">
        <imgNav className="iconStandings" filename="standings" />
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
        <Img className="iconLogout" filename="logout.png" />
      </Link>
    </div>
  )
}

export default NavBarMob */

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
