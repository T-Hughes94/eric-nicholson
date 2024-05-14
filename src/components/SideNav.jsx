import React, { useState } from 'react';
import { FaBriefcase, FaHouse, FaGraduationCap, FaEnvelope, FaPencil, FaBars} from "react-icons/fa6";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false); // This will close the navigation
  };

  return (
    <div>
      {/* Hamburger Menu */}
      <FaBars onClick={toggleNav} className="absolute top-4 right-4 z-[99] md:hidden" />

      {/* Mobile Navigation */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <FaHouse size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <FaPencil size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <FaBriefcase size={20} />
            <span className="pl-4">Experience</span>
          </a>
           <a
            href="#education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <FaGraduationCap  size={20} />
            <span className="pl-4">Education</span>
          </a>
          <a
            href="mailto:your.email@example.com?subject=Contact from Website" // Email link with subject
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <FaEnvelope size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full bg-blue-700 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaHouse size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaPencil size={20} />
          </a>
          <a
            href="#experience"
            className="rounded-full bg-green-500 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaBriefcase size={20} />
          </a>
          <a
            href="#education"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <FaGraduationCap  size={20} />
          </a>
          <a
            href="mailto:your.email@example.com?subject=Contact from Website" // Email link with subject
            className="rounded-full bg-orange-600 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            
          >
            <FaEnvelope size={20} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Sidenav;