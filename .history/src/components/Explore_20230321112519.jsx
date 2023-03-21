import React from 'react'

const Explore = ({ title, placesAPI }) => {
    return (
        <>
            <div className='relative my-7 md:mt-3'>
                <div className='travigo-container'>
                    <div className='flex items-center justify-center text-center mb-11 md:mb-7'>
                        <h1 className=''>{title}</h1>
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