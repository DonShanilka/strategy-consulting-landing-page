import Navbar from '@/components/Navbar';
import { HeroSection } from '@/pages/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  );
}
