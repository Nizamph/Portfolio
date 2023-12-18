import React from 'react';

const NameContent = () => {
  return (
    <div className='flex w-full flex-col gap-10 items-center justify-center'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-white'>Mohd Shahid Iqbal</h1>
        <p className='text-white'>
          Passionate about changing the world with technology.
        </p>
      </div>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <div className='flex items-center gap-4 justify-center'>
          <div className='w-10 h-10 bg-white'></div>
          <div className='w-10 h-10 bg-white'></div>
          <div className='w-10 h-10 bg-white'></div>
          <div className='w-10 h-10 bg-white'></div>
          <div className='w-10 h-10 bg-white'></div>
        </div>
        <button className='border-s-white bg-black text-white p-4'>
          More About Me
        </button>
      </div>
    </div>
  );
};

export default NameContent;
