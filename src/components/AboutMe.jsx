import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import officialResume from '../assets/Official-resume.pdf';

const AboutMe = () => {
  return (
    <div id="about" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-[#001b5e]">About Me</h1>

      {/* Introduction */}
      <img
        src="https://avatars.githubusercontent.com/u/133562544?v=4"
        alt="Profile Picture"
        className="w-64 h-64 rounded-full mx-auto mb-4 hover:scale-110 ease-in duration-200"
      />
      <p className="text-gray-700 text-xl my-4">
        Hi, I'm Terence Hughes, a passionate developer currently based in New York with a love for creating innovative solutions.
      </p>

      {/* Additional Information */}
      <p className="text-gray-600 text-lg my-4">
        I enjoy building applications that solve real-world problems and exploring new technologies. My experience as a chef in the hospitality industry has taught me valuable leadership skills and how to effectively communicate with team members. I also enjoy nature, spending time with family, and music. You can reach me via email, connect with me on LinkedIn, view my GitHub page, and checkout my resume using the links below.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-14 mt-4">
        <a href="mailto:terencehughes450@gmail.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className="cursor-pointer hover:scale-110 ease-in duration-150" size={35} />
        </a>
        <a href="https://www.linkedin.com/in/terence-hughes-27204128a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="cursor-pointer hover:scale-110 ease-in duration-150" size={35} />
        </a>
        <a href="https://github.com/T-Hughes94" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:scale-110 ease-in duration-150" size={35} />
        </a>
      </div>

      {/* Download Resume Button */}
      <div className="mt-8"> {/* Ensure there's space between the social links and the button */}
        <a
          href={officialResume} // Link to your resume file
          target="_blank" // Open in a new tab
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;