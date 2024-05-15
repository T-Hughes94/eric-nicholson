import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import profileImg from '../assets/eric-profile.png';

const AboutMe = () => {
  return (
    <div id="about" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8" style={{ color: '#4169E1' }}>About Me</h1>

      {/* Introduction */}
      <img
        src={profileImg}
        alt="Profile Picture"
        className="w-64 h-64 rounded-full mx-auto mb-4 hover:scale-110 ease-in duration-200"
      />
      <p className="text-gray-700 text-xl my-4">
      Welcome to my professional portfolio! I am Eric Nicholson, a seasoned Account Executive with a track record in Business-to-Business (B2B) environments.
      </p>

      {/* Additional Information */}
      <p className="text-gray-600 text-lg my-4">
        With a solid foundation in Sales, Strategic Media Relations, Business Development, Marketing Strategy, and TV News Production, I bring experience and a unique perspective to every project I undertake.
        In my current role as an Account Executive at EO Johnson, I excel in identifying opportunities, crafting effective sales strategies, and executing plans that enhance brand visibility and market penetration.
        Beyond my professional life, I am passionate about sports and enjoy the challenges and teamwork they entail. As a dedicated father, I value the balance between my career and family, constantly striving to set a positive example for my children through hard work, integrity, and commitment.
        By using the links below you can contact me directly via Email, and connect with me on LinkedIn.
        Thank you for stopping by, I look forward to connecting and exploring potential opportunities to collaborate.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-14 mt-4">
        <a href="mailto:enicholson@eojohnson.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className="cursor-pointer hover:scale-110 ease-in duration-150" size={35} />
        </a>
        <a href="https://www.linkedin.com/in/eric-n-121126114/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="cursor-pointer hover:scale-110 ease-in duration-150" size={35} />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;