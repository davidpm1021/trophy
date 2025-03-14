'use client';

import dynamic from 'next/dynamic';
import TrophyWrapper from '../components/TrophyWrapper';

const Trophy = dynamic(() => import('../components/Trophy'), { ssr: false });

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <TrophyWrapper />
    </main>
  );
}
