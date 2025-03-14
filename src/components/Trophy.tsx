'use client';

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
const confetti = require('canvas-confetti');

console.log('Trophy component loaded');

function TrophyModel() {
  console.log('Rendering TrophyModel');
  return (
    <group position={[0, -1, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.8, 0.2, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Stem */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Cup */}
      <mesh position={[0, 1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.2, 0.8, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Handles */}
      <group position={[0, 1.3, 0]}>
        {/* Left Handle */}
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
          <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Right Handle */}
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow receiveShadow>
          <torusGeometry args={[0.2, 0.05, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

function Scene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Environment preset="sunset" />
      <group rotation={[0.13, 0.1, 0]}>
        <TrophyModel />
      </group>
      <OrbitControls enableZoom={false} />
    </Suspense>
  );
}

export default function Trophy() {
  console.log('Rendering Trophy component');
  const [showStartButton, setShowStartButton] = useState(true);
  
  const startCelebration = () => {
    console.log('Starting celebration');
    setShowStartButton(false);
    launchConfetti();
  };

  const launchConfetti = () => {
    console.log('Launching confetti');
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        console.log('Confetti animation ended');
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Create confetti on left side
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      // Create confetti on right side
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 250);

    return () => {
      console.log('Cleaning up confetti interval');
      clearInterval(interval);
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-full bg-gradient-to-b from-black to-purple-900 relative"
    >
      <div className="absolute top-4 left-0 right-0 text-center z-10 space-y-4">
        <h1 className="text-6xl font-bold text-white animate-pulse">
          🏆 Congratulations! 🏆
        </h1>
        <h2 className="text-4xl font-bold text-white" style={{ textShadow: '0 0 10px rgba(255,215,0,0.5)' }}>
          David
        </h2>
        {showStartButton && (
          <button
            onClick={startCelebration}
            className="mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Start Celebration! 🎉
          </button>
        )}
      </div>

      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true
        }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
} 