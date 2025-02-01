import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [replyText, setReplyText] = useState(''); // State for reply input
  const [showReplyBox, setShowReplyBox] = useState(false); // Toggle reply input box

  // Function to add a reply
  const addReply = () => {
    if (replyText.trim() === '') return; // Don't add empty replies

    const newReply = {
      id: Date.now(), // Unique ID
      text: replyText,
      replies: [], // No nested replies initially
    };

    // Update the comment's replies
    comment.replies.push(newReply);
    setReplyText(''); // Clear the reply input box
    setShowReplyBox(false); // Hide the reply input box
  };

  return (
    <div className="comment pl-6 border-l-2 border-gray-600 my-2">
      {/* Comment Text */}
      <div className="text-sm text-gray-300">{comment.text}</div>

      {/* Reply Button */}
      <button
        onClick={() => setShowReplyBox(!showReplyBox)}
        className="text-xs text-blue-500 hover:text-blue-400 mt-1"
      >
        Reply
      </button>

      {/* Reply Input Box */}
      {showReplyBox && (
        <div className="mt-2">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400"
            placeholder="Write a reply..."
            rows="2"
          />
          <button
            onClick={addReply}
            className="mt-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-xs"
          >
            Submit Reply
          </button>
        </div>
      )}

      {/* Render Replies Recursively */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies ml-6">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id} // Use a unique ID instead of index
              comment={reply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;