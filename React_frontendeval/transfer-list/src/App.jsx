import { useState } from 'react'
import './App.css'

function App() {

  const buttons = ["First","Second","Third","Fourth"];
  const [leftSide,setLeftSide] = useState(["First","Second","Third","Fourth"]);
  const [rightSide,setRightSide] = useState([]);
  const [selected,setSelected] = useState([]);
  
  const [click,setcClick] = useState(false);

  const selctedItemsHandle = (e)=>
  {
    const newItem = String(e.target.name);

    if(selected.includes(newItem))
    {
      const filteredItems = selected.filter((item)=>{
        return item!= newItem;
      })
      
      setSelected(filteredItems);
    }
    else
    {         
    setSelected(
      prev => {
        return [...prev,newItem];
      }
    )
    }
   // console.log(selected);
  }

  const rightSideHandle = ()=>
  { 
    setRightSide(prev => {
      return [...prev,...selected];
    });

    setLeftSide(
      leftSide.filter((item)=>{
        return !selected.includes(item);
      })
    )

    setSelected([]);
    
  }

  const leftSideHandle = ()=>
    { 
      setLeftSide(prev => {
        return [...prev,...selected];
      });
  
      setRightSide(
        rightSide.filter((item)=>{
          return !selected.includes(item);
        })
      )
  
      setSelected([]);
      
    }

  return (
    <>
      <div className='min-h-screen justify-center item-center text-center m-5'>
        <h1>Transfer List</h1>
        <div className='border p-3 w-64'>
          {
            leftSide?.map((list,index)=>(
              <div 
              className='m-3'
              key={index}>
                <button
                name={list} 
                onClick={selctedItemsHandle}
                className='w-full'
                key={index}>{list}</button>
              </div>
            ))
          }
        </div>
        <div className='flex-row'>
        <button
        onClick={leftSideHandle}
        >Left</button>
        <button
        onClick={rightSideHandle}
        >Right</button>
        </div>
        <div className='border p-3 w-64'>
          {
            rightSide?.map((list,index)=>(
              <div 
              className='m-3'
              key={index}>
                <button
                name={list} 
                onClick={selctedItemsHandle}
                className='w-full'
                key={index}>{list}</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
