import React from "react"
import { Link } from "gatsby"
import Image from "./image"

import "../styles/navigation.css"

const Navigation = ({ menuItems }) => {
  const menus = menuItems.map(({ link, text }) => (
    <li key={link}>
      <Link to={link}>{text}</Link>
    </li>
  ))

  return (
    <div>
      <ul>{menus}</ul>
      <div className="slika">
        <Image />
      </div>
    </div>
  )
}
export default Navigation
