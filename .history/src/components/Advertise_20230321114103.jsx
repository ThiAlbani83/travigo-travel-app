import React from 'react'

const Advertise = ({brands}) => {
  return (
    <>
        <div className='my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto'>
            {brands?.map((val, index) => (
                <img 
                className='w-44 h-auto object-fill xl:w-36 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md'
                src={val.iconSrc} alt='brands/icon'/>
            ))}
        </div>
    </>
  )
}

export default Advertise