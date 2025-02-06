import { useEffect, useState } from 'react'
import './App.css'
import { BarChart, CartesianGrid, ResponsiveContainer,XAxis,YAxis,Tooltip,Bar } from 'recharts';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>
  {
      const response = await fetch( "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new");

      const dataV = await response.text();

      const numbers = dataV.trim().split("\n").map(Number);

      const frequencyMap  = new Map();

      numbers.forEach((number)=>{
          if(frequencyMap.has(number))
          {
            frequencyMap.set(number,frequencyMap.get(number)+1);
          }
          else
          {
            frequencyMap.set(number,1);
          }
      })

      const chartData = [];

      frequencyMap.forEach((freq,number)=>{
        chartData.push({number,freq});
      })

      setData(chartData);

      console.log(chartData);

  }

  return (
    <>
      <div className="w-full max-w-2xl mx-auto p-4 text-white">
      <h2 className="text-xl font-bold text-center mb-4">Number Frequency Histogram</h2>
      <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}> 
            <XAxis dataKey="number" stroke="white" />
            <YAxis stroke="white" />
            <Bar dataKey="freq" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>

    </div>
        
    </>
  )
}

export default App
