import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className='p-5 bg-white/60 ring-1 ring-emerald-200 shadow-md shadow-emerald-300 rounded-lg max-w-5xl w-full
            mx-auto mt-0 xl:w-[95vw relative]'>
                <div className='flex items-center justify-between lg:flex-col lg:gap-7'>
                    <div className='grid items-center sm:text-center'>
                        <h1 className='text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900'>
                            Get In Touch With Us
                        </h1>
                        <p className='text-base sm:text-sm xsm:text-xs font-medium'>
                            Questions and Feedback? We would love to hear from you.
                        </p>
                    </div>
                    <form className='flex items-center justify-center'>
                        <input 
                        className=''
                        type="text" 
                        name='email' 
                        placeholder='Email Address'/>
                        <button type='submit' className=''>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Newsletter