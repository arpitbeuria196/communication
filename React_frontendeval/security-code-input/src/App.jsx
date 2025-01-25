import { useEffect, useState,useRef } from "react"

function App() {
  const [code,setCode] = useState(['','','','']);
  const refs = useRef([]);
  const CODE = '1234';

  useEffect(()=>{
    refs.current[0]?.focus(); 
  },[])
  

const handleInputChange = (index,value)=>
{
  if(!Number(value))
  {
    return;
  }

  const copyArray = [...code];
  copyArray[index] = value;
  setCode(copyArray);
  console.log(copyArray);

  if(value && index<3)
  {
    refs.current[index+1].focus();
  }
}


const handleKeyDown = (index,e)=>
{
  if(e.keyCode == 8)
  {
    const copyArray = [...code];
    copyArray[index] = '';
    setCode(copyArray);
    console.log(copyArray);

    if(index>0)
    {
      refs.current[index-1].focus();
    }
  }
}

const handlePaste = (e)=>
{
  const data = e.clipboardData.getData('text');

  if(!Number(data) || data.length!= CODE.length)
  {
    return;
  }

  const pasteCode = data.split('');
  setCode(pasteCode);
  refs.current[CODE.length-1].focus();

  console.log(data);
}

const handleSubmit = ()=>
{
    const enteredCode = code.join("");

    if(enteredCode == CODE)
    {
      alert("Code verified successfully!");
    }
    else
    {
      alert("Invalid code. Try again.");
    }
}

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="flex gap-2 mb-4">
        {
          code.map((digit,index)=>(
            <input
            className="w-12 h-12 text-center text-lg border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            ref={(el)=>(refs.current[index] = el)}
            onPaste={handlePaste}
            onChange={(e)=> handleInputChange(index,e.target.value)}
            onKeyDown={(e)=>handleKeyDown(index,e)}
            />
          ))
        }
      </div>
      <button
      className=" px-4 py-2 border rounded text-white bg-blue-500 hover:bg-blue-600"
        onClick={handleSubmit}
      >Submit</button>
    </div>
     
    </>
  )
}

export default App
