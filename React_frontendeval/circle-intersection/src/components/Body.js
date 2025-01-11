import React, { useState } from 'react'

const Body = () => {

const [circles,setCircles] = useState([]);
const[intersectMssgs,setIntersectMssgs] = useState("");

const handleOnClick = (e)=>
{
    const newCircle = 
    {
        x: e.clientX,
        y: e.clientY,
        radius: 50
    }

    const intersect = circles.some((circle)=>{

      const distance = Math.sqrt(
        Math.pow(circle.x-newCircle.x,2) + Math.pow(circle.y-newCircle.y,2)
      )

      return circle.radius+newCircle.radius > distance;
    })

    if(intersect)
    {
      setIntersectMssgs("Intersecting eachother");
    }
    else
    {
      setIntersectMssgs("");
    }

    if(circles.length >=2)
    {
        setCircles([newCircle]);
    }
    else
    {
        setCircles([...circles,newCircle]);
    }

    console.log(circles)
}

  return (
    <div
    className='w-screen h-screen border-2 cursor-pointer'
    onClick={handleOnClick}
    >
        {circles.map((circle,index)=>
          (
            <div 
            key={index}
           className="absolute bg-red-100 border-2 border-blue-700 rounded-full"
        style={{
          width:`${circle.radius*2}px`,
          height:`${circle.radius*2}px`,
          top:`${circle.y-circle.radius}px`,
          left:`${circle.x-circle.radius}px`
        }}
        ></div>
          ))}
          {intersectMssgs && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-md">
          {intersectMssgs}
        </div>
      )}
    </div>
  )
}

export default Body