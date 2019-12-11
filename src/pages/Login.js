import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../components/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/login.css"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }
    return (
      <>
        <SEO title="Login" />

        <Layout />

        <div className="LoginForm">
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
              navigate(`/app/profile`)
            }}
          >
            <label>
              Username
              <input type="text" name="username" onChange={this.handleUpdate} />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={this.handleUpdate}
              />
            </label>
            <input type="submit" value="Log In" />
          </form>
        </div>
      </>
    )
  }
}
export default Login

/* import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/login.css"

const Login = () => {
  return (
    <div>
      <SEO title="Login" />

      <Layout />

      <div className="LoginForm"></div>
    </div>
  )
}
export default Login */
