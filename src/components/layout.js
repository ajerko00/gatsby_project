import React from "react"
import Navigation from "./navigation"
import Image from "./image"
import "../styles/layout.css"

const menuItems = [
  {
    path: "/../images/layout/home.png",
    text: "Home",
    link: "/",
    slikaStuff: "data.Home.childImageSharp.fluid",
  },
  {
    path: "../images/layout/teams.png",
    text: "Teams",
    link: "/Teams/",
    slikaStuff: "data.teams.childImageSharp.fluid",
  },
  {
    path: "src/images/layout/drivers.png",
    text: "Drivers",
    link: "/Drivers/",
    slikaStuff: "data.Drivers.childImageSharp.fluid",
  },
  {
    path: "/src/images/layout/schedule.png",
    text: "Schedule",
    link: "/Schedule/",
    slikaStuff: "data.Schedule.childImageSharp.fluid",
  },
  {
    path: "/layout/standings.png",
    text: "Standings",
    link: "/Standings/",
    slikaStuff: "data.Standings.childImageSharp.fluid",
  },
  {
    path: "layout/login.png",
    text: "Login",
    link: "/Login/",
    slikaStuff: "data.Login.childImageSharp.fluid",
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
