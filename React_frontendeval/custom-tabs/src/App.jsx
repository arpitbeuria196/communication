import { useState } from 'react';
import './App.css'
import Tabs from './Tabs';

function App() {

  const tabs = ["Home","Content","About"];
  const [tabIndex,setTabIndex] = useState(0);

  const handleTabs = (e)=>
  {
      setTabIndex(e.target.value);
  }

  return (
    <>
     <div className='min-h-screen flex  flex-col text-center justify-center mt-10'>
      <h1 className='text-2xl font-bold mb-4'>Custom Tabs</h1>

      <div className='flex space-x-4'>
      {
        tabs.map((tab,index)=>(
          <div 
          className='flex'
          key={index}>
             <button
             value={index} 
             onClick={handleTabs}
             key={index}
          >
            {tab}
          </button>
          </div>
        ))
      }
      </div>
      {
       <Tabs
       tabIndex={ tabIndex}
       />
      }
      
     </div>
    </>
  )
}

export default App
