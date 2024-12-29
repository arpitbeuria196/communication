import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
