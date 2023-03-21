import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from '../images/menu.png'

const Navbar = ({navlinks}) => {
  return (
    <>
      <header className='flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0'>
        <nav className='flex items-center justify-between travigo-container'>
          <NavLink to={'/'} className='flex items-center' >
            <img src={logo} alt="logo/img" className=' w-20 h-9 object-fill' />
          </NavLink>
          <ul className='flex items-center lg:hidden gap-7'>
           {navlinks?.map((val, index) => (
            <li key={index}>
              <NavLink to={'#'} className='text-lg text-slate-900'>{val.link}</NavLink>
            </li>
           ))}
          </ul>
          <ul className='flex items-center lg:hidden'>  
            <li><button type='button' className='button-emerald px-7 text-base py-1'>Join Us</button></li>
          </ul>
          <ul>
            <li>
              <button type='button' className=''>
              <img src="{menu}" alt="menu/svg" className='object-cover'/>
              </button>
              </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar