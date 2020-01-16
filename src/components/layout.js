import React, { Fragment } from "react"
import Navigation from "./navigation"
import NavMob from "./navigationMob"
import Image from "./image"
import "../styles/layout.css"
import Media from "react-media"

import NavBar from "./nav-bar"

const menuItems = [
  {
    text: "Home",
    link: "",
  },
  {
    text: "Teams",
    link: "/Teams",
  },
  {
    text: "Drivers",
    link: "/Drivers",
  },
  {
    text: "Schedule",
    link: "/Schedule",
  },
  {
    text: "Standings",
    link: "/Standings",
  },
  {
    text: "Login",
    link: "/login/",
  },
]

const Layout = props => {
  return (
    <div className="layout">
      <NavBar />
      <Media
        queries={{
          small: "(max-width: 599px)",
          large: "(min-width: 600px)",
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && <NavMob menuItems={menuItems}></NavMob>}
            {matches.large && <Navigation menuItems={menuItems}></Navigation>}
          </Fragment>
        )}
      </Media>
      <div className="slika">
        <Image />
      </div>
      {props.children}
    </div>
  )
}

export default Layout

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
`
 */
