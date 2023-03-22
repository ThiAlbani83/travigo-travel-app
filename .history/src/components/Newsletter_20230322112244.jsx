import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className='p-5 bg-white/60 ring-1 ring-emerald-200 shadow-md shadow-emerald-300 rounded-lg'>
                <div className=''>
                    <div className=''>
                        <h1 className=''>
                            Get In Touch With Us
                        </h1>
                        <p className=''>
                            Questions and Feedback? We would love to hear from you.
                        </p>
                    </div>
                    <form className=''>
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