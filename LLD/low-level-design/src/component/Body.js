import axios from "axios";
import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [shimmer,setShimmer] = useState(true);

  useEffect(() => {
    fetchmemesAPI();

    window.addEventListener("scroll",scrollHandle);

    return ()=> window.removeEventListener("scroll",scrollHandle);
  },
  []);

  const scrollHandle = async ()=>
  {
    try {
      if(window.innerHeight + window.scrollY >= document.body.scrollHeight-10)
      {

        fetchmemesAPI();
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchmemesAPI = async () => {
    try {
      setShimmer(true);
      const response = await axios.get("https://meme-api.com/gimme/20");
      
      setShimmer(false)
      setMemes((memes)=> [...memes,...response.data.memes]);
     
      console.log("Api Called");
    } catch (error) {
      console.log(error.message);
    }
  };

  return shimmer ? (
    <div className="flex flex-wrap">
      <Shimmer />
    </div>
  ) : (
    <div className="flex flex-wrap justify-center">
      {memes.map((meme) => (
        <MemeCard key={meme.url} meme={meme} /> 
      ))}
    </div>
  );
};

export default Body;
