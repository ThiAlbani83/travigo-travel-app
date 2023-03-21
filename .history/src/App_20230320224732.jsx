import React from 'react'
import { Navbar, Hero, Footer } from './components'
import { hero } from './data/travigodata'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}

export default App