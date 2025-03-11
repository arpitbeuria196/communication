import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const StarRating = () => {

  const [rating,setRating] = useState(0);
  const starArray = [...Array(5)].map((_,index)=>index+1)
  console.log(rating);

  return (

    
    <div className='flex flex-row justify-center items-center min-h-screen'>
      {
        starArray.map((val,index)=>(
          <label key={index} className='cursor-pointer'>
        <FaStar
        size={100}
        className={val <= rating ? "text-yellow-500" : "text-grey-500" }
        onClick={()=>setRating(val)}
        />
      </label>
        ))
      }
    </div>
  )
}

//dummy

export default StarRating;
