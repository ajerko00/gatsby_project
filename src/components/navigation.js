import React from "react"
import { Link } from "gatsby"

import "../styles/navigation.css"

const Navigation = ({ menuItems }) => {
  const menus = menuItems.map(({ link, text }) => (
    <li key={link}>
      <Link to={link}>{text}</Link>
    </li>
  ))

  return <ul>{menus}</ul>
}
export default Navigation
