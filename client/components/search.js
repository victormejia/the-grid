import React from 'react'
import styled from 'styled-components'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const token = e.target.value

    if (this.intervalId) {
      clearTimeout(this.intervalId)
      this.intervalId = null
    }

    this.intervalId = setTimeout(() => {
      this.props.onNewSearch(token)
      this.intervalId = null
    }, 500)
  }

  render() {

    return (
      <div className="ui icon input">
        <input type="text" onChange={this.handleChange} placeholder="Search name..." />
      </div>
    )
  }
}

export default Search
