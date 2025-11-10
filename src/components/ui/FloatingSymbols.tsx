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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={`relative w-full ${isMobile ? 'flex flex-col gap-12 py-8' : 'min-h-[300px] lg:min-h-[400px]'} ${className}`}>
      {symbols.map((symbol, index) => {
        const IconComponent = symbol.icon;
        return (
          <motion.div
            key={symbol.id}
            className={`cursor-pointer group ${isMobile ? 'flex flex-col items-center justify-center' : 'absolute'}`}
            style={!isMobile ? {
              left: `${symbol.position.x}%`,
              top: `${symbol.position.y}%`,
            } : undefined}
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
              delay: isMobile ? index * 0.15 : index * 0.15,
              duration: 1.5,
              rotateX: { duration: 1, ease: "easeOut" },
              rotateY: { duration: 1, ease: "easeOut" },
              y: isMobile ? undefined : {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
            whileHover={!isMobile ? {
              scale: 1.3,
              y: -10,
              rotateY: 5,
              rotateX: 5,
              transition: { duration: 0.4 }
            } : undefined}
            whileTap={{ scale: isMobile ? 1.1 : 0.95 }}
          >
            <Link href={symbol.href}>
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
                  whileHover={!isMobile ? {
                    rotateY: 5,
                    rotateX: 5,
                  } : undefined}
                >
                  {/* Icon/Image - No Background */}
                  <motion.div
                    className="relative"
                    whileHover={!isMobile ? {
                      scale: 1.3,
                    } : undefined}
                  >
                    {symbol.imagePath ? (
                      // Display the actual image when imagePath is provided - No background
                      <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 transform translate-z-30">
                        <img
                          src={symbol.imagePath}
                          alt={symbol.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      // Current placeholder with icon - Bigger, no background
                      <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center transform translate-z-30">
                        <IconComponent className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
                      </div>
                    )}

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={!isMobile ? { scale: 1 } : undefined}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Title - Positioned below icon */}
                  <motion.h3
                    className="text-white font-bold text-xs md:text-sm lg:text-base text-center mt-2 md:mt-3 lg:mt-4 px-2 md:px-3 leading-tight transform translate-z-20"
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
                    className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-20 lg:w-24 h-2 md:h-3 bg-black/40 blur-lg rounded-full opacity-0 group-hover:opacity-60"
                    whileHover={!isMobile ? { scale: 1.1 } : undefined}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </Link>
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
