import React from 'react';

const ExperienceItem = ({ year, title, company, duration, location, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ml-4"> {/* Added margin-left for spacing */}
      <li className="mb-8"> {/* Margin-bottom for spacing between list items */}
        <div className="absolute w-4 h-4 bg-stone-200 rounded-full mt-1.5 -left-2 border-black"/> {/* Timeline circle */}
        <div className="ml-6"> {/* Margin-left for spacing from the timeline */}
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm"> {/* Text styling */}
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">{year}</span> {/* Bold for  memphasis */}
            <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
            <span className="my-1 text-sm font-normal leading-none text-black-400">{company}</span>
            <span className="my-1 text-sm font-normal leading-none text-black-400">{duration}</span>
            <span className="my-1 text-sm font-normal leading-none text-black-400">{location}</span>
          </p>
          <p className="mt-2 text-base text-stone-800">{details}</p> {/* Margin-top for spacing */}
        </div>
      </li>
    </ol>
  );
};

export default ExperienceItem;