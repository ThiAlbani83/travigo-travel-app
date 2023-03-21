import React from 'react'

const Memory = ({memory: {title, text, subtitle, img, experience}}) => {
  return (
    <>
        <div className='relative my-16 md:mb-7'>
            <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
                <div className=''>
                    <img src={img} alt="memory/img" className='' />
                </div>
                <div className=''>
                    <h1 className=''>{title}</h1>
                    <h1 className=''>{subtitle}</h1>
                    <p className=''>{text}</p>
                    <div className=''>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Memory