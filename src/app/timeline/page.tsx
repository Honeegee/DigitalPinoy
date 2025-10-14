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
        backgroundImage: 'url(/images/ehall.jpg)',
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

      {/* STEEP Analysis Overview Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/70 to-black/90">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Building the Pop: STEEP Analysis
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              Predicting Philippine Popular Culture
            </p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Comprehensive analysis across Social, Economic, Political, Cultural, and Environmental dimensions
            </p>
          </motion.div>

          {/* Three Aspects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {timelineCategories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={category.href}>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`relative bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full cursor-pointer group`}
                    >
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {category.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm mb-6">
                        {category.description}
                      </p>

                      {/* STEEP Mini-Preview */}
                      <div className="space-y-2 mb-6">
                        {['Social', 'Economic', 'Political', 'Cultural', 'Environmental'].map((steep, i) => (
                          <div key={steep} className="flex items-center gap-2 text-xs">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                            <span className="text-gray-400">{steep} Analysis</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                          View Full Analysis
                        </span>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Research Framework: Past → Present → Future
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">📅</div>
                <div className="text-cyan-400 font-bold text-lg mb-2">2000-2010</div>
                <p className="text-gray-400 text-sm">The Golden Era that shaped Filipino digital culture</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📍</div>
                <div className="text-purple-400 font-bold text-lg mb-2">Present (2024)</div>
                <p className="text-gray-400 text-sm">Current state and observable patterns</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔮</div>
                <div className="text-pink-400 font-bold text-lg mb-2">Future (2030)</div>
                <p className="text-gray-400 text-sm">Predictions based on persisting trends</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300 text-center text-sm">
                Each timeline page contains detailed STEEP analysis showing how Social, Economic, Political,
                Cultural, and Environmental factors evolved from 2000-2010, their current state, and predicted
                impact toward 2030.
              </p>
            </div>
          </motion.div>

          {/* Research Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              { label: 'STEEP Categories', value: '5', icon: '📊' },
              { label: 'Aspects Analyzed', value: '3', icon: '🎯' },
              { label: 'Time Periods', value: '3', icon: '⏱️' },
              { label: 'Key Events', value: '33', icon: '⭐' },
              { label: 'Predictions', value: '15', icon: '🔮' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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