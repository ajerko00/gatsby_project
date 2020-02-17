import React from "react"
import { Link, navigate } from "gatsby"
import { logout } from "../services/auth"
import "../styles/nav-bar.css"
import Image from "./image"

export const isTextLogout = ({ text }) => {
  if (text === "Logout") {
    return true
  }
  return false
}

const navBar = ({ menuItemsLogged }) => {
  const menus = menuItemsLogged.map(({ link, text }) => (
    <li className="li-layout" key={link}>
      {isTextLogout({ text }) ? (
        <a
          href="/"
          class="active"
          className="li-act"
          onClick={event => {
            if (window.confirm("Are you sure you want to log out?")) {
              event.preventDefault()
              logout(() => navigate(`/app/login/`))
            }
          }}
        >
          Logout
        </a>
      ) : (
        <Link activeClassName="active" className="li-act" to={link}>
          {text}
        </Link>
      )}
    </li>
  ))

  return (
    <>
      <ul className="ul-layout">{menus}</ul>
      <div className="slika">
        <Image />
      </div>
    </>
  )
}
export default navBar
