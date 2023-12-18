import React from 'react';

const Experiences = () => {
  return (
    <div className='w-full h-[501px] pt-10'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-6xl font-light text-black'>Experiences</h1>
      </div>
      <div className=' flex items-center  w-full pt-14 justify-center gap-6'>
        <div className='flex flex-col items-center justify-center gap-9 w-full'>
          <img
            src='https://mohd-shahid-iqbal.github.io/myportfolio/static/media/vendify.90d7e8652cac810bca08.png'
            alt='companyImg'
          />
          <div>
            <p className='text-center'>Senior Software Engineer</p>
            <p className='text-center'>May 2022 – Present</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-9 w-full'>
          <img
            src='https://mohd-shahid-iqbal.github.io/myportfolio/static/media/simpana.29df043cb3d1404ca0a0.png'
            alt='companyImg'
          />
          <div>
            <p className='text-center'>Senior Software Engineer</p>
            <p className='text-center'>May 2022 – Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
