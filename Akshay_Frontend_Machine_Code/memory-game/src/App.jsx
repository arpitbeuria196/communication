import { use, useEffect, useState } from 'react'
import './App.css'

function App() {
  const[cards,setCards] = useState([]);
  const[gridSize,setGridSize] = useState(2);
  const [flipped, setFlipped] = useState([]);
const [solved, setSolved] = useState([]);
const [disabled, setDisabled] = useState(false);

const [won, setWon] = useState(false);

  const handleGridSize = (e)=>
  {

    const size = parseInt(e.target.value)

    if(size <2 || size >10) return;

    setGridSize(size);
  }

  const initializeGame = ()=>
  {
    const totalSize = gridSize * gridSize;
    const totalPairs = Math.floor(totalSize/2);
    const numbers = [...Array(totalPairs).keys()].map((n)=>n+1);

    const shuffledCards = [...numbers,...numbers]
    .sort(() => Math.random()-0.5)
    .slice(0,totalSize)
    .map((number,index)=>({id:index,number}))

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
    
  }

  useEffect(()=>{
    initializeGame();
  },[gridSize])

  const isFlipped = (id)=> flipped.includes(id) || solved.includes(id);
  const isSolved =  (id)=> solved.includes(id);

  useEffect(()=>{
    if(solved.length === cards.length && cards.length>0)
    {
      setWon(true);
    }
  },[solved,cards])

  const handleClick = (id)=>
  {
    if(disabled || won) return;

    if(flipped.length == 0)
    {
      setFlipped([id]);
    }
    if(flipped.length == 1)
    {
      setDisabled(true);
      if(id!= flipped[0])
      {
        setFlipped([...flipped,id]);
        //work
        const [firstId] = flipped;
        if(cards[firstId].number === cards[id].number)
        {
          setSolved([...solved,firstId,id]);
          setFlipped([]);
          setDisabled(false);
        }
        else
        {
          setTimeout(()=>{
            setFlipped([]);
            setDisabled(false);
          },1000)
        }
      }
      else
      {
        setFlipped([]);
        setDisabled(false);
      }
    }

    console.log(flipped);
  }

  return (
    <>
     <div>
      <h1>Memory Game</h1>
      <div>
        <input
        type='number'
        value={gridSize}
        onChange={handleGridSize}
        className='border-2 border-gray-300 rounded px-2 py-1'
        />
        <div
        className='grid gap-2 mb-4'
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0,1fr))`,
          width: `min(100%, ${gridSize * 5.5}rem)`,
        }}
        >
        {
          cards.map((card)=>(
            <div
            key={card.id}
            onClick={()=>handleClick(card.id)}
            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-2xl cursor-pointer
              ${isFlipped(card.id) ? isSolved(card.id) ? "bg-green-500 text-white" : "bg-blue-500 text-white" : "bg-gray-500 text-white"}
              `}
            >
              {isFlipped(card.id) ? card.number : "?"}
            </div>
          ))
        }
        </div>

      </div>
     </div>
    </>
  )
}

export default App
