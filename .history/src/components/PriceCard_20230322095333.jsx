import React from 'react'

const PriceCard = ({ plan: {planicon, title, text, plantype, plancontent} }) => {
  console.log(plan)
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <img src={plan} alt="" />
            </div>
            <div>
              <h1></h1>
              <p></p>
            </div>
          </div>
          <div>
            <h1></h1>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  )
}

export default PriceCard