import React from 'react';
import schoolLogo from '../assets/logo.png'; // Adjust the path to your school logo

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Education</h1>
      <div className="flex flex-col items-center mt-8">
        {/* School Logo */}
        <img
          src={schoolLogo}
          alt="School Logo"
          className="w-16 h-auto object-contain mb-4"
        />
        {/* Education Details */}
        <p className="text-center text-gray-700 mt-4">
          <strong>Huron University</strong> <br />
          South Dakota State University, Huron, 2012
        </p>
      </div>
    </div>
  );
};

export default Education;
