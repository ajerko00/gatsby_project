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
    <li key={link}>
      {isTextLogout({ text }) ? (
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login/`))
          }}
        >
          Logout
        </a>
      ) : (
        <Link to={link}>{text}</Link>
      )}
    </li>
  ))

  return (
    <>
      <ul>{menus}</ul>
      <div className="slika">
        <Image />
      </div>
    </>
  )
}
export default navBar

/* export default menuItemsLogged => {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
      }}
    >
      <Image />

      <ul id="navLogged">
        <li className="navButtonLogged">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li className="navButtonLogged">
          {" "}
          <Link to="/Teams">Teams</Link>
        </li>
        <li className="navButtonLogged">
          {" "}
          <Link to="/Drivers">Drivers</Link>
        </li>
        <li className="navButtonLogged">
          {" "}
          <Link to="/Schedule">Schedule</Link>
        </li>
        <li className="navButtonLogged">
          {" "}
          <Link to="/Standings">Standings</Link>
        </li>
        <li className="navButtonLogged">
          {isLoggedIn() ? (
            <a
              href="/"
              onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login/`))
              }}
            >
              Logout
            </a>
          ) : null}
        </li>
      </ul>
    </div>
  )
}
 */
