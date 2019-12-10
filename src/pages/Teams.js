import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/teams.css"

const Teams = ({ data }) => {
  return (
    <div>
      <Layout />
      <div id="ajnemojradit">
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
        </div>
      </div>

      <SEO title="Teams" />
    </div>
  )
}
export default Teams

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
