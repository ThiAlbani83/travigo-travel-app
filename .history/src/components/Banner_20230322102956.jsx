import React from 'react'

const Banner = ({bannerAPI: {title, text, btnText, imgSrc}}) => {
    return (
        <>
            <div className='relative'>
                <div className='relative flex items-center'>
                    <img src={imgSrc} alt="banner/api" className='h-[35vh] w-full rounded-lg'/>
                </div>
                <div className='absolute top-24'>
                    <h1 className=''></h1>
                    <p className=''></p>
                    <button type='button' className=''>
                        {}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner