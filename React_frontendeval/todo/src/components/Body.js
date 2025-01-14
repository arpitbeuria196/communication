import React, { useState } from 'react';


const Body = () => {
    const [tasks,setTasks] = useState([]);
    const [value,setValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    const addValueHandle = ()=>
    {
        if(editingIndex!=null)
        {
            setTasks(tasks.map((task,idx)=>(idx === editingIndex) ? value:task));
            setEditingIndex(null); 
        }
        else
        {
            setTasks([...tasks,value]);
        }

        setValue('');
       
    }

    const handleDelete = (index)=>
    {
        setTasks(tasks.filter((task,idx)=> idx!== index));
    }

    const handleUpdate = (index)=>
    {
        setValue(tasks[index]);
        setEditingIndex(index);
    }

  return (
    <div>
        <input
        placeholder='Enter Your Task'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        />
        <button onClick={addValueHandle}>
            {editingIndex ? "Update" : "Add"}</button>
        {
            tasks.map((task,index)=>(
                    <li key={index}>
                        <div>
                        {task}
                        <button onClick={()=>handleUpdate(index)}>Update</button>
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        </div>  
                        </li>
            ))
        }
    </div>
  )
}

export default 
Body