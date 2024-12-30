import React from 'react'

const CommentBox = ({comment}) => {
    const{name,message,replies} = comment;
  return (
    <div className='pl-4 mt-4 ml-6 border-l-2 border-gray-200' >
        <div className='flex items-center gap-3'>
        <img className="w-12 h-12 rounded-full" src = "https://lh3.googleusercontent.com/a/ACg8ocIt9U_C-oVzFHTheFSjEwZgz8vf-XMVruOXjjICSlalMIf6L7wj=s128-b16-cc-rp-mo"/>
        <div className="text-lg font-semibold">{name}</div>
        </div>
         <div className="mt-2 text-gray-700">{message}</div>
         {
            replies &&
                 replies.map((reply,index)=>(
                <CommentBox comment={reply} key={index} />
            ))
         }
    </div>
  )
}

export default CommentBox
