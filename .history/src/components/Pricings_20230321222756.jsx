import React from 'react'
import PriceCard from './PriceCard'

const Pricings = ({ pricingapi: { title, text, btn1, btn2, plans } }) => {
    return (
        <>
            <div className='my-16 relative'>
                <div className='travigo-container'>
                    <div className='grid items-center justify-center mb-11 md:mb-7 text-center gap-2'>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter 
                        drop-shadow-lg text-slate-900'>{title}</h1>
                        <p className='text-xl lg:text-sm text-gray-900'>{text}</p>
                        <div className='ring-1 ring-slate-100 rounded-full py-1.5 px-2 flex items-center gap-3 my-5 shadow-md shadow-slate-200'>
                            <button type='button' className='button-emerald sm:w-auto'>{btn1}</button>
                            <button type='button' className='button-light sm:w-auto shadow-slate-200 bg-slate-100'>{btn2}</button>
                        </div>
                    </div>
                    <divdiv className=''>
                        <PriceCard />
                    </divdiv>
                </div>   
            </div>
        </>
    )
}

export default Pricings