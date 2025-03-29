import React, { useState } from 'react'
import AccordianTiles from './AccordianTiles';

const accordionData = [
    { title: "What is React?", content: "React is a JavaScript library for building UI components." },
    { title: "What is Tailwind CSS?", content: "Tailwind is a utility-first CSS framework for styling." },
    { title: "Why use React?", content: "React makes UI development easier with reusable components." },
  ];


const Accordian = () => {

    const [accIndex,setAccIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
        React Accordion</h1>
      {
        accordionData.map((acc,index)=>(
            <AccordianTiles
            key={index}
            items = {acc}
            isOpen = {index== accIndex}
            setIsOpen={() => setAccIndex(index === accIndex ? null : index)}
            />
        ))
      }
    </div>
  )
}

export default Accordian