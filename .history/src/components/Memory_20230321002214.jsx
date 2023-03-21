import React from 'react'

const Memory = ({memory: {title, text, subtitle, img, experience}}) => {
  return (
    <>
        <div>
            <div>
                <div>
                    <img src={img} alt="memory/img" />
                </div>
                <div>
                    <h1></h1>
                    <h1></h1>
                    <p></p>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Memory