'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Image as ImageIcon, Calendar, Sparkles } from 'lucide-react';

const galleryCollections = [
  {
    id: 'early-digital',
    title: 'Early 2000s Memories',
    years: '2000-2005',
    description: 'Friendster testimonials, computer shop hangouts, burned CDs with marker labels, and dramatic edited photos. The era of glitter graphics and "add me sa FS!"',
    color: 'from-green-500 to-emerald-600',
    icon: '💾',
    count: '50+',
    highlights: ['Friendster Profiles', 'Computer Shop Hangouts', 'Burned CDs', 'Text Messages'],
    image: '/DigitalPinoy/images/gallery/early-era.jpg'
  },
  {
    id: 'golden-age',
    title: 'Late 2000s Vibes',
    years: '2006-2010',
    description: 'Multiply photo albums, YM away messages as poetry, colored phone faceplates, and DVD marathons. When your profile song defined your personality.',
    color: 'from-yellow-500 to-orange-600',
    icon: '✨',
    count: '75+',
    highlights: ['Multiply Albums', 'YM Away Messages', 'Colored Phones', 'DVD Collections'],
    image: '/DigitalPinoy/images/gallery/golden-era.jpg'
  },
  {
    id: 'smartphone-era',
    title: 'Early 2010s Feels',
    years: '2011-2015',
    description: 'Instagram filters on everything, Facebook timeline drama, selfie stick everywhere, and "DDS" (duck face selfies). The birth of #OOTD culture.',
    color: 'from-blue-500 to-cyan-600',
    icon: '📱',
    count: '60+',
    highlights: ['Instagram Filters', 'Selfie Sticks', '#AlDub', 'Facebook Drama'],
    image: '/DigitalPinoy/images/gallery/smartphone-era.jpg'
  },
  {
    id: 'modern-digital',
    title: 'Recent Years',
    years: '2016-2024',
    description: 'TikTok dance challenges, everyone is a content creator, Zoom backgrounds, and Ring Light setups. The era of "link in bio" and viral moments.',
    color: 'from-pink-500 to-purple-600',
    icon: '🚀',
    count: '40+',
    highlights: ['TikTok Trends', 'Content Creators', 'Zoom Life', 'Viral Moments'],
    image: '/DigitalPinoy/images/gallery/modern-era.jpg'
  }
];

export default function GalleryPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/gallery.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
              >
                <ImageIcon className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Gallery
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-light"
            >
              Relive the moments that defined our generation
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              From Friendster testimonials to TikTok trends, explore photos and memories that bring back the feels.
              Remember when your YM away message was deeper than your thesis? We do too.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">4 Collections</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">225+ Images</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 font-medium">25 Years</span>
            </div>
          </motion.div>
        </div>

        {/* Collections Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore by Era
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each collection captures the unique digital moments and cultural trends of its time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
              >
                <Link href={`/gallery/${collection.id}`}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 h-full shadow-2xl"
                  >
                    {/* Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <div className={`w-full h-full bg-gradient-to-br ${collection.color}`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${collection.color} flex items-center justify-center text-3xl shadow-lg`}
                            >
                              {collection.icon}
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                {collection.title}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-400 mt-1">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-medium">{collection.years}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${collection.color} bg-opacity-20 border border-white/20`}>
                          <span className="text-white font-bold text-sm">{collection.count} Photos</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 text-base">
                        {collection.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          Featured Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {collection.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 text-xs font-medium border border-white/20"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${collection.color} p-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold text-lg">
                            Explore Collection
                          </span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="text-white"
                          >
                            <ArrowRight className="w-6 h-6" />
                          </motion.div>
                        </div>

                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: [-200, 400] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                      </motion.div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
              <h3 className="text-white text-2xl font-bold mb-3">
                Contribute Your Memories
              </h3>
              <p className="text-gray-300 mb-6">
                Have nostalgic photos from the 2000s-2010s? Share them with the community!
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl text-white font-bold transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                Submit Your Photos
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
