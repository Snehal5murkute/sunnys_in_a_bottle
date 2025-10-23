import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from  "../assets/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#FDF2D3] px-6 md:px-12 py-2 flex items-center justify-between top-0 z-50 relative">
      
      {/* Logo (always left) */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-[80px] w-[200px] sm:h-[90px] sm:w-[200px]"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium">
        <li>
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Products" className="hover:text-blue-500">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="hover:text-blue-500">
            About
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/Contact" className="hover:text-blue-500">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Button (right on small screens) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-[90px] left-0 w-full bg-[#FDF2D3] flex flex-col items-center md:hidden shadow-lg py-4 space-y-4 text-gray-700 font-medium z-50">
          <li>
            <NavLink to="/" onClick={toggleMenu} className="hover:text-blue-500">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" onClick={toggleMenu} className="hover:text-blue-500">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={toggleMenu} className="hover:text-blue-500">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={toggleMenu} className="hover:text-blue-500">
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
