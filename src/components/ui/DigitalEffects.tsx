'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Matrix Rain Effect
export const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; x: number; y: number; speed: number }>>([]);

  useEffect(() => {
    const createDrops = () => {
      const newDrops = [];
      for (let i = 0; i < 50; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * -100,
          speed: Math.random() * 3 + 1
        });
      }
      setDrops(newDrops);
    };

    createDrops();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ x: `${drop.x}%`, y: `${drop.y}%` }}
          animate={{ y: '110%' }}
          transition={{
            duration: 10 / drop.speed,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5
          }}
          className="absolute text-green-400 font-mono text-xs opacity-60"
          style={{ left: `${drop.x}%` }}
        >
          01010101
        </motion.div>
      ))}
    </div>
  );
};

// Glitch Text Effect
export const GlitchText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        textShadow: [
          '2px 0 #ff0000, -2px 0 #00ffff',
          '3px 0 #ff0000, -3px 0 #00ffff',
          '2px 0 #ff0000, -2px 0 #00ffff',
          '1px 0 #ff0000, -1px 0 #00ffff',
          '2px 0 #ff0000, -2px 0 #00ffff'
        ]
      }}
      transition={{
        duration: 0.1,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
    >
      {children}
    </motion.div>
  );
};

// Retro Grid Background
export const RetroGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="cyan"
              strokeWidth="0.5"
              opacity="0.5"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="cyan" stopOpacity="0.8" />
            <stop offset="100%" stopColor="magenta" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#gridGradient)" />
      </svg>
    </div>
  );
};

// Floating Icons (2000s era)
export const FloatingIcons = () => {
  const icons = ['📱', '💻', '📺', '🎮', '💿', '📞', '🎵', '📷', '💌', '⭐'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0
          }}
          animate={{
            y: [null, '-20px', '20px'],
            scale: [0, 1, 0.8, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.5
          }}
          className="absolute text-2xl opacity-30"
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

// Scan Lines Effect
export const ScanLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 2px,
            rgba(0, 255, 255, 0.03) 4px
          )`
        }}
        animate={{
          backgroundPosition: ['0px 0px', '0px 4px']
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
};

// Pixel Border
export const PixelBorder = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px]"
        style={{
          clipPath: `polygon(
            0 0, 8px 0, 8px 8px, calc(100% - 8px) 8px, calc(100% - 8px) 0, 100% 0,
            100% 8px, 100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px),
            calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px),
            0 8px, 8px 8px, 8px 0
          )`
        }}
      />
      <div className="relative bg-black h-full">
        {children}
      </div>
    </div>
  );
};

// Neon Glow Text
export const NeonText = ({ children, color = 'cyan', className = '' }: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) => {
  const colorMap = {
    cyan: 'text-cyan-400',
    pink: 'text-pink-400',
    purple: 'text-purple-400',
    green: 'text-green-400'
  };

  return (
    <motion.div
      className={`${colorMap[color as keyof typeof colorMap]} font-bold ${className}`}
      style={{
        textShadow: `
          0 0 5px currentColor,
          0 0 10px currentColor,
          0 0 15px currentColor,
          0 0 20px currentColor
        `
      }}
      animate={{
        textShadow: [
          `0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor`,
          `0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor`,
          `0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};