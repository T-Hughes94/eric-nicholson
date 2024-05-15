import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import coverPic from '../assets/cover-photo.png';

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover object-left scale-x-[-1]"
        src={coverPic}
        alt="Background image"
      />

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
        <div className="max-w-[700px] text-center">

         {/* Name */}
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Eric Nicholson</h1>

          {/* Type Animation */}
          <h2 className='justify-center flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            <TypeAnimation
              sequence={[
                'Account Executive 📈',
                1000,
                'Father 💪🏼',
                1000,
                'Professional 💼',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Main