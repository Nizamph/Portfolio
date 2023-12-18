import { crouselImagesType } from '@/constants/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

type ImageCrouselProps = {
  id: string;
  url: string;
  visibility: number;
  crousels: crouselImagesType[];
  setCrouselVisibility: React.Dispatch<React.SetStateAction<number>>;
};

const ImageCrousel = ({
  url,
  visibility,
  id,
  setCrouselVisibility,
  crousels,
}: ImageCrouselProps) => {
  const transitionHandler = (string: string) => {
    setCrouselVisibility((prevState) => {
      if (string === 'next') {
        return prevState <= crousels.length - 1 ? prevState + 1 : 1;
      } else if (string === 'prev') {
        return prevState > 1 ? prevState - 1 : crousels.length - 1;
      }
      return prevState;
    });
  };

  const handleNavigation = (id: string) => {
    setCrouselVisibility(Number(id));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: 'contain',
        }}
        className='relative bg-center w-[500px] max-h-[500px] h-full'>
        <button
          className=' absolute top-24 text-gray-500 p-4 left-5'
          onClick={() => transitionHandler('prev')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className=' absolute top-24 text-gray-500 p-4 right-5'
          onClick={() => transitionHandler('next')}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className='flex justify-center items-center absolute bottom-5 w-full'>
          {crousels?.map((itm, i) => (
            <button
              key={itm.id}
              className={`h-[3px] ${
                i + 1 === visibility ? 'bg-gray-200' : 'bg-gray-400'
              } rounded-f w-10 z-50  mx-2`}
              onClick={() => handleNavigation(itm.id)}></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCrousel;
