import React from 'react'

const Banner = ({bannerAPI: {title, text, btnText, imgSrc}}) => {
    return (
        <>
            <div className='relative'>
                <div className='relative flex items-center'>
                    <img src={imgSrc} alt="banner/api" className='h-[35vh] w-full rounded-lg'/>
                </div>
                <div className='absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14 border border-black'>
                    <h1 className='text-3xl font-bold text-slate-900 drop-shadow-lg filter'>{title}</h1>
                    <p className='text-base sm:text-sm'>{text}</p>
                    <button type='button' className='py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300'>
                        {btnText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner