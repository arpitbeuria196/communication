import { useEffect, useState } from 'react'
import './App.css'
import { items } from './Item';

function App() {

  const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
   const [filteredData, setFilteredData] = useState(items)
   const [activeFilters, setActiveFilters] = useState([]);

  const handleFilter = (value)=>
  {
     if(activeFilters.includes(value))
      {
        const updateArray = activeFilters.filter((product)=>{
          return product !== value;
        })

        setActiveFilters(updateArray);
        console.log(updateArray);


      }
      else
      {
        const copyingArray = [...activeFilters];
        copyingArray.push(value);
       console.log(copyingArray);
        setActiveFilters(copyingArray);
      }
     
  }

  useEffect(()=>{

    if(activeFilters.length == 0)
    {
      setFilteredData(items);
    }
    else
    {
      setFilteredData(
          items.filter((data)=>{
          return activeFilters.includes(data.category);
        })
      )
    }

  },[activeFilters])
 
  return (
    <div className='min-h-screen min-w-screen m-10'>
     <div className='flex items-center justify-center'>
      {
        filters.map((product,index)=>(
          <button
            key={index}
            onClick={() => handleFilter(product)}
            className={`px-6 py-2 border rounded-md transition-colors duration-300 text-sm font-medium
              ${
                activeFilters.includes(product)
                  ? 'bg-blue text-gray-700 border-blue-500 hover:bg-blue-600'
                  : 'bg-white text-white border-gray-300 hover:bg-gray-100'
              }`}
          >
            {product}
          </button>
        ))
      }
     </div>
     {
        filteredData?.length && (
          <div className=' flex gap-4 p-4 ml-10'>
            {
              filteredData.map((item,index)=>(
                <div 
                className='border border-gray-200 rounded-lg p-4'
                key={index}>
                  <h3 className='text-lg font-semibold text-white-800'> {item.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{item.category}</p>
                  
                  </div>
              ))
            }
          </div>
        )
     }
    </div>
  )
}

export default App
