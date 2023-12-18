import React from 'react';
// const Pic =
//   require('../utils/images/259557375_4472449316195996_7930355438049880717_n.png').default;

const AboutMe = () => {
  return (
    <div className='w-full  h-[502px] flex items-center justify-evenly bg-slate-100'>
      <img
        src='https://mohd-shahid-iqbal.github.io/myportfolio/static/media/shahid.c9f7e04d7825dd13872b.png'
        alt='image'
        className='object-contain  w-[375px]  rounded-full'
      />
      <div className=' flex flex-col  '>
        <h1 className='text-center text-6xl mb-10 font-light '>About Me</h1>
        <div className=' flex flex-col gap-4 justify-start'>
          <p className='max-w-[620px] text-xl font-thin  text-center text-gray-950'>
            My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia
            hamdard University at New Delhi with a degree in Masters of Computer
            Application . I'm most passionate about giving back to the
            community, and my goal is to pursue this passion within the field of
            software engineering. In my free time I like working on open source
            projects.
          </p>
          <div className='w-full flex items-center justify-center'>
            <button className='p-3 px-5  rounded-md border-black border-[1px] hover:bg-black hover:text-white '>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
