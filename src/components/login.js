import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import Layout from "./layout"
import SEO from "./seo"
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
            <label className="userLogin">
              Username
              <input
                type="text"
                className="username"
                onChange={this.handleUpdate}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                className="password"
                onChange={this.handleUpdate}
              />
            </label>
            <input type="submit" value="Log In" className="login" />
          </form>
        </div>
      </>
    )
  }
}
export default Login
