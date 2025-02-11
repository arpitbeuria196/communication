import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [progress,setProgress] = useState(0);

  useEffect(()=>{

   const interval = setInterval(()=>{
    setProgress(prev => prev < 100 ? prev+10 : 100);
    },100)

     return ()=>{
      clearInterval(interval);
    }

  },[])

  return (
    <>
     <div className='min-h-screen justify-center items-center text-center m-10'>

      <div className="w-64 bg-gray-200 rounded-full h-6">
      <div
      className='bg-blue-600 h-6 rounded-full'
      style = {{width: `${progress}%`}}
      >
      </div>

      </div>
      <p className="mt-2 text-lg">{progress}%</p>
     </div>
    </>
  )
}

export default App
