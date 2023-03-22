import React from 'react'

const PriceCard = ({ plan: {planicon, title, text, plantype, plancontent} }) => {
  console.log(plan)
  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <img src={planicon} alt="planicon/image" className='' />
            </div>
            <div>
              <h1 className=''>{title}</h1>
              <p className=''>{text}</p>
            </div>
          </div>
          <div>
            <h1 className=''>{plantype}</h1>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  )
}

export default PriceCard