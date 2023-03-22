import React from 'react'
import PriceCard from './PriceCard'

const Pricings = ({pricingapi: {title, text, btn1, btn2, plans}}) => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1></h1>
                        <p></p>
                        <div>
                            <button type='button'></button>
                            <button type='button'></button>
                        </div>
                    </div>
                    <div>
                        <PriceCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricings