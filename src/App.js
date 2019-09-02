import React, { Fragment } from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Main from './components/Main.js'

const App = () => {
  return (
    <Fragment className="App">
      <Header />
      <Navbar />
      <Main />
    </Fragment>
  )
}

export default App
