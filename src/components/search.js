import React from "react"
import { DriversGrid, DriversGrid2 } from "../pages/Drivers"
import "../styles/search.css"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    let list = this.state.list

    this.props.driver2.map(({ node }) => list.push(node))
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <List items={this.state.list} list0={this.props.driver} />
          </section>
          <hr />
        </div>
      </div>
    )
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: [],
    }
    this.notEmpty = false

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      filtered: [],
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items,
    })
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = []
    // Variable to hold the filtered list before putting into state
    let newList = []
    this.notEmpty = true
    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.items

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.frontmatter.title.toLowerCase()
        // change search term to lowercase
        const filter = e.target.value.toLowerCase()
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter)
      })
    } else {
      // If the search bar is empty, set newList to original task list
      newList = 0
      this.notEmpty = false
    }

    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList,
    })
  }

  render() {
    if (this.state.filtered.length > 0) {
      return (
        <div className="searchDiv">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search drivers..."
          />

          <div id="grid-container-drivers">
            {this.state.filtered.map(item => (
              <DriversGrid2
                data={this.props.list0}
                driver={item.frontmatter.path.replace("/", "")}
              />
            ))}
          </div>
        </div>
      )
    } else if (this.notEmpty === true) {
      return (
        <div className="searchDiv2">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search drivers..."
          />
          <p id="noDrivers">No drivers found</p>
          <div id="grid-container-drivers2"></div>
        </div>
      )
    } else {
      return (
        <div className="searchDiv">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search drivers..."
          />
          <DriversGrid driver={this.props.list0} />
        </div>
      )
    }
  }
}
