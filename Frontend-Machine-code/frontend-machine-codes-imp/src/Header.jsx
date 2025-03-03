import React from 'react'

const Header = () => {
  return (
    <div className='text-xl font-bold py-5 bg-black text-whit text-center flex'>
      <nav >
        <a
        className='p-4'
        href='/customModal'>CustomModal </a>
        <a 
        className='p-4'
        href='/starRating'>StarRating </a>
      </nav>
    </div>
  )
}

export default Header
