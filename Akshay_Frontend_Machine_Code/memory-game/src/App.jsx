import { use, useEffect, useState } from 'react'
import './App.css'

function App() {

  const[gridSize,setGridSize] = useState(2);
  const[cards,setCards] = useState([]);
  const[flipped,setFlipped] = useState([]);
  const[solved,setSolved] = useState([]);
  const[disabled,setDisabled] = useState(false);

  const[won,setWon] = useState(false);

  const initializeGame = ()=>
  {
    const totalNumbers = gridSize * gridSize;
    const pairs = Math.floor(totalNumbers/2);
    const numbers = [...Array(pairs).keys()].map((n)=>n+1);
    const shuffledCards = [...numbers,...numbers].sort(()=>Math.random()-0.5)
    .map((number,index)=>({id:index,number}));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
  }

  useEffect(()=>{
    initializeGame();
  },[gridSize])

  const checkMatch = (secondId)=>
  {
    const firstId = flipped[0]; // ✅ This correctly gets the first flipped card's ID


    if(cards[firstId].number === cards[secondId].number)
    {
      setSolved([...solved,firstId,secondId]);
    }

    setTimeout(() => {
      setFlipped([]);
      setDisabled(false);
    }, 800);

  }

  const handleClick = (id)=>
  {
    if(flipped.includes(id) || solved.includes(id) || disabled) return;

    if(flipped.length == 0)
      {
        setFlipped([id]);
      }
      else if(flipped.length == 1)
      {
        setFlipped([...flipped,id]);
        setDisabled(true);

        setTimeout(()=> checkMatch(id),800);
      }
  }

  useEffect(()=>{
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    }
  },[solved, cards])

  return (
    <>
     <div className='flex flex-col items-center justify-center min-h-svcreen'>
      <h1 className='text-3xl font-bold mb-6'>Memory Game</h1>
      <div className='mb-4'>
        <label className="mr-2">Grid Size: (max 10)</label>
        <input
          type='number'
          id="gridSize"
          min="2"
          max="10"
          value={gridSize}
          onChange={(e)=>{
            const newSize = parseInt(e.target.value, 10);
            if(newSize >= 2 && newSize <= 10) {
              setGridSize(newSize);
            }
          }}
          className='border-2 border-gray-300 rounded px-2 py-1'
/>

      </div>
      <div
        className="grid gap-2"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: `${gridSize * 5.5}rem`, 
        }}
      >
        {cards.map((card)=>(
          <div key={card.id}
          onClick={()=>handleClick(card.id)}
          className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg bg-gray cursor-pointer
            ${
              flipped.includes(card.id) || solved.includes(card.id)
              ? "bg-blue-500 text-white" :  "bg-gray-300 text-gray-400"
            }
            
            `}
          >
           {flipped.includes(card.id) || solved.includes(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>
      {won && (
  <div className="mt-4 text-4xl font-bold text-green-600 animate-bounce">
    You Won! 🎉
  </div>
)}
<button 
  onClick={initializeGame}
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-700 transition"
>
  🔄 Restart Game
</button>


     </div>
    </>
  )
}

export default App
