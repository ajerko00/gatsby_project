import React from "react"
import Navigation from "./navigation"
import Image from "./image"
import "../styles/layout.css"

const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Teams",
    link: "/Teams/",
  },
  {
    text: "Drivers",
    link: "/Drivers/",
  },
  {
    text: "Schedule",
    link: "/Schedule/",
  },
  {
    text: "Standings",
    link: "/Standings/",
  },
  {
    text: "Login",
    link: "/Login/",
  },
]

const Layout = props => {
  return (
    <div className="layout">
      <Navigation menuItems={menuItems}></Navigation>
      <div className="slika">
        <Image />
      </div>
      {props.children}
    </div>
  )
}

export default Layout

/* const Layout = () => {
  return (
    <layout>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Teams">Teams</Link>
          </li>
          <li>
            <Link to="/Drivers">Drivers</Link>
          </li>
          <li>
            <Link to="/Schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/Standings">Standings</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </layout>
  )
}

export default Layout */

/* import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
 */
