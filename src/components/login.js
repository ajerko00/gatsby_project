import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
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
    if (handleLogin(this.state) === false) {
      window.alert("Wrong Username or Passsword")
      navigate("/app/login")
    } else navigate(`/`)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/`)
    }
    return (
      <div className="LoginDiv">
        <SEO title="Login" />

        <div className="LoginForm">
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
            }}
          >
            <label>
              Username:
              <input
                type="text"
                name="username"
                className="username"
                onChange={this.handleUpdate}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                className="password"
                onChange={this.handleUpdate}
              />
            </label>
            <input type="submit" value="Log In" className="login" />
          </form>
        </div>
      </div>
    )
  }
}
export default Login
