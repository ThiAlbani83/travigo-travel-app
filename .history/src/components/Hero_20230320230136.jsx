import React from 'react'

const Hero = ({hero: {title, subtitle, btn1, btn2, text, img}}) => {
  return (
    <>
      <div className='flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto'>
        <div className='travigo-container grid items-start justify-items-center'>
          <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text4xl xsm:text-3xl text-black filter drop-shadow-lg'>{subtitle}</h1>
            <p className='text-base my-5 text-center sm:text-sm'>{text}</p>
            <div className='flex items-center'>
              <button type='button' className=''>{btn1}</button>
              <button type='button' className=''>{btn2}</button>
            </div>
          </div>
          <div className=''>
            <img src={img} alt="dashboard/img" className=''/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero