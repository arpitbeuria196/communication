import React, { useState } from 'react'

const AccordianItems = ({acc,isOpen,setIsOpen}) => {

   
  return (
    <div className="border border-gray-300 rounded-lg shadow-md my-4">
      {/* Accordion Header */}
      <div
        className="bg-gray-100 px-6 py-4 cursor-pointer flex justify-between items-center"
        onClick={()=>{setIsOpen()}}
      >
        <h2 className="font-semibold text-lg">{acc.title}</h2>
        <span className="text-2xl font-bold text-gray-500">
          {isOpen ? "-" : "+"}
        </span>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="bg-white px-6 py-4 border-t">
          <p className="text-gray-700">{acc.content}</p>
        </div>
      )}
    </div>
  )
}

export default AccordianItems
