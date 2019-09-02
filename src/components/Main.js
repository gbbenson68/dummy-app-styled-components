import React, { Fragment } from 'react'
import Navbar from './Navbar.js'
import styled from 'styled-components'

const MainDiv = styled.div`
  background-color: #a1a1a1;
`

const MainH3 = styled.h3`
  color: green;
  font-size: 1.5rem;
`

const MainP = styled.p`
  color: #212121;
  font-style: italic;
`

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <MainDiv>
        <MainH3>This is Main.</MainH3>
        <MainP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </MainP>
      </MainDiv>
    </Fragment>
  )
}

export default Main
