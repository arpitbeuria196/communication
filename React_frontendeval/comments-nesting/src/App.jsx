import { useState } from 'react';
import './App.css';
import Comment from './Comment';
import { comments } from './Comments';

function App() {
  
  const [commentBox,setCommentBox] = useState(comments);
  const [text,setText] = useState("");

  const handleAddComments = ()=>
  {
    if(text.trim()=== " ") return;

    const newText = {
      id: Date.now(),
      text: text,
      replies:[],
    }

    setCommentBox(...commentBox,newText);

  }

  return (
    <> 
    <div className='min-h-screen justify-center text-center m-10'>
      <h1>Custom Comments</h1>
      <div className='m-4 grid gap-y-4 '>
        <textarea
        className='border p-4'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={handleAddComments}>Add Comments</button>
      </div>
      {
        comments?.length && (
          <div>
            {
              comments.map((co,index)=>(
                <Comment
                key={index}
                comment={co}
                />
              ))
            }
          </div>
        )
      }
    </div>
    </>
  )
}

export default App
