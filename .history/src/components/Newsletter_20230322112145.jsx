import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>
                            Get In Touch With Us
                        </h1>
                        <p>
                            Questions and Feedback? We would love to hear from you.
                        </p>
                    </div>
                    <form>
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