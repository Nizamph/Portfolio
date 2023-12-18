import React, { useEffect, useState } from 'react';
import ImageCrousel from './ImageCrousel';
import { crouselImages, crouselImagesType } from '@/constants/constants';

const LeaderShip = () => {
  const [crousels, setCrousels] = useState<crouselImagesType[]>(crouselImages);
  const [crouselVisibility, setCrouselVisibility] = useState<number>(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCrouselVisibility(
        crouselVisibility <= crousels.length - 1
          ? (prevState) => prevState + 1
          : 1
      );
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [crouselVisibility]);
  return (
    <div className='w-full h-[450px] flex flex-col justify-center items-center gap-10 px-28'>
      <h1 className='text-center text-6xl font-light text-black '>
        LeaderShip
      </h1>
      <div className='flex items-center justify-start gap-4 w-full h-full'>
        <p className='text-gray-500 h-full'>
          As a React developer with leadership experience, I bring technical
          expertise, project management skills, and strong communication
          abilities to the table. I have a proven track record of building
          large-scale applications, optimizing code for performance, and
          implementing best practices. Additionally, I have experience leading
          teams and projects, creating and maintaining project plans, managing
          timelines and budgets, and ensuring timely delivery of high-quality
          work. I excel at communicating effectively with team members,
          stakeholders, and clients, both verbally and in writing, and am a
          skilled listener who can provide clear and constructive feedback. I am
          also passionate about mentoring and training other developers to help
          them develop their skills and achieve their goals. With my ability to
          solve complex technical problems and think creatively, I am always
          up-to-date with the latest developments in React and related
          technologies, and am able to innovate and inspire a positive,
          collaborative work environment.
        </p>
        {crouselImages?.map((img) => (
          <div
            key={img.id}
            className={`w-full h-full ${
              Number(img.id) !== crouselVisibility ? 'hidden' : ''
            }`}>
            <ImageCrousel
              id={img.id}
              url={img.url}
              visibility={crouselVisibility}
              crousels={crousels}
              setCrouselVisibility={setCrouselVisibility}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderShip;
