import React from "react"
import Login from "../components/login"
import { graphql } from "gatsby"

const log = () => {
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
