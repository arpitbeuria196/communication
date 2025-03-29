import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const darkMode = useSelector((state)=> state.theme.darkMode);

  return (
    <div 
    className={`text-xl font-bold py-5 text-center flex ${ 
      darkMode ? ' bg-black text-white' : ' bg-white text-black'
      }`}>
      <nav >
        <a
        className='p-4'
        href='/customModal'>CustomModal </a>
        <a
         className='p-4'
        href='/pagination'
        >
        Pagination
        </a>
        <a 
        className='p-4'
        href='/starRating'>StarRating </a>
        <a
        className='p-4'
        href='/dynamicProgress'
        >DynamicProgress</a>
        <a
        className='p-4'
        href='/infiniteScrolling'
        >InfiniteScrolling</a>
        <a
        className='p-4'
        href='/accordian'
        >Accordian</a>
      </nav>
    </div>
  )
}

export default Header
