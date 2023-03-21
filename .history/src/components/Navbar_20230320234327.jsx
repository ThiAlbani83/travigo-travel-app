import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = ({navlinks}) => {
  return (
    <>
      <header className='flex items-center justify-center w-auto h-auto'>
        <nav className='flex items-center justify-between travigo-container'>
          <NavLink to={'/'} className='flex items-center' >
            <img src={logo} alt="logo/img" className=' w-20 h-9 object-fill' />
          </NavLink>
          <ul className='flex items-center lg:hidden'>
           {navlinks?.map((val, index) => (
            <li key={index}>
              <NavLink to={'#'} className='text-lg text-slate-900'>{val.link}</NavLink>
            </li>
           ))}
          </ul>
          <ul className='flex items-center lg:hidden'>  
            <li><button type='button'>Join Us</button></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar