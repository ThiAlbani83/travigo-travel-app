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
        <div className=''>
          <div className='h-[0.1vh]'></div>
          <div className='flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse'>
            <p className='text-sm md: text-center'>Copyright
              <sup className='text-base font-bold'>&copy;</sup>
              All Reserved Rights 2022
              <a href='http://www.thialbanidev.com' target='_blank' className='font-semibold'> thialbanidev.com</a>
            </p>
            <div className='flex items-center gap-3'>
              {sociallinks?.map((val, index) => (
                <img key={index} src={val.icon} alt="social/icons" className='w-5 h-5' />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer