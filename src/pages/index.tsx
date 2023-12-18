import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import NameContent from '@/components/NameContent';
import AboutMe from '@/pages/AboutMe';
import Experiences from '@/components/Experiences';
import RecentProjects from '@/pages/RecentProjects';
import LeaderShip from '@/components/LeaderShip';
import Skills from '@/pages/Skills';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div
        className='w-full flex flex-col justify-start gap-36 h-[638px] bg-black '
        style={{
          background:
            'linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241)) 0% 0% / 1200% 1200%',
        }}>
        <Header />
        <NameContent />
      </div>
      <AboutMe />
      <Experiences />
      <RecentProjects />
      <LeaderShip />
      <Skills />
      <Footer />
    </main>
  );
}
