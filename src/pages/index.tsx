import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import NameContent from '@/components/NameContent';
import AboutMe from '@/components/AboutMe';
import Experiences from '@/components/Experiences';
import RecentProjects from '@/components/RecentProjects';
import LeaderShip from '@/components/LeaderShip';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='w-full flex flex-col justify-start gap-36 h-[638px] bg-black p-2'>
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
