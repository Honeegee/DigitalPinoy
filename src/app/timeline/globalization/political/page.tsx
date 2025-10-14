'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Scale, Users, Flag } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function GlobalizationPoliticalPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black">

      {/* Fixed Background with Parallax */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black to-purple-950/40"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
          }}
        />
      </div>

      {/* Back Button */}
      <div className="fixed top-20 left-6 z-40">
        <Link href="/timeline/globalization" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all">
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
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 60px rgba(168, 85, 247, 0.8)',
                    '0 0 20px rgba(168, 85, 247, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-7xl"
              >
                ⚖️
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
                    className="w-3 h-3 rounded-full bg-purple-400 absolute"
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
            <span className="bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
              Political Globalization
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            From diaspora advocacy to digital movements
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
              className="text-purple-400"
            >
              <div className="text-sm mb-2">Scroll to explore</div>
              <div className="text-4xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </section>

      {/* Timeline Story Sections */}
      <div className="relative z-10">

        {/* 2000-2010: Diaspora advocacy */}
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
                  className="relative aspect-video rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  {/* Placeholder for video/gif */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">⚖️</div>
                      <div className="text-white text-xl font-bold mb-2">Diaspora Advocacy (2005)</div>
                      <div className="text-purple-300 text-sm">INSERT: Video/GIF of OFW activism</div>
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
                      {['🌍', '📱', '🗳️', '✊', '🌐'][i]}
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
                    { icon: '🌍', value: 'OFW', label: 'Digital Advocacy' },
                    { icon: '📱', value: 'Mobile', label: 'Mobilization' },
                    { icon: '🗳️', value: 'Overseas', label: 'Voting' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-purple-900/40 backdrop-blur-md rounded-xl p-4 border border-purple-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-purple-300 font-bold text-lg">{stat.value}</div>
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
                  <div className="inline-flex items-center gap-3 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📅</span>
                    <span className="text-purple-300 font-bold">2000-2010</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
                    Diaspora Advocacy
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Overseas Filipinos used digital tools for <span className="text-purple-400 font-bold">homeland advocacy</span>.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: <Scale className="w-6 h-6" />, title: 'OFW Digital Advocacy', desc: 'Overseas workers organized online to advocate for rights and policy changes' },
                      { icon: <Users className="w-6 h-6" />, title: 'International Mobilization', desc: 'Email and forums enabled coordination across multiple countries' },
                      { icon: <Flag className="w-6 h-6" />, title: 'Overseas Voting', desc: 'Digital platforms facilitated political participation from abroad' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 10, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-purple-500/20 transition-all"
                      >
                        <div className="text-purple-400 mt-1">{item.icon}</div>
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
                  <div className="inline-flex items-center gap-3 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📍</span>
                    <span className="text-purple-300 font-bold">2024 - Present</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
                    Global Political Movements
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Filipinos participate in <span className="text-purple-400 font-bold">international solidarity</span> movements.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: '🌐', title: 'Digital Activism', desc: 'Social media enables rapid mobilization on global issues and causes' },
                      { icon: '📢', title: 'International Solidarity', desc: 'Filipino activists join forces with movements worldwide' },
                      { icon: '🤝', title: 'Cross-border Campaigns', desc: 'Coordinated campaigns transcend national boundaries' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: -10, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-purple-500/20 transition-all"
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
                  className="relative aspect-square rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  {/* Placeholder for mobile interface */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🌐</div>
                      <div className="text-white text-xl font-bold mb-2">Global Movements (2024)</div>
                      <div className="text-purple-300 text-sm">INSERT: Digital activism GIF</div>
                    </div>
                  </div>

                  {/* Icons floating */}
                  {['🌐', '📢', '🤝', '✊', '🌍'].map((emoji, i) => (
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
                    { icon: '🌐', value: 'Global', label: 'Digital Activism' },
                    { icon: '📢', value: 'Worldwide', label: 'Solidarity' },
                    { icon: '🤝', value: 'Cross-border', label: 'Campaigns' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-purple-900/40 backdrop-blur-md rounded-xl p-4 border border-purple-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-purple-300 font-bold text-lg">{stat.value}</div>
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

              <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 bg-clip-text text-transparent">
                Global Digital Governance
              </h2>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                New forms of <span className="text-purple-400 font-bold">global democracy</span> emerge through digital platforms.
              </p>

              {/* Future vision grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { emoji: '🌍', title: 'Digital UN', desc: 'Virtual global governance bodies with direct citizen participation', color: 'from-purple-500 to-purple-500' },
                  { emoji: '🗳️', title: 'Global E-Democracy', desc: 'Blockchain-based voting enables transparent international decision-making', color: 'from-purple-500 to-purple-500' },
                  { emoji: '🤖', title: 'AI Global Mediation', desc: 'AI systems facilitate conflict resolution and international dialogue', color: 'from-purple-500 to-purple-500' }
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-900 to-purple-900 flex items-center justify-center">
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
                      🌍
                    </motion.div>
                    <div className="text-white text-2xl font-bold mb-3">Digital Governance (2030)</div>
                    <div className="text-purple-300">INSERT: Global democracy concept video/GIF</div>
                  </div>
                </div>

                {/* Floating future elements */}
                {['🌍', '🗳️', '🤖', '⚖️', '🌐', '✨'].map((emoji, i) => (
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
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent">
                The Political Journey
              </h2>
              <p className="text-2xl text-gray-400">
                From national advocacy to global governance—political participation transcends borders
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Observable Trend</h3>
                  <p className="text-xl text-gray-300 font-semibold mb-4">
                    National advocacy → Global movements → Digital governance
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We moved from OFW diaspora organizing to participating in international solidarity movements, heading toward new forms of global digital democracy that transcend traditional nation-states.
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Impact to 2030</h3>
                  <p className="text-xl text-gray-300 font-semibold mb-4">
                    International digital rights; Global political participation
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    The future promises digital governance systems that enable direct participation in global decision-making, AI-mediated international dialogue, and blockchain-based transparency in political processes.
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
