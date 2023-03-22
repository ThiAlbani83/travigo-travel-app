import React from 'react'

const Footer = ({footerAPI: {titles, links, sociallinks}}) => {
  return (
    <>
       <footer className=''>
        <div className=''>
          {titles?.map((val, index) => (
            <div key={index}>
                <h1>
                  {val.title}
                </h1>
            </div>
          ))}
        </div>
        <div className=''></div>
       </footer>
    </>
  )
}

export default Footer