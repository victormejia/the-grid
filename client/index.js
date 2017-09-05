import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/navbar'
import HackerList from './components/hackerlist'
import Search from './components/search'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { hackers: [] }
  }

  componentDidMount() {
    this.search()
  }

  search(token) {
    axios.get(`/api/hackers?term=${token || ''}`)
    .then(response => this.setState({ hackers: response.data }))
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Search onNewSearch={this.search.bind(this)} />
          <HackerList hackers={this.state.hackers} />
        </Container>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.querySelector('#app'))
}

render()
