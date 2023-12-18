import React, { useEffect, useState } from 'react';
import { NavbarContents } from '@/constants/constants';
import { NavbarContentsType } from '@/constants/constants';
import Link from 'next/link';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set isScrolled to true when the scroll position is greater than a certain value (e.g., 100)
      setIsScrolled(scrollPosition > 250);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={` w-full z-50 px-2 h-12 flex gap-7 justify-start ${
        isScrolled ? 'bg-zinc-200 text-black' : 'text-white bg-transparent'
      } items-center fixed`}>
      <div className='mr-11'>Nizam</div>
      {Object.keys(NavbarContents).map((itm) => (
        <>
          <Link href={NavbarContents[itm as keyof NavbarContentsType]}>
            {NavbarContents[itm as keyof NavbarContentsType]}
          </Link>
        </>
      ))}
      <a href='https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit'>
        Resume
      </a>
    </nav>
  );
};

export default Header;
