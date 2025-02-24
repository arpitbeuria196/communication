import { use, useState } from 'react'
import './App.css'

function App() {
  const[gridSize,setGridSize] = useState();
  const[cards,setCards] = useState([]);

  const[flipped,setFlipped] = useState([]);
  const[solved,setSolved] = useState([]);
  const[disable,setDisabled] = useState(false);

  const[won,setWon] = useState(false);

  const handleGridSizeChange = (e)=>
  {
    const size = parseInt(e.target.value);

    if(size>=2 && size<=10) setGridSize(size);
  }

  const initializeGame = ()=>
  {
    const totalSize = gridSize * gridSize;
    const pairCount = Math.floor(totalSize/2);
    const numbers = [...Array(pairCount).keys()].map((n)=>(n+1));
    const shuffledCards = [...numbers,...numbers].sort(()=>Math.random()-0.5)
    .slice(0,totalCards)
    

  }



  return (
    <>
     <div className='flex flex-col items-center justify-center min-h-screen bg-grey-100 p-4'>
      <h1 className='p-10'>Memory Game</h1>
      <div className='mb-4'>
      <label htmlFor="gridSize" className="mr-2">
          Grid Size: (max 10)
      </label>
        <input
        type='number'
        id="gridSize"
        min="2"
        max="10"
        value={gridSize}
        onChange={handleGridSizeChange}
        className='border-2 rounded px-2 py-1'
        />
      </div>
     </div>
    </>
  )
}

export default App
