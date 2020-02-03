import React, { Fragment } from "react"
import Navigation from "./navigation"
import NavMob from "./navigationMob"
import "../styles/layout.css"
import Media from "react-media"
import { isLoggedIn } from "../services/auth"
import NavBar from "./nav-bar"
import NavBarMob from "./nav-bar-mob"

const menuItemsLogged = [
  {
    text: "Home",
    link: "",
    iconName: "home.png",
  },
  {
    text: "Teams",
    link: "/Teams",
    iconName: "teams.png",
  },
  {
    text: "Drivers",
    link: "/Drivers",
    iconName: "drivers.png",
  },
  {
    text: "Schedule",
    link: "/Schedule",
    iconName: "schedule.png",
  },
  {
    text: "Standings",
    link: "/Standings",
    iconName: "standings.png",
  },
  {
    text: "Logout",
    link: "/",
    iconName: "logout.png",
  },
]

const menuItems = [
  {
    text: "Home",
    link: "",
    iconName: "home.png",
  },
  {
    text: "Teams",
    link: "/Teams",
    iconName: "teams.png",
  },
  {
    text: "Drivers",
    link: "/Drivers",
    iconName: "drivers.png",
  },
  {
    text: "Schedule",
    link: "/Schedule",
    iconName: "schedule.png",
  },
  {
    text: "Standings",
    link: "/Standings",
    iconName: "standings.png",
  },
  {
    text: "Login",
    link: "/app/login/",
    iconName: "login.png",
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
    <>
      <div className="layout">
        {isLoggedIn() ? (
          <Media
            queries={{
              small: "(max-width: 599px)",
              large: "(min-width: 600px)",
            }}
          >
            {matches => (
              <Fragment>
                {matches.small && <NavBarMob menuItems={menuItems} />}
                {matches.large && <NavBar menuItemsLogged={menuItemsLogged} />}
              </Fragment>
            )}
          </Media>
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
                {matches.large && (
                  <Navigation menuItems={menuItems}></Navigation>
                )}
              </Fragment>
            )}
          </Media>
        )}

        {props.children}
      </div>
    </>
  )
}

export default Layout
