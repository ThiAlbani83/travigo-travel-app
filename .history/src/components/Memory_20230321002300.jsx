import React from 'react'

const Memory = ({memory: {title, text, subtitle, img, experience}}) => {
  return (
    <>
        <div className=''>
            <div className=''>
                <div className=''>
                    <img src={img} alt="memory/img" className='' />
                </div>
                <div className=''>
                    <h1 className=''></h1>
                    <h1 className=''></h1>
                    <p></p>
                    <div className=''>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Memory