import React, { Fragment } from "react"
import Navigation from "./navigation"
import NavMob from "./navigationMob"
import Image from "./image"
import "../styles/layout.css"
import Media from "react-media"
import { getUser, isLoggedIn, logout } from "../services/auth"

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
    link: "/app/login/",
  },
]

const Layout = props => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.login = true
  } else {
    content.login = false
  }
  return (
    <div className="layout">
      {isLoggedIn() ? (
        <NavBar />
      ) : (
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
      )}

      {props.children}
    </div>
  )
}

export default Layout
