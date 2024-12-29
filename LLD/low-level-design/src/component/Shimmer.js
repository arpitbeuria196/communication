import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = () => {

  return(
        <div className='flex flex-wrap'>
         {
           Array(10).fill(0).map((_,i)=>(
            <div key={i} className="m-4">
            <ShimmerCard />
          </div>
           ))
         }
        </div>
      )
}

export default Shimmer
