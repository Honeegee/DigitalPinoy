'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, DollarSign, TrendingUp, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function GlobalizationEconomicPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black">

      {/* Fixed Background with Parallax */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-black to-emerald-950/40"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
          }}
        />
      </div>

      {/* Back Button */}
      <div className="fixed top-20 left-6 z-40">
        <Link href="/timeline/globalization" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 hover:bg-green-500/30 transition-all">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center z-10"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                    '0 0 60px rgba(34, 197, 94, 0.8)',
                    '0 0 20px rgba(34, 197, 94, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-7xl"
              >
                💰
              </motion.div>
              {/* Orbiting particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  }}
                  className="absolute inset-0"
                  style={{
                    transformOrigin: 'center'
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full bg-green-400 absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) translateX(${80}px)`
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              Economic Globalization
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            From piracy to digital work
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-green-400"
            >
              <div className="text-sm mb-2">Scroll to explore</div>
              <div className="text-4xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </section>

      {/* Timeline Story Sections */}
      <div className="relative z-10">

        {/* 2000-2010: International content consumption */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Visual Side */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-video rounded-3xl overflow-hidden border-4 border-green-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  {/* Placeholder for video/gif */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">💰</div>
                      <div className="text-white text-xl font-bold mb-2">Content Consumption (2005)</div>
                      <div className="text-green-300 text-sm">INSERT: Video/GIF of piracy culture</div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className="absolute text-4xl"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 15}%`
                      }}
                    >
                      {['💿', '💸', '🎬', '📀', '🌐'][i]}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {[
                    { icon: '💿', value: 'Piracy', label: 'Rampant' },
                    { icon: '💸', value: 'OFW', label: 'Remittances' },
                    { icon: '🎬', value: 'Hollywood', label: 'Imports' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-green-900/40 backdrop-blur-md rounded-xl p-4 border border-green-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-green-300 font-bold text-lg">{stat.value}</div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Content Side */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-3 bg-green-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📅</span>
                    <span className="text-green-300 font-bold">2000-2010</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    International Content Consumption
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Filipinos consumed global media as <span className="text-green-400 font-bold">economic spectators</span>, not participants.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: <DollarSign className="w-6 h-6" />, title: 'Piracy Culture', desc: 'Bootleg DVDs and downloaded content as primary access to global media' },
                      { icon: <TrendingUp className="w-6 h-6" />, title: 'OFW Remittances', desc: 'Overseas workers sent money home, enabling digital access and consumption' },
                      { icon: <Briefcase className="w-6 h-6" />, title: 'Hollywood Imports', desc: 'Foreign content dominated, Filipinos paid but did not produce' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 10, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-green-500/20 transition-all"
                      >
                        <div className="text-green-400 mt-1">{item.icon}</div>
                        <div>
                          <div className="text-white font-bold mb-1">{item.title}</div>
                          <div className="text-gray-400 text-sm">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Present: 2024 */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Content Side - Left this time */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-3 bg-emerald-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📍</span>
                    <span className="text-emerald-300 font-bold">2024 - Present</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    Global Digital Work
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Filipinos now <span className="text-emerald-400 font-bold">earn globally</span> through digital platforms.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: '💼', title: 'Freelancing', desc: 'Filipino remote workers compete and succeed in global marketplaces' },
                      { icon: '📺', title: 'Streaming Revenue', desc: 'Content creators earn from international audiences through YouTube, TikTok' },
                      { icon: '🛒', title: 'Cross-border E-commerce', desc: 'Digital businesses sell products and services worldwide' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: -10, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-emerald-500/20 transition-all"
                      >
                        <div className="text-4xl">{item.icon}</div>
                        <div>
                          <div className="text-white font-bold mb-1">{item.title}</div>
                          <div className="text-gray-400 text-sm">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Visual Side - Right */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border-4 border-emerald-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  {/* Placeholder for mobile interface */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-green-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">💼</div>
                      <div className="text-white text-xl font-bold mb-2">Digital Work (2024)</div>
                      <div className="text-emerald-300 text-sm">INSERT: Freelancing platforms GIF</div>
                    </div>
                  </div>

                  {/* Icons floating */}
                  {['💼', '📺', '🛒', '💰', '🌐'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                      className="absolute text-5xl"
                      style={{
                        left: `${15 + i * 18}%`,
                        top: `${20 + i * 10}%`
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Modern stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {[
                    { icon: '💼', value: '$1B+', label: 'Freelance Revenue' },
                    { icon: '📺', value: 'Millions', label: 'Content Creators' },
                    { icon: '🛒', value: 'Global', label: 'E-commerce Reach' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-emerald-900/40 backdrop-blur-md rounded-xl p-4 border border-emerald-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-emerald-300 font-bold text-lg">{stat.value}</div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future: 2030 */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
                <span className="text-3xl">🔮</span>
                <span className="text-purple-300 font-bold">2030 - Future</span>
              </div>

              <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Decentralized Global Economy
              </h2>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Work becomes truly <span className="text-purple-400 font-bold">location-independent</span> and borderless.
              </p>

              {/* Future vision grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { emoji: '₿', title: 'Crypto Remittances', desc: 'Blockchain-based instant transfers eliminate traditional banking barriers', color: 'from-purple-500 to-green-500' },
                  { emoji: '🌐', title: 'Metaverse Commerce', desc: 'Virtual economies create new income streams in digital worlds', color: 'from-green-500 to-emerald-500' },
                  { emoji: '🏢', title: 'Location-independent Work', desc: 'Digital nomadism becomes the norm, not the exception', color: 'from-emerald-500 to-purple-500' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-3xl`} />
                    <div className="relative bg-gray-900/80 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8">
                      <div className="text-7xl mb-4">{item.emoji}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Future vision mockup */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl"
                style={{
                  boxShadow: '0 0 80px rgba(168, 85, 247, 0.5)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-green-900 to-emerald-900 flex items-center justify-center">
                  <div className="text-center p-12">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      className="text-9xl mb-6"
                    >
                      ₿
                    </motion.div>
                    <div className="text-white text-2xl font-bold mb-3">Decentralized Economy (2030)</div>
                    <div className="text-purple-300">INSERT: Crypto economy concept video/GIF</div>
                  </div>
                </div>

                {/* Floating future elements */}
                {['₿', '🌐', '🏢', '💰', '🌍', '✨'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, 0],
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.6
                    }}
                    className="absolute text-5xl"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${15 + (i % 2) * 30}%`
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final Impact Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                The Economic Journey
              </h2>
              <p className="text-2xl text-gray-400">
                From passive consumers to active participants—economic globalization transforms opportunity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-green-500/30 rounded-3xl p-10">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Observable Trend</h3>
                  <p className="text-xl text-gray-300 font-semibold mb-4">
                    Consumers → Digital workers → Global entrepreneurs
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We moved from consuming pirated content and relying on remittances to earning through global freelancing, heading toward a decentralized economy powered by crypto and virtual commerce.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-green-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Impact to 2030</h3>
                  <p className="text-xl text-gray-300 font-semibold mb-4">
                    Location-independent income; Blockchain financial inclusion
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    The future promises true economic freedom where location doesn't limit opportunity, blockchain technology provides financial access for all, and virtual economies create unprecedented income streams.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
