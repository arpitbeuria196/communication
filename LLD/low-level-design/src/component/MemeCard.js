import React from 'react'

const MemeCard = ({meme}) => {

const {author,url,title} = meme;
  return (
    <div className='max-w-xs border rounded-md  border-red-400 p-4 m-4'>
      <img src={url}/>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  )
}

export default MemeCard
