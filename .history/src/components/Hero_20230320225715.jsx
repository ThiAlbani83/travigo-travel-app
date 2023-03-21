import React from 'react'

const Hero = ({hero: {title, subtitle, btn1, btn2, text, img}}) => {
  return (
    <>
      <div className='flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto'>
        <div className='travigo-container grid items-start justify-items-center border-black border'>
          <div className=''>
            <h1 className=''>{title}</h1>
            <h1 className=''>{subtitle}</h1>
            <p className=''>{text}</p>
            <div className=''>
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