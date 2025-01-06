import React, { useState } from 'react'

const AccordanceItems = ({question,answer,isVisible,handleVisibility}) => {
  return (
    <div>
        <div className='flex cursor-pointer'
        onClick={handleVisibility}
        >
        <p>🔽</p>
        <h2>{question}</h2>
        </div>
        {isVisible && 
        
        (<p>{answer}</p>)
        }
        
    </div>
  )
}

export default AccordanceItems