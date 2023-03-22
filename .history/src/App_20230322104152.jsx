import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner } from './components'
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title='Explore the Beauty of World' placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi}/>
      <Banner bannerAPI={bannerAPI} />
      <Footer />
    </>
  )
}

export default App