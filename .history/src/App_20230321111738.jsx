import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore } from './components'
import { hero, navlinks, memory, placesAPI } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title='Explore the Beauty of World' placesAPI={placesAPI} />
      <Footer />
    </>
  )
}

export default App