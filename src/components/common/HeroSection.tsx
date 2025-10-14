'use client';

import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Calendar, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MatrixRain, GlitchText, RetroGrid, FloatingIcons, ScanLines, NeonText, PixelBorder } from '../ui/DigitalEffects';
import { Museum3D, Parallax3D } from '../ui/Museum3D';

export default function HeroSection() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Main Hall Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/DigitalPinoy/images/mainhall.jpg)' }}
      />

      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Very Subtle 3D Effects - Only for Depth */}
      <div className="absolute inset-0 opacity-20">
        <Parallax3D depth={3}>
          <ScanLines />
        </Parallax3D>
      </div>

      {/* Minimal Digital Accents */}
      <div className="absolute inset-0 opacity-10">
        <Parallax3D depth={2}>
          <FloatingIcons />
        </Parallax3D>
      </div>

      {/* Subtle Gradient for Focus */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <Parallax3D depth={-5}>
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Digital Clock */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-cyan-400 text-lg mb-8"
        >
          {currentTime.toLocaleString('en-PH', {
            timeZone: 'Asia/Manila',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })} PHT
        </motion.div>

        {/* Main Title - Clean and Elegant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl mb-4 font-bold text-white">
            DIGITAL
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            PINOY
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="text-2xl md:text-3xl mb-4 text-gray-200">
            Virtual Museum of Philippine Digital Culture
          </div>
          <div className="text-xl md:text-2xl text-cyan-400 font-semibold">
            2000–2010
          </div>
        </motion.div>

        {/* Clean Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto p-8 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Step into our digital time machine and relive the decade that shaped Filipino digital identity.
              From Friendster profiles to internet café gaming, from text messaging culture to OPM hugot –
              experience the birth of our digital barkada.
            </p>
          </div>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link href="/exhibits">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <Star className="w-5 h-5" />
                <span>ENTER MUSEUM</span>
              </div>
            </motion.button>
          </Link>

          <Link href="/timeline">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>TIMELINE 2000-2010</span>
              </div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { label: 'DIGITAL ARTIFACTS', value: '50+' },
            { label: 'YEARS COVERED', value: '11' },
            { label: 'MEMORIES PRESERVED', value: '∞' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-black/50 rounded-lg border border-cyan-400/30"
            >
              <div className="text-2xl md:text-3xl mb-2 font-bold text-cyan-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </Parallax3D>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-warm-sand rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-warm-sand rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}