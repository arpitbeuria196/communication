import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';

const Body = () => {

const [memes,setMemes] = useState([]);

useEffect(()=>{
    fetchmemesAPI();
},[])

const fetchmemesAPI = async ()=>
{
   try {
    const response = await axios.get("https://meme-api.com/gimme/20");
     console.log(response.data.memes); 
     setMemes(response.data.memes);
   } catch (error) {
    console.log(error.message);
   }
}


  return  (memes.length == 0) ? <div className='flex flex-wrap'>
    <Shimmer/>
    </div> : (
    <div className='flex flex-wrap justify-center'>
      {memes.map((meme,index)=>(

        <MemeCard
        key={index}
        meme ={meme}
        />
            
      ))}
    </div>
  )
}

export default Body
