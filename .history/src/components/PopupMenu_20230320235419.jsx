import React from 'react'
import { NavLink } from 'react-router-dom'

const PopupMenu = ({navlinks}) => {
  return (
    <>
        <nav>
            <ul>
                {navlinks?.map((val, index) => (
                <li>
                    <NavLink to={`#`}>

                    </NavLink>
                </li> 
                ))}
            </ul>
        </nav>
    </>
  )
}

export default PopupMenu