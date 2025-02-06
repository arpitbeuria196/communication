import { useEffect, useState } from 'react'
import './App.css'
import { BarChart, ResponsiveContainer,XAxis,YAxis,Bar } from 'recharts';

function App() {

  const[data,setData] = useState([]);

 const url = "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";

 useEffect(()=>{
  fetchData();
 },[])

 const fetchData = async ()=>
 {
    const response = await fetch(url);
    const text = await response.text();

    const dataV = text.split("\n").map((t)=>(Number(t)));

    const frequencyMap = new Map();

    dataV.forEach((item)=>{
      if(frequencyMap.has(item))
      {
        frequencyMap.set(item,frequencyMap.get(item)+1);
      }
      else
      {
        frequencyMap.set(item,1);
      }
    })

    const array = [];

    frequencyMap.forEach((freqency,number)=>{
      array.push({number,freqency});
    })

    setData(array);
    console.log(array);
 }



  return (
    <>
       <div className='min-h-screen justify-center item-center m-5'>
        <h1 className='text-center m-4'>Data Analysis</h1>
        <ResponsiveContainer width={400} height={400}>
          <BarChart data={data}>
            <XAxis dataKey="number" stroke="white" />
            <YAxis stroke="white" />
            <Bar dataKey="freqency" fill="white"/>
          </BarChart>
        </ResponsiveContainer>
        </div> 
    </>
  )
}

export default App
