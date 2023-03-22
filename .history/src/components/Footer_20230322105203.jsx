import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className='bg-gradient-to-b from bg-emerald-400 to-green-300 pt-24 pb-7'>
        <div className='grid items-center grid-cols-3 justify-center'>
          {titles?.map((val, index) => (
            <div key={index} className='grid items-center justify-center'>
              <h1 className='text-xl lg:text-base uppercase font-semibold'>
                {val.title}
              </h1>
            </div>
          ))}
          {links?.map((list, index) => (
            <ul key={index} className='grid items-center justify-items-center gap-1'>
              {list?.map((val, index) => (
                <li key={index} className='font-medium text-sm sm:text-xs'>
                  <Link to={'#'}>
                    {val.link}
                  </Link>
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className=''></div>
      </footer>
    </>
  )
}

export default Footer