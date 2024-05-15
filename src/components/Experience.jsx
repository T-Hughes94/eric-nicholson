import React from 'react';
import ExperienceItem from './ExperienceItem';

// Data array with experience details
const data = [
  {
    year: '2023',
    title: 'Account Executive',
    company: 'EO Johnson Business Technologies',
    duration: 'Current',
    location: 'Duluth, Minnesota, U.S',
    details: 'Develop and implement strategic sales plans to achieve company objectives and enhance market share. Attend industry events and network with professionals to expand business contacts and stay updated on industry trends. Coordinate with cross-functional teams to deliver tailored solutions that meet client specifications. ',
  },
  {
    year: '2022',
    title: 'Acccount Executive',
    company: 'ServiceMaster Restore',
    duration: '1 Year',
    location: 'Duluth, Minnesota, U.S',
    details: 'Coordinated water, fire, and storm damage restoration projects from initial assessment through final inspection. Prepared detailed project proposals and negotiated contracts with clients, securing favorable terms and conditions. Tracked project progress and provided regular updates to clients, maintaining transparency and trust'
  },
  {
    year: '2017', 
    title: 'Account Executive',
    company: 'Shel/Don Business Solutions',
    duration: '3 Years 8 Months',
    location: 'Duluth, Minnesota, U.S',
    details: 'Represented Shel/Don as an exclusive authorized dealer of Oce’ and Canon copiers, scanners, and digital imaging products in the Duluth area. Developed and maintained strong relationships with new and existing clients. Provided ongoing support and resolved any issues related to product performance or service delivery.',
  },
];

const Experience = () => {
  return (
    <div id="experience" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">Experience</h1> {/* Heading */}
      {data.map((item, idx) => (
        <ExperienceItem
          key={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          duration={item.duration}
          location={item.location}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Experience;