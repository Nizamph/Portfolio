import { icons } from '@/constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const NameContent = () => {
  return (
    <div className='flex w-full flex-col gap-10 items-center justify-center mt-24 pt-24'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-white text-8xl'>Mohd Shahid Iqbal</h1>
        <p className='text-white'>
          Passionate about changing the world with technology.
        </p>
      </div>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <div className='flex items-center gap-4 justify-center'>
          {icons?.map((icn, i) => (
            <FontAwesomeIcon
              icon={icn}
              key={i}
              color='white'
              size={'3x'}
            />
          ))}
        </div>
        <Link
          href={'AboutMe'}
          className='border-s-white border-[1px] rounded-lg text-white p-3 px-4 hover:text-blue-600 hover:bg-white'>
          More About Me
        </Link>
      </div>
    </div>
  );
};

export default NameContent;
