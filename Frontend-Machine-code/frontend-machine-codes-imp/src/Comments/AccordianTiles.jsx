import React, { useState } from 'react'

const AccordianTiles = ({items,isOpen,setIsOpen}) => {



  return (
    <div>
        <div className="border border-gray-300 m-10 p-10">
        <h1 className='items-center justify-center text-white pl-25'>{items.title}</h1>
        <button 
        onClick={setIsOpen}
        className='text-white  cursor-pointer'>more</button>
        { isOpen && 
        (
            <p className='text-white text-sm p-5'>{items.content}</p>
        )}
        </div>
    </div>
  )
}

export default AccordianTiles