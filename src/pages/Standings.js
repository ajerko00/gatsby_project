import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/standings.css"

const Standings = ({ isOn, handleToggle }) => {
  const [value, setValue] = useState(false)
  return (
    <div className="aaa">
      <SEO title="Standings" />
      <Layout />
      {/* <label class="switch">
        Teams
        <input type="checkbox" />
        <span class="slider round" />
        Drivers
      </label> */}

      <label class="switch">
        <input
          checked={isOn}
          onChange={handleToggle}
          type="checkbox"
          id="togBtn"
        />
        <div class="slider round"></div>
      </label>

      {/*  <Switch isOn={value} handleToggle={() => setValue(!value)} /> */}
      <table type="width:100%" className="drivers">
        <tr>
          <th></th>
          <th>DRIVERS</th>
          <th>TEAMS</th>
          <th>POINTS</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>16</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>17</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>18</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>19</td>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>20</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
      <table type="width:100%" className="teams">
        <tr>
          <th></th>

          <th>TEAMS</th>
          <th>POINTS</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
      </table>
      {/* <button type="button" name="button1">
        DRIVERS
      </button>
      <button type="button" name="button2">
        TEAMS
      </button> */}
    </div>
  )
}
export default Standings
