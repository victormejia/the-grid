import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/navbar'

const App = () => {
  return (
    <NavBar />
  )
}

const render = () => {
  ReactDOM.render(<App />, document.querySelector('#app'))
}

render()
