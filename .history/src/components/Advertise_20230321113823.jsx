import React from 'react'

const Advertise = ({brands}) => {
  return (
    <>
        <div>
            {brands?.map((val, index) => (
                <img src={val.iconSrc} alt='brands/icon'/>
            ))}
        </div>
    </>
  )
}

export default Advertise