'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Zap, Heart, Globe, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TimelinePage() {
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
      subtitle: 'affect, senses, & feelings',
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
        backgroundImage: 'url(/DigitalPinoy/images/ehall.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      {/* Header */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-blue-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Philippine Digital Timeline
              </h1>
              <Clock className="w-8 h-8 text-pink-400" />
            </div>
            <p className="text-xl text-gray-300 mb-8">
              🇵🇭 The decade that shaped Filipino digital culture (2000-2010) 🇵🇭
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto mb-12">
              Explore three interconnected stories of how Filipinos conquered the digital world with
              heart, humor, and community. Each timeline covers the complete 2000-2010 decade.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Categories */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {timelineCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <Link href={category.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`relative overflow-hidden rounded-2xl p-8 h-full bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border border-white/20 shadow-2xl cursor-pointer group`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {category.title}
                        </h2>
                        <span className="text-sm text-gray-400 font-mono">{category.years}</span>
                      </div>

                      <h3 className="text-lg text-gray-300 mb-4 font-semibold">
                        {category.subtitle}
                      </h3>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        {category.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {category.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                        <span>Explore Timeline</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${category.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>


      {/* Bottom Section */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Relive the Digital Revolution
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              From text messaging dominance to social media explosion, witness how the Philippines became
              a digital pioneer in Southeast Asia. Each moment shaped the unique Filipino internet culture we know today.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Explore individual timelines for complete STEEP analysis</span>
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}