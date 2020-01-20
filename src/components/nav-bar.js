import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import "../styles/login2.css"
import Image from "./image"

export default () => {
  const content = { login: true }
  /*if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  } */
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
      }}
    >
      <Image />

      <nav>
        {` `}
        <ul className="navLogged">
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

        {` `}
      </nav>
    </div>
  )
}
