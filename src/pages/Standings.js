import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/standings.css"
import Footer from "../components/footer"

class Standings extends Component {
  state = {
    isActive: false,
  }

  handleShow = () => {
    this.setState({
      isActive: true,
    })
  }

  handleHide = () => {
    this.setState({
      isActive: false,
    })
  }
  render() {
    return (
      <div className="aaa">
        <SEO title="Standings" />
        <Layout />
        <div id="buttonDiv">
          <button onClick={this.handleShow} className="driversButton">
            Drivers
          </button>
          <button onClick={this.handleHide} className="teamsButton">
            Teams
          </button>
        </div>

        {this.state.isActive && (
          <table type="width:100%" className="drivers">
            <tr className="info">
              <th></th>
              <th>DRIVERS</th>
              <th>TEAMS</th>
              <th>POINTS</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Lewis Hamilton</td>
              <td>Mercedes</td>
              <td>381</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Valtteri Bottas</td>
              <td>Mercedes</td>
              <td>314</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Charles Leclerc</td>
              <td>Ferrari</td>
              <td>249</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Max Verstappen</td>
              <td>Red Bull Racing Honda</td>
              <td>235</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sebastian Vettel</td>
              <td>Ferrari</td>
              <td>230</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Alexander Albon</td>
              <td>Red Bull Racing Honda</td>
              <td>84</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Carlos Sainz</td>
              <td>Mclaren Renault</td>
              <td>80</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Pierre Gasly</td>
              <td>Scuderia Toro Rosso Honda</td>
              <td>77</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Daniel Ricciardo</td>
              <td>Renault</td>
              <td>46</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sergio Perez</td>
              <td>Racing Point BWT Mercedes</td>
              <td>44</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Lando Norris</td>
              <td>Mclaren Renault</td>
              <td>41</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Nico Hulkenberg</td>
              <td>Renault</td>
              <td>37</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Daniil Kvyat</td>
              <td>Scuderia Toro Rosso Honda</td>
              <td>34</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Kimi Räikkönen</td>
              <td>Alfa Romeo Racing Ferrari</td>
              <td>31</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Lance Stroll</td>
              <td>Racing Point BWT Mercedes</td>
              <td>21</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Kevin Magnussen</td>
              <td>Haas Ferrari</td>
              <td>20</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Romain Grosjean</td>
              <td>Hass Ferrari</td>
              <td>8</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Antonio Giovinazzi</td>
              <td>Alfa Romeo Racing Ferrari</td>
              <td>4</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Robert Kubica</td>
              <td>Williams Mercedes</td>
              <td>1</td>
            </tr>
            <tr>
              <td>20</td>
              <td>George Russell</td>
              <td>Williams Mercedes</td>
              <td>0</td>
            </tr>
          </table>
        )}
        {!this.state.isActive && (
          <table type="width:100%" className="teams">
            <tr className="info">
              <th></th>

              <th>TEAMS</th>
              <th>POINTS</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Mercedes</td>
              <td>695</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ferrari</td>
              <td>479</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Red Bull Racing Honda</td>
              <td>366</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mclaren Renault</td>
              <td>121</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Renault</td>
              <td>83</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Racing Point BWT Mercedes</td>
              <td>65</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Scuderia Toro Rosso Honda</td>
              <td>64</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Alfa Romeo Racing Ferrari</td>
              <td>35</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Haas Ferrari</td>
              <td>28</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Williams Mercedes</td>
              <td>1</td>
            </tr>
          </table>
        )}
        <Footer />
      </div>
    )
  }
}
export default Standings
