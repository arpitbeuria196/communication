import React, { useEffect, useState } from 'react'

const Body = () => {

const [hour,setHour] = useState('');
const [min,setMin] = useState('');
const [sec,setSec] = useState('');
const [pause,setPause] = useState(false);
const[totalTime,setTotalTime] = useState(0);


const timerHandle = ()=>
{
    if(pause==false)
    {
        setPause(true);
        const hh = parseInt(hour)*3600;
        const mm = parseInt(min)*60;
        const ss = parseInt(sec);

        if (totalTime === 0) setTotalTime(hh + mm + ss); 
    }
    else
    {
        setPause(false);
    }
}

const resetHandler = ()=>
{
    setHour('')
    setMin('')
    setSec('')
    setTotalTime(0)
    setPause(false);
}

useEffect(()=>{

    let timer;

    if(pause && totalTime>0)
    {
           
    timer = setTimeout(()=>{
        setTotalTime((prev)=> prev-1);
        console.log(totalTime);
    },1000)
    }
    else if(totalTime == 0)
    {
        setPause(false);
    }
    return (()=>clearTimeout(timer))
},[totalTime,pause])

const formatTime = ()=>
{
    const hours = Math.floor(totalTime/3600);
    const mins = Math.floor((totalTime%3600)/60);
    const secs = Math.floor(totalTime%60);

    return `${hours.toString().padStart(2,'0')} : ${mins.toString().padStart(2,'0')} 
    : ${secs.toString().padStart(2,'0')}`
}

  return (
    <div>
        <div className='ml-16 mt-10 space-x-2 '>
        <input
        placeholder='HH'
        value={hour}
        onChange={(e)=>{setHour(e.target.value)}}
        className='w-16 p-2 border border-gray-700 rounded text-center'

        />
        <input
        placeholder='MM'
        value={min}
        onChange={(e)=>{setMin(e.target.value)}}
        className='w-16 p-2 border border-gray-700 rounded text-center'
        />
        <input
        placeholder='SS'
        value={sec}
        onChange={(e)=>{setSec(e.target.value)}}
        className='w-16 p-2 border border-gray-700 rounded text-center'
        />

                <button onClick={timerHandle}
                className='px-4 py-2 rounded text-white border border-red-900 bg-black'
                >
                    {pause ? 'Pause' : totalTime > 0 ? 'Resume' : 'Start'}
                </button>
                <button
                className='px-4 py-2 rounded text-white border border-red-900 bg-black'
                onClick={resetHandler}>Reset</button>
        </div>
        <div className='text-4xl font-mono mt-3 mr-16'>
        {
            formatTime()
        }
        </div>
       
    </div>
  )
}

export default Body
