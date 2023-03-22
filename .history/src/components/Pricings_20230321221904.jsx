import React from 'react'
import PriceCard from './PriceCard'

const Pricings = ({pricingapi: {title, text, btn1, btn2, plans}}) => {
    return (
        <>
            <div className=''>
                <div className=''>
                    <div className=''>
                        <h1 className=''>{title}</h1>
                        <p className=''>{text}</p>
                        <div className=''>
                            <button type='button'></button>
                            <button type='button'></button>
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