import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = ({navlinks}) => {
  return (
    <>
      <header className='flex items-center justify-center w-auto h-auto'>
        <nav>
          <NavLink to={'/'} className='' >
            <img src={logo} alt="logo/img" className='' />
          </NavLink>
          <ul>
           {navlinks?.map((val, index) => (
            <li key={index}>
              <NavLink to={'#'} className=''>{val.link}</NavLink>
            </li>
           ))}
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