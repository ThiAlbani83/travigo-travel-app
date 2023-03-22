import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings } from './components'
import { hero, navlinks, memory, placesAPI, brands } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory} />
      <Explore title='Explore the Beauty of World' placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings />
      <Footer />
    </>
  )
}

export default App