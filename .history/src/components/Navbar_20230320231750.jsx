import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'} className='' >
            <img src="" alt="logo/img" className='' />
          </NavLink>
        </nav>
      </header>
    </>
  )
}

export default Navbar