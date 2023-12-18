import React from 'react';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div className='w-full bg-gray-100 h-[222px] flex flex-col gap-4 p-2 px-5'>
      <h1 className='text-center text-6xl font-light text-black  pt-4'>
        Get In Touch
      </h1>
      <div className='text-center text-slate-500'>
        I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me
        at, khansaif59@gmail.com.
      </div>
      <div className='flex w-full items-center justify-center gap-2 '>
        <FontAwesomeIcon icon={faDev} />
        <span>with</span>
        <FontAwesomeIcon icon={faHeart} />
        <span>Using Next.js</span>
      </div>
    </div>
  );
};

export default Footer;
