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

/*  import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import "../styles/navigation.css"


const Menu = ({ data }) => (
  <div
    class="bckgrn"
    
  > 
  
 {
   <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} /> 
}
{
   <div
      style={{
        fixed,
      }}
    >
      {data.allFile.edges.map(({ node }) => (
        <Img key={node.id} fluid={node.childImageSharp.fluid} />
      ))}
    </div> 
}
{
  
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
  </div>
)

export default Menu

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//src/images//" } }) {
      edges {
        node {
          id
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
` 
}
 */
