'use client';

import dynamic from 'next/dynamic';

const Trophy = dynamic(() => import('./Trophy'), { ssr: false });

export default function TrophyWrapper() {
  return (
    <div className="min-h-screen relative">
      <Trophy />
      <div className="absolute top-4 left-0 right-0 text-center z-10">
        <h1 className="text-6xl font-bold text-white animate-pulse">
          🏆 Congratulations! 🏆
        </h1>
      </div>
    </div>
  );
} 