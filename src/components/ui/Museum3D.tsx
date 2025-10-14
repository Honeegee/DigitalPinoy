'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// 3D Museum Hall Background
export const Museum3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Museum Floor */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: `
            linear-gradient(180deg, transparent 0%, rgba(30, 30, 30, 0.8) 50%, rgba(20, 20, 20, 0.9) 100%),
            repeating-linear-gradient(
              90deg,
              rgba(100, 100, 100, 0.1) 0px,
              rgba(100, 100, 100, 0.1) 2px,
              transparent 2px,
              transparent 50px
            )
          `,
          transform: `rotateX(75deg) translateZ(-200px)`,
        }}
        animate={{
          transform: `rotateX(75deg) translateZ(-200px) rotateY(${mousePosition.x * 0.1}deg)`,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Museum Ceiling */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2"
        style={{
          background: `
            linear-gradient(0deg, transparent 0%, rgba(40, 40, 50, 0.6) 50%, rgba(30, 30, 40, 0.8) 100%),
            repeating-linear-gradient(
              90deg,
              rgba(80, 80, 100, 0.1) 0px,
              rgba(80, 80, 100, 0.1) 2px,
              transparent 2px,
              transparent 80px
            )
          `,
          transform: `rotateX(-75deg) translateZ(-200px)`,
        }}
        animate={{
          transform: `rotateX(-75deg) translateZ(-200px) rotateY(${mousePosition.x * 0.1}deg)`,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Left Wall */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/3"
        style={{
          background: `
            linear-gradient(90deg, rgba(40, 40, 50, 0.9) 0%, transparent 100%),
            repeating-linear-gradient(
              0deg,
              rgba(60, 60, 80, 0.2) 0px,
              rgba(60, 60, 80, 0.2) 1px,
              transparent 1px,
              transparent 30px
            )
          `,
          transform: `rotateY(30deg) translateZ(-300px)`,
          transformOrigin: 'left center',
        }}
        animate={{
          transform: `rotateY(${30 + mousePosition.x * 0.2}deg) translateZ(-300px)`,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Right Wall */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-1/3"
        style={{
          background: `
            linear-gradient(270deg, rgba(40, 40, 50, 0.9) 0%, transparent 100%),
            repeating-linear-gradient(
              0deg,
              rgba(60, 60, 80, 0.2) 0px,
              rgba(60, 60, 80, 0.2) 1px,
              transparent 1px,
              transparent 30px
            )
          `,
          transform: `rotateY(-30deg) translateZ(-300px)`,
          transformOrigin: 'right center',
        }}
        animate={{
          transform: `rotateY(${-30 + mousePosition.x * 0.2}deg) translateZ(-300px)`,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Museum Columns */}
      {[-200, -100, 0, 100, 200].map((x, index) => (
        <motion.div
          key={index}
          className="absolute top-0 bottom-0 w-8"
          style={{
            left: `calc(50% + ${x}px)`,
            background: `
              linear-gradient(90deg,
                rgba(80, 80, 100, 0.8) 0%,
                rgba(120, 120, 140, 0.9) 50%,
                rgba(80, 80, 100, 0.8) 100%
              )
            `,
            transform: `translateZ(${-400 + index * 50}px)`,
            boxShadow: `
              inset -2px 0 4px rgba(0, 0, 0, 0.3),
              inset 2px 0 4px rgba(255, 255, 255, 0.1)
            `,
          }}
          animate={{
            transform: `translateZ(${-400 + index * 50}px) rotateY(${mousePosition.x * 0.1}deg)`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
        />
      ))}

      {/* Floating Digital Artifacts */}
      {[...Array(12)].map((_, index) => {
        const artifacts = ['📱', '💻', '🎮', '💿', '📺', '📞', '🎵', '📷', '💌', '⭐', '🌐', '📀'];
        return (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-30"
            style={{
              left: `${10 + (index % 4) * 25}%`,
              top: `${20 + Math.floor(index / 4) * 30}%`,
              transform: `translateZ(${-100 - (index % 3) * 100}px)`,
            }}
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 360],
              transform: `translateZ(${-100 - (index % 3) * 100}px) rotateY(${mousePosition.x * 0.3}deg)`,
            }}
            transition={{
              y: { duration: 3 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
              rotateY: { duration: 8 + index * 0.5, repeat: Infinity, ease: 'linear' },
              transform: { type: 'spring', stiffness: 100, damping: 20 },
            }}
          >
            {artifacts[index]}
          </motion.div>
        );
      })}

      {/* Museum Display Cases */}
      {[-150, 0, 150].map((x, index) => (
        <motion.div
          key={index}
          className="absolute bottom-20 w-20 h-20"
          style={{
            left: `calc(50% + ${x}px)`,
            transform: `translateZ(${-200 + index * 30}px)`,
          }}
          animate={{
            transform: `translateZ(${-200 + index * 30}px) rotateY(${mousePosition.x * 0.2}deg)`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {/* Display Case Base */}
          <div
            className="w-full h-full bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg"
            style={{
              boxShadow: `
                0 10px 20px rgba(0, 0, 0, 0.5),
                inset 0 2px 4px rgba(255, 255, 255, 0.2)
              `,
            }}
          />
          {/* Glass Top */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-cyan-500/10 to-cyan-300/20 rounded-lg"
            style={{
              backdropFilter: 'blur(1px)',
              boxShadow: `
                inset 0 0 10px rgba(0, 255, 255, 0.2),
                0 0 20px rgba(0, 255, 255, 0.1)
              `,
            }}
          />
          {/* Holographic Effect */}
          <motion.div
            className="absolute top-2 left-2 right-2 bottom-2 rounded"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
            }}
            animate={{
              background: [
                'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
                'linear-gradient(135deg, transparent, rgba(255, 0, 255, 0.1), transparent)',
                'linear-gradient(225deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
                'linear-gradient(315deg, transparent, rgba(255, 0, 255, 0.1), transparent)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// 3D Depth of Field Effect
export const DepthOfField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative"
      style={{
        filter: 'blur(0px)',
        transform: 'translateZ(0px)',
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

// 3D Parallax Container
export const Parallax3D = ({ children, depth = 0 }: { children: React.ReactNode; depth?: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * depth;
      const y = (e.clientY / window.innerHeight - 0.5) * depth;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [depth]);

  return (
    <motion.div
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};