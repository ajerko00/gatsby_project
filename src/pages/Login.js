import React from "react"
import Login from "../components/login"
import Img from "gatsby-image"

const log = ({ data }) => {
  return <Login />
}
export default log

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "teams/background.jpg" }) {
      childImageSharp {
        fluid {
          tracedSVG
        }
      }
    }
  }
`
