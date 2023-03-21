import React from 'react'

const Advertise = ({brands}) => {
  return (
    <>
        <div>
            {brands?.map((val, index) => (
                <img 
                className='w-44 h-auto'
                src={val.iconSrc} alt='brands/icon'/>
            ))}
        </div>
    </>
  )
}

export default Advertise