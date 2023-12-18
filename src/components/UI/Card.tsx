import React from 'react';
type CardProp = {
  children: JSX.Element;
};
const Card = ({ children }: CardProp) => {
  return (
    <div className='p-6  m-2 shadow-2xl border-gray border-2 rounded-lg w-[550px]'>
      {children}
    </div>
  );
};

export default Card;
