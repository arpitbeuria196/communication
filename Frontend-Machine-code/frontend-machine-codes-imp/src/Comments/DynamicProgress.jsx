import React, { useEffect, useState } from 'react'

const DynamicProgress = () => {

    const [value,setValue] = useState(0);

    useEffect(()=>{
        const timer = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 0)); 
          }, 100);

        return (()=>{
            clearInterval(timer);
        })
    },[]);



  return (
    <div
    className='flex flex-col min-h-screen items-center justify-center'>
        <div className='w-64 h-8 border rounded-sm  bg-gray-200'>
            <div
            className='h-full bg-green-600'
            style={{width:`${value}%`}}
            >
            </div>
        </div>
        <p className="mt-2 font-bold">{value}%</p>

    </div>
  )
}

export default DynamicProgress