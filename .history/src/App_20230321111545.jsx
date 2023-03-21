import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore } from './components'
import { hero, navlinks, memory } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore />
      <Footer />
    </>
  )
}

export default App