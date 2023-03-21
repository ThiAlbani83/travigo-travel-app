import React from 'react'
import { NavLink } from 'react-router-dom'

const PopupMenu = ({ navlinks }) => {
    return (
        <>
            <nav className='fixed top-14 right-14 bg-white bg-opacity-70 opacity-100 z-50 backdrop-filter 
        backdrop-blur-md rounded-lg w-44 h-auto py-5 px-6 hidden lg:flex items-center'>
                <ul className='flex items-start flex-col gap-3'>
                    {navlinks?.map((val, index) => (
                        <li>
                            <NavLink to={`#`}>
                                {val.link}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <button type='button' className='button-light sm:w-auto rounded-lg shadow-slate-300'>
                            Join Us
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default PopupMenu