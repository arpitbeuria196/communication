import React, { useEffect, useState,useRef } from 'react'

const Body = () => {

const[start,setStart] = useState(true);
const[hourVal,setHourVal] = useState("");
const[minVal,setMinVal] = useState("");
const[secVal,setSecVal] = useState("");
const [isPaused,setIsPaused] = useState(true);

const[timeLeft,setTimeLeft] = useState(0);

const intervalRef = useRef(null);

const startTimerHandle = () =>
{
    

    const total = 
    (parseInt(hourVal,10) || 0 )* 3600 +
    (parseInt(minVal, 10) || 0) * 60 +
    (parseInt(secVal, 10) || 0);

    if(total> 0)
    {
        setTimeLeft(total);
    }
    setStart(false);
    setIsPaused(false);
    
}



const zeroPad = (num) => (num<10 ? `0${num}` : num)

const formatTime = (totalSec) =>
{
    const h = Math.floor(totalSec/3600);
    const m = Math.floor((totalSec%3600)/60);
    const s = totalSec % 60;

    return {
        hh: zeroPad(h),
        mm: zeroPad(m),
        ss: zeroPad(s)
    }
}

const handleReset = () => {
    clearInterval(intervalRef.current);
    setStart(true);
    setTimeLeft(0);
    setHourVal("");
    setMinVal("");
    setSecVal("");
  };
 



useEffect(()=>{

    if(!start && timeLeft >0 && !isPaused)
    {
        //console.log(timeLeft);
        intervalRef.current =  setInterval(()=>{

        setTimeLeft((prev)=>{
            if(prev == 1)
            {
                clearInterval(intervalRef.current);
                setStart(true);

                
            if ("Notification" in window && Notification.permission === "granted") {
                new Notification("Timer complete!");
              } else {
                alert("Timer complete!");
              }
                return 0;

            }

            return prev-1;
        })
       },1000)
    }
    return () => clearInterval(intervalRef.current);
},[start,timeLeft,isPaused])

const pauseTimerHandle = ()=>{
    if(!isPaused)
    {
        clearInterval(intervalRef.current);
        setIsPaused(true); 
    }
    else
    {
        setIsPaused(false);
    }
    
    
}

const {hh,mm,ss} = formatTime(timeLeft);


  return (
    <div>
        <h1>Countdown Timer</h1>
        {timeLeft === 0 ? (
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="number"
            aria-label="Hours"
            placeholder="HH"
            value={hourVal}
            onChange={(e) => setHourVal(e.target.value)}
          />
          <input
            type="number"
            aria-label="Minutes"
            placeholder="MM"
            value={minVal}
            onChange={(e) => setMinVal(e.target.value)}
          />
          <input
            type="number"
            aria-label="Seconds"
            placeholder="SS"
            value={secVal}
            onChange={(e) => setSecVal(e.target.value)}
          />
        </div>
      ) :(
        <p className='font-bold'>
          {hh}:{mm}:{ss}  
        </p>
      )}

     <div style={{ marginTop: "12px" }}>
        {start ? (
          <button onClick={startTimerHandle}>Start</button>
        ) : (
          <>
            <button onClick={pauseTimerHandle}>{ isPaused ? " Resume" : "Pause"}</button>
            <button onClick={handleReset} style={{ marginLeft: "8px" }}>
              Reset
            </button>
          </>
        )}
      </div> 
    </div>
  )
}

export default Body
