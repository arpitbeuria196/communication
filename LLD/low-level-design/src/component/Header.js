import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from "../component/About"

const Header = ({lang,setLang}) => {
  return (
    <>
    <header className="bg-black text-white px-5 py-4 flex justify-between items-center shadow-md">
      {/* Branding / Logo */}
      <div className="text-2xl font-bold">
        Hello World!
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="hover:text-gray-300 transition duration-200"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-gray-300 transition duration-200"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/accordion"
              className="hover:text-gray-300 transition duration-200"
            >
              accordian
            </Link>
          </li>
          <li>
            <Link
              to="/comments"
              className="hover:text-gray-300 transition duration-200"
            >
              Comments
            </Link>
          </li>
          <li>
            <Link
              to="/images"
              className="hover:text-gray-300 transition duration-200"
            >
              ImageSlides
            </Link>
          </li>
          <li>
            <Link
              to="/pagination"
              className="hover:text-gray-300 transition duration-200"
            >
              Pagination
            </Link>
          </li>
        </ul>
      </nav>
      <select 
      className='text-black border rounded-md font-semibold mt-4' 
      value={lang}
      onChange={(e)=>
      {
        console.log(lang);
        setLang(e.target.value);
      }
      }
      >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      
      </select>
    </header>
    </>

    
  );
};

export default Header;
