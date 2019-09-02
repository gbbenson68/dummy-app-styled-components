import React from 'react'
import styled from 'styled-components'

const NavStyle = styled.h2`
  font-size: 2rem;
  background: #eaeaea;
  color: blue;
`

const NavButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 10px;
`

const Navbar = () => {
  return (
    <NavStyle>
      <h2>This is the Nav Bar...</h2>
      <NavButton>This is a Nav Bar button</NavButton>
      <NavButton>This is another Nav Bar button</NavButton>
    </NavStyle>
  )
}

export default Navbar
