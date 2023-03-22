import React from 'react'

const Banner = ({bannerAPI: {title, text, btnText, imgSrc}}) => {
    return (
        <>
            <div className='relative'>
                <div className='relative flex items-center'>
                    <img src={imgSrc} alt="banner/api" className='h-[35vh] w-full rounded-lg'/>
                </div>
                <div className='absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center border border-black'>
                    <h1 className=''>{title}</h1>
                    <p className=''>{text}</p>
                    <button type='button' className=''>
                        {btnText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner