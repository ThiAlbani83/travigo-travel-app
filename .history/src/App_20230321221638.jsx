import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings } from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title='Explore the Beauty of World' placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi}/>
      <Footer />
    </>
  )
}

export default App