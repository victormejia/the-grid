import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  height: 50px;
  background: #1A2129;
  position: fixed;
  top: 0px;
  width: 100%;
`

const Title = styled.h2`
  color: #fff;
  margin: 0;
  padding: 10px;
  position: absolute;
  left: 10px;
`

const NavBar = () => {
  return (
    <Header>
      <Title>The Grid</Title>
    </Header>
  )
}

export default NavBar
