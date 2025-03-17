import React, { useEffect,useState } from 'react'

const InfiniteScrolling = () => {

    const [memes,setMemes] = useState([]);

    useEffect(()=>{
        fetchApi();
        window.addEventListener("scroll",scrollHandle);

        return (()=>{
            window.removeEventListener("scroll",scrollHandle);
        })

    },[])

    const scrollHandle = async ()=>
    {
        if( window.scrollY + window.innerHeight >= document.body.scrollHeight-10)
        {
            fetchApi();
        }
    }

    const fetchApi = async ()=>
    {
        const fetchUrl =  await fetch("https://meme-api.com/gimme/20");
        const data = await fetchUrl.json();
        setMemes((prevMemes)=>[...prevMemes,...data.memes]);
        console.log(data.memes);
    }

  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold text-center mb-6">Meme Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {memes.map((meme, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <img className="w-full h-auto rounded-md" src={meme.url} alt="Meme" />
        </div>
      ))}
    </div>
  </div>
  )
}

export default InfiniteScrolling