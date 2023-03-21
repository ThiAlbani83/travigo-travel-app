import React from 'react'

const Explore = ({ title, placesAPI }) => {
    return (
        <>
            <div className='relative my-7 md:mt-3'>
                <div className='travigo-container'>
                    <div className='flex items-center justify-center text-center mb-11 md:mb-7'>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900'>{title}</h1>
                    </div>
                    <div className=''>
                        {placesAPI?.map((val, index) => (
                            <div key={index}>
                                <div className='flex items-center'>
                                    <img src={val.placeImg} 
                                    alt={val.location} 
                                    className='w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg'/>
                                </div>
                                <div className='flex items-start flex-col'>
                                    <h1 className='text-lg sm:text-sm font-bold'>{val.location}</h1>
                                    <p className='font-normal lg:text-sm text-base sm:text-xs'>{val.distance}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore