'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { exhibits } from '@/data/exhibits';
import { ArrowRight, Clock, Users } from 'lucide-react';

export default function ExhibitsPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/exhibit.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      {/* Enhanced Header */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(59, 130, 246, 0.1) 20px,
              rgba(59, 130, 246, 0.1) 40px
            )`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Exhibits
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Step into immersive experiences that recreate the golden age of Filipino digital culture.
            From Friendster profiles to internet café gaming sessions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>6 Interactive Exhibits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>2000-2010 Era</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Full Experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each exhibit is a fully immersive recreation of a key moment in Filipino digital history
          </p>
        </motion.div>

        {/* Enhanced Exhibit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={exhibit.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
            >
              <Link href={exhibit.path}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 h-full"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${exhibit.color}22, ${exhibit.color}11, transparent)`
                    }}
                  />

                  {/* Header Section */}
                  <div className="relative p-6 pb-4">
                    {/* Status & Category */}
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
                      {getExhibitEmoji(exhibit.category)}
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

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>Interactive Experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Users className="w-3 h-3" />
                        <span>Historical Context</span>
                      </div>
                    </div>

                    {/* Enhanced CTA */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 p-3 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-semibold text-sm">
                          Enter Exhibit
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-cyan-400"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{ x: [-100, 300] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Experiences Coming Soon
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're continuously expanding the museum with new interactive experiences.
              Stay tuned for more nostalgic journeys into Filipino digital history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Digital Art & Graphics', desc: 'Early Photoshop & Paint creations', icon: '🎨' },
              { title: 'Text Culture & SMS', desc: 'The evolution of Filipino texting', icon: '📱' },
              { title: 'Early YouTube Philippines', desc: 'First viral Filipino videos', icon: '📹' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 border-dashed hover:border-cyan-500/30 transition-all duration-300">
                  {/* Construction overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl" />

                  <div className="relative">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                    <div className="flex items-center justify-center gap-2 text-xs text-amber-400">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                      <span className="font-medium">IN DEVELOPMENT</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter/Updates CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <h3 className="text-white font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Be the first to know when new exhibits go live
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-cyan-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span>Follow Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>Get Notified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function getExhibitEmoji(category: string): string {
  switch (category) {
    case 'social': return '👥';
    case 'gaming': return '🎮';
    case 'entertainment': return '📺';
    case 'music': return '🎵';
    case 'sports': return '🥊';
    case 'faith': return '⛪';
    default: return '💫';
  }
}
