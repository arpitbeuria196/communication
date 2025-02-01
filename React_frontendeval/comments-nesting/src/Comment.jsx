import { useState } from "react"


const Comment = ({comment}) => {
  const [replyTextEnabled,setReplyTextEnabled] = useState(false);
  const [textReply,setTextReply] = useState("");

  const handleAddReply = ()=>{
    if (textReply.trim() === '') return;
    const newReply = {
      id: Date.now(),
      text: textReply,
      replies:[],
    }
    comment.replies.push(newReply);
    setTextReply('');
    setReplyTextEnabled(false);  
  }

  return (
    <div className="comment pl-6 border-l-2 border-gray-600 my-2">
      <div>
      {comment.text}
      </div>
      {
        !replyTextEnabled && (
          <button
      onClick={()=>setReplyTextEnabled(!replyTextEnabled)}
      >Reply
      </button>
        )
      }
      {
        replyTextEnabled && (
          <div>
            <textarea
            value={textReply}
            onChange={(e)=>setTextReply(e.target.value)}
            className="border"
            />
            <button onClick={handleAddReply}>Add Reply</button>

          </div>
        )
      }
      <div className="text-sm text-gray-300">
        {comment?.replies && comment?.replies?.length>0 && (
          <div className="ml-20">
            {comment.replies.map((reply,index)=>(
                <Comment
                key={index}
                comment={reply}
                />
              ))}
          </div>
            
        )}
      </div>
    </div>
  )
}

export default Comment
