import React, { useCallback, useEffect, useState } from 'react';

const debouncingLogic = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer); 
      timer = setTimeout(() => {
        fn(...args); 
      }, delay);
    };
  };

  const throttlingLogic = (fn,delay)=>
  {
    let timer = null;

    return (...args)=>
    {
        if(!timer)
        {
        fn(...args);

       timer =  setTimeout(()=>
        {
            timer = null
        },delay)
        }
    }
  }
  
const Body = () => {

    const[debounceText,setDebounceText] = useState("");
    const [searchQuery,setSearchQuery] = useState("");
    const [text, setText] = useState("");

    
    const debounceHandle = useCallback(
        debouncingLogic((value) => {
          setDebounceText(value); 
          console.log("Debounced Value:", value);
        }, 500),
        [] 
      );

      const throttleHandle = useCallback(
        throttlingLogic((value)=>{
              setText(value);
              console.log("Throttle val",value);  
        },500),
        []
      )

    


  return (
    <div>
        <input
        type='text'
        className='bg-red-200'
        onChange={(e) => debounceHandle(e.target.value)}
        />
         <p className="mt-4">Debounced Text: {debounceText}</p>
        <input
        type='text'
        className='bg-red-200'
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        />
         <p className="mt-4">Normal Text: {searchQuery}</p>

         <input
         type='text'
         className='bg-red-200'
         onChange={(e) => throttleHandle(e.target.value)}
         />
     <p className="mt-4">Throttle Text: {text}</p>
       
    </div>
  )
}

export default Body