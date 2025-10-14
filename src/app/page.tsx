'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Zap, Heart, Globe, Cpu, ArrowRight, Users, Star, Map } from 'lucide-react';
import Link from 'next/link';
import { exhibits } from '@/data/exhibits';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString('en-PH', {
        timeZone: 'Asia/Manila',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getExhibitIcon = (category: string) => {
    switch (category) {
      case 'social': return '👥';
      case 'gaming': return '🎮';
      case 'entertainment': return '📺';
      case 'music': return '🎵';
      case 'sports': return '🥊';
      case 'faith': return '⛪';
      default: return '💫';
    }
  };

  const timelineCategories = [
    {
      title: 'Technology',
      subtitle: 'More Than Machines',
      description: 'From cassette tapes to smartphones, discover how technology became part of our barkada.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/20 to-cyan-900/20',
      href: '/timeline/technology',
      years: '2000-2010',
      highlights: ['SMS Revolution', 'Internet Cafés', 'Friendster Era', 'Facebook Migration']
    },
    {
      title: 'Emotions',
      subtitle: 'Affect, Senses, & Feelings',
      description: 'How Filipinos humanized technology with love, laughter, and genuine connections.',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      bgColor: 'from-pink-900/20 to-red-900/20',
      href: '/timeline/emotions',
      years: '2000-2010',
      highlights: ['OPM Hugot Era', 'Teleserye Bonding', 'Text Poetry', 'Pacquiao Pride']
    },
    {
      title: 'Globalization',
      subtitle: 'The World Knocks on Our Doors',
      description: 'We transformed global culture with our humor, language, and Filipino identity.',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/20 to-emerald-900/20',
      href: '/timeline/globalization',
      years: '2000-2010',
      highlights: ['Korean Drama Wave', 'American Idol', 'K-pop Covers', 'Global Fandoms']
    }
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/mainhall.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">

          {/* Digital Clock */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-cyan-400 text-lg mb-8"
          >
            {mounted ? `${currentTime} PHT` : '-- PHT'}
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-white">DIGITAL </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">PINOY</span>
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
              Virtual Museum of Philippine Pop Culture
            </div>
            <div className="text-xl md:text-2xl text-cyan-400 font-semibold">
              2000–2010
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
      </div>

      {/* Timeline Categories Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Explore Our Timeline
              </h2>
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Journey through three interconnected aspects of Filipino digital evolution
            </p>
          </motion.div>

          {/* Timeline Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {timelineCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={category.href}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className={`group relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full p-8`}
                  >
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 mx-auto`}
                    >
                      <category.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 font-medium">
                        {category.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed text-sm mb-6">
                        {category.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {category.highlights.map((highlight, i) => (
                          <div key={i} className="text-xs text-gray-400 bg-black/30 rounded px-2 py-1">
                            {highlight}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 p-3 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-cyan-400 font-semibold text-sm">
                            Explore Timeline
                          </span>
                          <motion.div whileHover={{ x: 5 }} className="text-cyan-400">
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Exhibits Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Map className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Interactive Exhibits
              </h2>
              <Star className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step into immersive recreations of Filipino digital culture
            </p>
          </motion.div>

          {/* Exhibits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibits.map((exhibit, index) => (
              <motion.div
                key={exhibit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={exhibit.path}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 h-full"
                  >
                    {/* Background Gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${exhibit.color}22, ${exhibit.color}11, transparent)`
                      }}
                    />

                    {/* Header */}
                    <div className="relative p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide"
                          style={{ backgroundColor: exhibit.color + 'CC' }}
                        >
                          {exhibit.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400 font-medium">LIVE</span>
                        </div>
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto"
                        style={{
                          background: `linear-gradient(135deg, ${exhibit.color}, ${exhibit.color}DD)`
                        }}
                      >
                        {getExhibitIcon(exhibit.category)}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {exhibit.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium mb-3">
                        {exhibit.subtitle}
                      </p>
                      <p className="text-gray-300 leading-relaxed text-sm mb-6 line-clamp-3">
                        {exhibit.description}
                      </p>

                      {/* CTA */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 p-3 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 font-semibold text-sm">
                            Enter Exhibit
                          </span>
                          <motion.div whileHover={{ x: 5 }} className="text-cyan-400">
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}