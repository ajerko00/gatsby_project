import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/post.css"
import Footer from "../components/footer"
import { isLoggedIn } from "../services/auth"

class JustComments extends React.Component {
  constructor(...args) {
    super(...args)
    this.ref = React.createRef()
  }
  render() {
    return (
      <div
        ref={this.ref}
        className="just-comments"
        data-apikey="7ef857fd-adc0-435e-9478-23fde1808f88"
      />
    )
  }
  componentDidMount() {
    const s = document.createElement("script")
    s.src = "//just-comments.com/w.js"
    s.setAttribute("data-timestamp", +new Date())
    this.ref.current.appendChild(s)
  }
}

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div className="post">
      <Layout />
      <h1>{post.frontmatter.title}</h1>

      <div
        className="sadrzaj"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {isLoggedIn() ? <JustComments /> : <div />}

      <Footer />
    </div>
  )
}

export const query = graphql`
  query postQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
