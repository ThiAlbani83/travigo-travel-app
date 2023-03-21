import React from 'react'

const Explore = ({ title, placesAPI }) => {
    return (
        <>
            <div className='relative my-7 md:mt-3'>
                <div className='travigo-container'>
                    <div className='flex items-center justify-center text-center mb-11 md:mb-7'>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg'>{title}</h1>
                    </div>
                    <div className=''>
                        {placesAPI?.map((val, index) => (
                            <div key={index}>
                                <div>
                                    <img src={val.placeImg} 
                                    alt={val.location} 
                                    className=''/>
                                </div>
                                <div className=''>
                                    <h1>{val.location}</h1>
                                    <p>{val.distance}</p>
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