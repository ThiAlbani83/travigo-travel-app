import React from 'react'

const Footer = ({footerAPI: {titles, links, sociallinks}}) => {
  return (
    <>
       <footer className=''>
        <div className=''>
          {titles?.map((val, index) => (
            <div>

            </div>
          ))}
        </div>
        <div className=''></div>
       </footer>
    </>
  )
}

export default Footer