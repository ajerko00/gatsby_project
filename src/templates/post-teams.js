import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/post-teams.css"
import Footer from "../components/footer"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div className="post-teams">
      <Layout />
      <h1>{post.frontmatter.title}</h1>

      <div
        className="sadrzaj-teams"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query postTeamsQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
