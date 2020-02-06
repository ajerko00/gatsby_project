import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import "../styles/post-drivers.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div className="post-drivers">
      <Layout />
      <div
        className="sadrzaj-drivers"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query postDriversQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
