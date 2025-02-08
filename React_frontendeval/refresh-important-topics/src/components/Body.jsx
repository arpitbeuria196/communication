import { useEffect, useState } from "react"
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {

  const [memes,setMemes] = useState([]);
  const [draggingIndex,setDraggingIndex] = useState(null);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>
  {
     const response = await fetch("https://meme-api.com/gimme/wholesomememes/5");

     const data = await response.json();

     setMemes((prevMemes) => [...prevMemes, ...data.memes]);

     console.log(data.memes);

  }

  const handleDragStart = (index)=>
  {
      setDraggingIndex(index);
  }

  const handleDragOver = ()=>
  {

  }

  const handleDrop = ()=>
  {

  }

  return (
    <div className="flex flex-wrap">
     {
      memes?.length>0 ? (
        memes.map((meme,index)=>(
          <MemeCard
          draggable
          onDragStart= {()=>handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          key={index}
          item={meme}

          />
        ))
      ) :(
        <div>
          <Shimmer/>
        </div>
      )
     }
    </div>
  )
}

export default Body
