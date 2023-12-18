import React from 'react';
import { NavbarContents } from '@/constants/constants';
import { NavbarContentsType } from '@/constants/constants';
const Header = () => {
  return (
    <nav className=' flex gap-7 p-2 m-2 justify-start text-white items-center'>
      <div className='mr-11'>Nizam</div>
      {Object.keys(NavbarContents).map((itm) => (
        <>
          <div>{NavbarContents[itm as keyof NavbarContentsType]}</div>
        </>
      ))}
    </nav>
  );
};

export default Header;
