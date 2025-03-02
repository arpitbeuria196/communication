import React, { useState } from 'react'

const CustomModal = () => {
    const[showModal,setShowModal] = useState(false);

    const handleShowModal = ()=>
    {
        setShowModal(!showModal);
        console.log(showModal);
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        {
            !showModal ? (
                <div className='text-center'>
                <h1 className="text-2xl font-bold mb-4">I am Home</h1>
                <button onClick={handleShowModal}>Show Home Modal</button>
                </div>
            )
            :
            (
                <div className='border m-10 p-30 bg-red-500 rounded-lg'>
                <button
                className='-py-10 rounded-md' 
                onClick={handleShowModal}>close
                </button>
                <div className='p-6 rounded-lg w-96 text-center'>
                <h3 className='text-xl font-semibold mt-4'>I am at home page</h3>
                </div>
                </div>
            )

        }

    </div>
  )
}

export default CustomModal
