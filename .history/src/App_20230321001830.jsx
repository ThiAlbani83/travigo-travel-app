import React from 'react'
import { Navbar, Hero, Footer, Memory } from './components'
import { hero, navlinks, memory } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory />
      <Footer />
    </>
  )
}

export default App