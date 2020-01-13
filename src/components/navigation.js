import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/navigation.css"
import Media from "react-media"

const Navigation = ({ menuItems }) => {
  const menus = menuItems.map(({ link, text, data }) => (
    <li key={link}>
      <Link to={link}>{text}</Link>
    </li>
  ))

  /*  const menuMob = menuItems.map(({ data, link, slikaStuff }) => (
    <li key={link}>
      <Link to={link}>
        <Img fluid={slikaStuff} />
      </Link>
    </li>
  )) */

  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 599px)",
          large: "(min-width: 600px)",
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && <p>sta sad</p>}
            {matches.large && <ul>{menus}</ul>}
          </Fragment>
        )}
      </Media>
    </div>
  )
}
export default Navigation

export const squareImage = graphql`
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
