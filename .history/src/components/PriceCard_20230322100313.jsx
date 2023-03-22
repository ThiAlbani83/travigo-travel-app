import React from 'react'

const PriceCard = ({ plans: { planicon, title, text, plantype, plancontent } }) => {
  return (
    <>
      <div className='p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <div className=''>
              <img src={planicon} alt="planicon/image" className='' />
            </div>
            <div className=''>
              <h1 className=''>{title}</h1>
              <p className=''>{text}</p>
            </div>
          </div>
          <div className=''>
            <h1 className=''>{plantype}</h1>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  )
}

export default PriceCard