import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmer = () => {

  return Array(10).fill(0).map((n,i)=>
    (
        <div className='flex flex-wrap'>
          <ShimmerCard/>
        </div>
      )) 
}

export default Shimmer
