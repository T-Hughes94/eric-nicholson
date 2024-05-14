import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail,AiOutlineRead,AiOutlineCoffee,} from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

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
      <AiOutlineMenu onClick={toggleNav} className="absolute top-4 right-4 z-[99] md:hidden" />

      {/* Mobile Navigation */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <AiOutlineCoffee size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <GrProjects size={20} />
            <span className="pl-4">Experience</span>
          </a>
           <a
            href="#education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <AiOutlineRead size={20} />
            <span className="pl-4">Education</span>
          </a>
          <a
            href="mailto:your.email@example.com?subject=Contact from Website" // Email link with subject
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={closeNav} // Close the menu when clicked
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineCoffee size={20} />
          </a>
          <a
            href="#experience"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#education"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineRead size={20} />
          </a>
          <a
            href="mailto:your.email@example.com?subject=Contact from Website" // Email link with subject
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Sidenav;