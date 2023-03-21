import React from 'react'
import { NavLink } from 'react-router-dom'

const PopupMenu = ({navlinks}) => {
  return (
    <>
        <nav className=''>
            <ul className='flex items-center flex-col gap-3'>
                {navlinks?.map((val, index) => (
                <li>
                    <NavLink to={`#`}>
                        {val.link}
                    </NavLink>
                </li> 
                ))}
            </ul>
        </nav>
    </>
  )
}

export default PopupMenu