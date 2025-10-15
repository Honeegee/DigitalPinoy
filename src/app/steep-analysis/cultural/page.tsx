'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Palette, Music, Film, Heart } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function CulturalAnalysisPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Fixed Background with Parallax */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/40 via-black to-red-950/40"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
          }}
        />
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
                    '0 0 20px rgba(249, 115, 22, 0.5)',
                    '0 0 60px rgba(249, 115, 22, 0.8)',
                    '0 0 20px rgba(249, 115, 22, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-7xl"
              >
                🎨
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              Cultural
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            The cultural transformation through digital media, from OPM to meme culture
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
              className="text-orange-400"
            >
              <div className="text-sm mb-2">Scroll to explore</div>
              <div className="text-4xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Story Sections */}
      <div className="relative z-10">
        {/* 2000-2010: OPM & Teleserye Era */}
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
                  className="relative aspect-video rounded-3xl overflow-hidden border-4 border-orange-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(249, 115, 22, 0.4)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🎵</div>
                      <div className="text-white text-xl font-bold mb-2">OPM Renaissance (2005)</div>
                      <div className="text-orange-300 text-sm">INSERT: Music video/GIF</div>
                    </div>
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {[
                    { icon: '🎵', value: '100+', label: 'OPM Hits' },
                    { icon: '📺', value: '20M+', label: 'Teleserye Viewers' },
                    { icon: '💬', value: '50K+', label: 'Text Votes' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-orange-900/40 backdrop-blur-md rounded-xl p-4 border border-orange-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-orange-300 font-bold text-lg">{stat.value}</div>
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
                  <div className="inline-flex items-center gap-3 bg-orange-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📅</span>
                    <span className="text-orange-300 font-bold">2000-2010</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Cultural Fusion Era
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Koreans begin penetrating the masses, Hollywood maintains its presence, local teleseryes and OPM become equally popular, sharing collective feelings and thoughts.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: <Music className="w-6 h-6" />, title: 'OPM Digital Distribution', desc: 'MP3 downloads and ringtones made music accessible' },
                      { icon: <Film className="w-6 h-6" />, title: 'Teleserye Culture', desc: 'Shared viewing experiences created national conversations' },
                      { icon: <Heart className="w-6 h-6" />, title: 'Text-to-Vote', desc: 'Interactive TV shows engaged millions of Filipinos' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 10, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-red-500/20 transition-all"
                      >
                        <div className="text-red-400 mt-1">{item.icon}</div>
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
              {/* Content Side */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-3 bg-red-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📍</span>
                    <span className="text-red-300 font-bold">2024 - Present</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    Global Cultural Export
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    OPM more dominant over foreign music (though foreign music is still popular), P-pop and OPM both exported globally and receive acclaim, different regions in the PH publish hyper-localized content.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: '📱', title: 'Meme Culture', desc: 'Filipino humor and references went viral globally' },
                      { icon: '🎬', title: 'YouTube Creators', desc: 'Filipino vloggers built international audiences' },
                      { icon: '🌏', title: 'Cultural Export', desc: 'Filipino music, dance, and food trends spread worldwide' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: -10, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-red-500/20 transition-all"
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

              {/* Visual Side */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border-4 border-red-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(249, 115, 22, 0.4)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-orange-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">📺</div>
                      <div className="text-white text-xl font-bold mb-2">Digital Culture (2024)</div>
                      <div className="text-red-300 text-sm">INSERT: Content creation/GIF</div>
                    </div>
                  </div>
                </motion.div>

                {/* Modern stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 mt-6"
                >
                  {[
                    { icon: '📊', value: '10M+', label: 'Content Creators' },
                    { icon: '👀', value: '1B+', label: 'Monthly Views' },
                    { icon: '🌍', value: '100+', label: 'Countries Reached' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-red-900/40 backdrop-blur-md rounded-xl p-4 border border-red-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-red-300 font-bold text-lg">{stat.value}</div>
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
              <div className="inline-flex items-center gap-3 bg-pink-500/20 px-4 py-2 rounded-full mb-6">
                <span className="text-3xl">🔮</span>
                <span className="text-pink-300 font-bold">2030 - Future</span>
              </div>

              <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-pink-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                AI-Curated Cultural Experiences
              </h2>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Cultural expression will be <span className="text-pink-400 font-bold">enhanced by AI</span> and immersive technologies, creating personalized and global cultural experiences.
              </p>

              {/* Future vision grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { emoji: '🤖', title: 'AI Content Creation', desc: 'AI assists in creating culturally relevant music, art, and stories', color: 'from-pink-500 to-orange-500' },
                  { emoji: '🎭', title: 'Immersive Cultural VR', desc: 'Virtual reality experiences preserve and share cultural heritage', color: 'from-orange-500 to-red-500' },
                  { emoji: '🌐', title: 'Global Cultural Fusion', desc: 'AI facilitates cross-cultural collaboration and understanding', color: 'from-red-500 to-pink-500' }
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
                    <div className="relative bg-gray-900/80 backdrop-blur-md border border-pink-500/30 rounded-3xl p-8">
                      <div className="text-7xl mb-4">{item.emoji}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Final Impact Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold text-orange-400 mb-4">Observable Trend</h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">
                      Local media → Digital content → AI-curated experiences
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      We moved from traditional OPM and teleseryes to digital content creation and global cultural export, heading toward AI-powered cultural experiences and immersive heritage preservation.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-4">Impact to 2030</h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">
                      AI cultural creation; Immersive heritage; Global cultural fusion
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      The future promises AI-assisted cultural content creation, immersive virtual reality heritage experiences, and global cultural fusion that preserves Filipino identity while embracing technological innovation.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
