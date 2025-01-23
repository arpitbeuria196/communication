import { useEffect } from "react";
import { useState } from "react"

const Body = () => {

  const[imageIndex,setImageIndex] = useState(0);
  const[imageList,setImageList] = useState([]);

  useEffect(()=>{
    fetchURL();
  },[])

  const fetchURL = async ()=>
  {
    try {
      const data = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
      const parsedData = await data.json();
      const listData = parsedData.data.children;

      const list = listData
        .filter((item) => item.data.url_overridden_by_dest?.includes(".jpg"))
        .map((item) => item.data.url_overridden_by_dest);

      setImageList(list);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  const handlePrev = ()=>
  {
    setImageIndex((prev)=>{
      return prev <= 0 ? imageList.length-1 : prev-1;
    });
  }
  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % imageList.length);
  };

  useEffect(()=>{

    if (imageList.length === 0) return;

    const timer =setInterval(()=>{
      handleNext()
    },3000)

    return ()=>{
      clearInterval(timer);
    }


  },[imageList.length])

  return (
    <div className="flex flex-col justify-center item-center w-full gap-4 p-4 relative">
    <div className="relative w-full max-w-md">
    {imageList.length >0 && (
      <div>
        <img src= {imageList[imageIndex]}
        alt={`Cute animal ${imageIndex + 1}`}
        className="w-auto max-w-md h-auto rounded shadow"
        />
       
      </div>
    ) }
    <button 
    className=" absolute top-1/2"
    onClick={handlePrev}>{'<'}</button>
    {
      imageIndex < imageList.length -1 &&(
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2"
        >
          {">"}
          </button>
      )
    }
    
    <div>{`Image ${imageIndex + 1} of ${imageList.length}`}</div>  

      </div>    
    </div>
  )
}

export default Body