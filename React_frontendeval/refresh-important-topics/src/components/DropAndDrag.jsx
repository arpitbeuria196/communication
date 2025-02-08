import { useState } from "react"


const DropAndDrag = () => {

  const [values,setValues] = useState(["Item1","Item2","Item3","Item4"]);
  const [dragIndex,setDragIndex] = useState(null);

  const handleDragStart = (index)=>
  {
      setDragIndex(index);
      console.log(index);
  }
  const handleDragOver = (e)=>
  {
      e.preventDefault();
  }

  const handleDropOver = (index)=>
  {
      console.log(index);

      const copyingArray = [...values];

      const draggedItem = copyingArray.splice(dragIndex,1);

      copyingArray.splice(index, 0, draggedItem); 

      setValues(copyingArray);
      
  }



  return (
    <div className="">
      {
        values.length > 0 && (
          values.map((value,index)=>(
            <div 
            className="m-5 p-5 border"
            draggable
            onDragStart={()=>handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={()=> handleDropOver(index)}
            key={index}>
              {value}
            </div>
          ))
        )
      }
      
    </div>
  )
}

export default DropAndDrag
