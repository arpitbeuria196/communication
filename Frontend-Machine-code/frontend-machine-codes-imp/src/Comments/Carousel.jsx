import React, { useEffect, useState } from 'react'


const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];

const Carousel = () => {

    const[currentIndex,setCurrentIndex] = useState(0);

    const handlePrev = ()=>
    {
        setCurrentIndex(prev => {
            return prev = prev > 0 ? prev-1 : data.length-1
        });
    }
    const handleNext = ()=>
    {
        setCurrentIndex((prev) => (prev + 1) % data.length);

    }

    useEffect(()=>{
       const timer = setInterval(()=>{
            handleNext();
        },2000)

        return ()=> clearInterval(timer);

    },[])

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <button className="text-3xl text-white mx-4 bg-gray-800 p-2 rounded-md"
        onClick={handlePrev}
        >Prev</button>
        <div className='relative w-[600px] h-[400px] flex flex-col '>
        <img
        className='max-h-screen max-w-screen' 
        src={data[currentIndex].image}/>
        </div>
        <button 
        onClick={handleNext}
        className='"text-3xl text-white mx-4 bg-gray-800 p-2 rounded-md"'>Next</button>
    </div>
  )
}

export default Carousel