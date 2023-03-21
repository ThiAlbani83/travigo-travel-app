import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = ({navlinks}) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'} className='' >
            <img src={logo} alt="logo/img" className='' />
          </NavLink>
          <ul>
            <li><NavLink to={'#'} className=''>Home</NavLink></li>
          </ul>
          <ul>
            <li><button type='button'>Join Us</button></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar