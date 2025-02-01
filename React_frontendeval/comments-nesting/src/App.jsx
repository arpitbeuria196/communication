import './App.css';
import { comments } from './Comments';
import Comment from './Comment';
import { useState } from 'react';

function App() {

  const[commentBox,setCommentBox] = useState("");
  const [commentsDynamic,setCommentsDynamic] = useState(comments);

  const handleAddComment = ()=>
  {
    if (commentBox.trim() === '') return;
    const newComment = {
      id: Date.now(), // Unique ID (using timestamp)
      text: commentBox,
      replies: [], // No replies initially
    };
      setCommentsDynamic([...commentsDynamic,newComment]);
      setCommentBox('');

  }


  return (
    <>
    <div className='min-h-screen p-10 text-white'>
    <h1 className="text-2xl font-bold mb-6">Nested Comments</h1>
    <textarea
    value={commentBox}
    onChange={(e)=>setCommentBox(e.target.value)}
    className='border m-2 '
    />
    <button
    onClick={handleAddComment}
    >Add Comment</button>
    <div>
      {commentsDynamic?.length && (
        commentsDynamic.map((comment,index)=>(
          <Comment
          key={index}
          comment= {comment}
          />
        ))
      )}
    </div>
    </div>
       
    </>
  )
}

export default App
