import React from 'react'
import CommentBox from './CommentBox'

const commentsData = [

    {
        "name": "Arpit Beuria",
        "message": "Hello, how are you?",
        "replies": [
          {
            "name": "Amrit Beuria",
            "message": "I'm good, thanks! How about you?",
            "replies": [
              {
                "name": "Gitanjali Nayak",
                "message": "I'm doing great, thank you!",
                "replies": [
                    {
                        "name": "Arpit",
                        "message":"I am the game"
                    }

                ]
              }
            ]
          },
          {
            "name": "Sanjit Kumar Beuria",
            "message": "Hi everyone!",
            "replies": [
              {
                "name": "Richa Kalita",
                "message": "Hello! Welcome to the conversation.",
                "replies": []
              }
            ]
          }
        ]
      },
      {
        "name": "Elon Musk",
        "message": "Hello, how are you guys?",
      }
      
]

const Comments = () => {
  return (
    <div>
      {
        commentsData.map((comment,index)=>(
            <CommentBox
            key={index}
            comment={comment}
            />
        ))
      }
    </div>
  )
}

export default Comments
