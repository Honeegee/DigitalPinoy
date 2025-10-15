'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Scale, Shield, Vote, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function PoliticalAnalysisPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Fixed Background with Parallax */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black to-indigo-950/40"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
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
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 60px rgba(168, 85, 247, 0.8)',
                    '0 0 20px rgba(168, 85, 247, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 rounded-3xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center text-7xl"
              >
                ⚖️
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Political
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto px-4"
          >
            How technology influenced political discourse, mobilization, and digital rights
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
      </section>

      {/* Timeline Story Sections */}
      <div className="relative z-10">
        {/* 2000-2010: Text Activism Era */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">📱</div>
                      <div className="text-white text-xl font-bold mb-2">Text Activism (2001)</div>
                      <div className="text-purple-300 text-sm">INSERT: SMS mobilization/GIF</div>
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
                    { icon: '📨', value: '1M+', label: 'SMS Sent' },
                    { icon: '👥', value: '500K+', label: 'People Mobilized' },
                    { icon: '⏰', value: '4hrs', label: 'Response Time' }
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

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Text Activism Era
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Technology such as texts begin influencing political discourse and action as the country navigates two EDSA revolutions, two major coup d'etats, two allegedly corrupt presidents, and one Global War on Terror.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: <Scale className="w-6 h-6" />, title: 'EDSA II Mobilization', desc: 'SMS chains mobilized millions for political change in 2001' },
                      { icon: <Megaphone className="w-6 h-6" />, title: 'Grassroots Campaigns', desc: 'Text-based political organizing bypassed traditional media' },
                      { icon: <Shield className="w-6 h-6" />, title: 'Digital Rights Emergence', desc: 'First discussions about digital privacy and freedom' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 10, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-indigo-500/20 transition-all"
                      >
                        <div className="text-indigo-400 mt-1">{item.icon}</div>
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
        <section className="min-h-screen flex items-center justify center py-20">
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
                  <div className="inline-flex items-center gap-3 bg-indigo-500/20 px-4 py-2 rounded-full mb-6">
                    <span className="text-3xl">📍</span>
                    <span className="text-indigo-300 font-bold">2024 - Present</span>
                  </div>

                  <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Digital Political Discourse
                  </h2>

                  <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                    Faster political discourse and mobilization thru social media, citizen journalists participate in the political struggle, nation now going thru intense now-globally-reported corruption scandal.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: '📱', title: 'Digital Campaigns', desc: 'Facebook and Twitter became primary political platforms' },
                      { icon: '🌐', title: 'Global Activism', desc: 'Filipino activists connected with international movements' },
                      { icon: '🛡️', title: 'Digital Rights', desc: 'Cybercrime law debates and digital freedom advocacy' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: -10, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                        className="flex gap-4 p-4 rounded-xl border border-indigo-500/20 transition-all"
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
                  className="relative aspect-square rounded-3xl overflow-hidden border-4 border-indigo-500/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🌐</div>
                      <div className="text-white text-xl font-bold mb-2">Digital Politics (2024)</div>
                      <div className="text-indigo-300 text-sm">INSERT: Social media campaign/GIF</div>
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
                    { icon: '📊', value: '80%', label: 'Online Campaigns' },
                    { icon: '👥', value: '10M+', label: 'Digital Reach' },
                    { icon: '⚖️', value: '50+', label: 'Digital Laws' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-indigo-900/40 backdrop-blur-md rounded-xl p-4 border border-indigo-500/30 text-center"
                    >
                      <div className="text-3xl mb-1">{stat.icon}</div>
                      <div className="text-indigo-300 font-bold text-lg">{stat.value}</div>
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
              <div className="inline-flex items-center gap-3 bg-violet-500/20 px-4 py-2 rounded-full mb-6">
                <span className="text-3xl">🔮</span>
                <span className="text-violet-300 font-bold">2030 - Future</span>
              </div>

              <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                AI-Enhanced Governance
              </h2>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Political systems will be <span className="text-violet-400 font-bold">transformed by AI</span> and blockchain, creating more transparent and efficient governance.
              </p>

              {/* Future vision grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { emoji: '🤖', title: 'AI Policy Analysis', desc: 'AI systems analyze policy impacts and predict outcomes', color: 'from-violet-500 to-purple-500' },
                  { emoji: '🔗', title: 'Blockchain Voting', desc: 'Secure, transparent digital voting systems prevent fraud', color: 'from-purple-500 to-indigo-500' },
                  { emoji: '🌐', title: 'Global Digital Democracy', desc: 'Cross-border political collaboration and governance', color: 'from-indigo-500 to-violet-500' }
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
                    <div className="relative bg-gray-900/80 backdrop-blur-md border border-violet-500/30 rounded-3xl p-8">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Observable Trend</h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">
                      Text activism → Social media campaigns → AI governance
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      We moved from SMS-based political mobilization to social media activism, heading toward AI-powered governance systems and blockchain-based democratic processes.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-violet-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-violet-400 mb-4">Impact to 2030</h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">
                      Transparent governance; AI policy analysis; Global digital democracy
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      The future promises more transparent political systems through blockchain, AI-powered policy analysis, and global digital democracy platforms that enhance citizen participation while ensuring security and integrity.
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
