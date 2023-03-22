import React from 'react'

const PriceCard = ({ plans: { planicon, title, text, plantype, plancontent } }) => {
  return (
    <>
      <div className='p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <div className='grid items-center'>
              <img src={planicon} alt="planicon/image" className='w-14 h-14 lg:h-12 lg:w-12 object-cover' />
            </div>
            <div className='grid items-center'>
              <h1 className='text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base md:text-sm'>{title}</h1>
              <p className='text-slate-500'>{text}</p>
            </div>
          </div>
          <div className='grid items-center'>
            <h1 className='text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base md:text-sm'>
              {plantype}
              </h1>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  )
}

export default PriceCard