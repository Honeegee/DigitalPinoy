'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface FloatingSymbol {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  href: string;
  imagePath?: string; // For when you provide the images
  position: { x: number; y: number }; // Organized positions
}

interface FloatingSymbolsProps {
  symbols: FloatingSymbol[];
  className?: string;
  onSymbolClick?: (symbolId: string) => void;
}

export default function FloatingSymbols({ symbols, className = '', onSymbolClick }: FloatingSymbolsProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative w-full min-h-[300px] ${className}`}>
      {symbols.map((symbol, index) => {
        const IconComponent = symbol.icon;
        return (
          <motion.div
            key={symbol.id}
            className="absolute cursor-pointer group"
            style={{
              left: `${symbol.position.x}%`,
              top: `${symbol.position.y}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              y: 50,
              rotateX: -90,
              rotateY: -90
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              rotateX: 0,
              rotateY: 0
            }}
            transition={{
              delay: index * 0.15,
              duration: 1.5,
              rotateX: { duration: 1, ease: "easeOut" },
              rotateY: { duration: 1, ease: "easeOut" },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
            whileHover={{
              scale: 1.3,
              y: -10,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="relative cursor-pointer"
              onClick={() => onSymbolClick?.(symbol.id)}
            >
              {/* 3D Floating Icon Container - No Square */}
              <motion.div
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                }}
              >
                {/* Icon/Image - No Background */}
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.3,
                  }}
                >
                  {symbol.imagePath ? (
                    // Display the actual image when imagePath is provided - No background
                    <div className="w-40 h-40 transform translate-z-30">
                      <img
                        src={symbol.imagePath}
                        alt={symbol.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    // Current placeholder with icon - Bigger, no background
                    <div className="w-40 h-40 flex items-center justify-center transform translate-z-30">
                      <IconComponent className="w-24 h-24 text-white" />
                    </div>
                  )}


                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Title - Positioned below icon */}
                <motion.h3
                  className="text-white font-bold text-base text-center mt-4 px-3 leading-tight transform translate-z-20"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {symbol.title}
                </motion.h3>

                {/* 3D Shadow Effect */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-black/40 blur-lg rounded-full opacity-0 group-hover:opacity-60"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

            </div>
          </motion.div>
        );
      })}
      
      {/* Enhanced Background floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const top = `${Math.random() * 100}%`;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left,
                top,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
