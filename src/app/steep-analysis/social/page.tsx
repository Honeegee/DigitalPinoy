'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Users, MessageCircle, Gamepad2, Sparkles, TrendingUp, Heart, Smartphone, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function SocialAnalysisPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-950/60 via-black to-blue-950/60"
          style={{ scale: backgroundScale }}
        >
        </motion.div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 15s linear infinite'
          }} />
        </div>

        {/* Floating Social Icons */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 180, 360],
              scale: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          >
            {i % 5 === 0 ? <MessageCircle size={28} /> :
             i % 5 === 1 ? <Users size={28} /> :
             i % 5 === 2 ? <Heart size={28} /> :
             i % 5 === 3 ? <Gamepad2 size={28} /> :
             <Smartphone size={28} />}
          </motion.div>
        ))}
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
                    '0 0 30px rgba(34, 211, 238, 0.6)',
                    '0 0 80px rgba(34, 211, 238, 0.9)',
                    '0 0 30px rgba(34, 211, 238, 0.6)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl"
              >
                <Users className="w-20 h-20 text-white" />
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
                  style={{ transformOrigin: 'center' }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 rounded-full bg-cyan-400 absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) translateX(${100}px)`
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
            className="text-5xl md:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Social
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
          >
            From internet cafés to TikTok communities — how technology transformed Filipino social interactions
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
              className="text-cyan-400"
            >
              <div className="text-sm mb-2 font-medium">Scroll to explore the social evolution</div>
              <div className="text-4xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
          }} />
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* 2000-2010: Internet Café Era */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Visual Side */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="relative aspect-video rounded-3xl overflow-hidden border-4 border-blue-500/40 shadow-2xl group"
                  style={{
                    boxShadow: '0 0 80px rgba(59, 130, 246, 0.5)'
                  }}
                >
                  {/* Main Visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">💻</div>
                      <div className="text-white text-2xl font-bold mb-2">Internet Café (2005)</div>
                      <div className="text-blue-300 text-sm">The social hub of digital Philippines</div>
                    </div>
                  </div>

                  {/* Floating Interaction Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className="absolute text-4xl"
                      style={{
                        left: `${15 + i * 14}%`,
                        top: `${15 + (i % 2) * 30}%`
                      }}
                    >
                      {['💬', '🎮', '👫', '📝', '⌨️', '🎯'][i]}
                    </motion.div>
                  ))}

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-60" />
                </motion.div>

                {/* Enhanced Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 mt-8"
                >
                  {[
                    { icon: '⏰', value: 'P20/hr', label: 'Internet Cost', color: 'text-blue-400' },
                    { icon: '👥', value: '10-50', label: 'People/Café', color: 'text-cyan-400' },
                    { icon: '🎮', value: '8hrs', label: 'Avg Session', color: 'text-purple-400' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-md rounded-2xl p-5 border border-blue-500/30 text-center group hover:border-cyan-400/50 transition-all"
                    >
                      <div className={`text-4xl mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                      <div className="text-white font-bold text-xl mb-1">{stat.value}</div>
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
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full mb-8 border border-blue-500/30">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-300 font-bold text-lg">2000-2010</span>
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>

                  <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    The Digital Social Revolution
                  </h2>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Filipinos transformed internet cafés into vibrant social hubs, using SMS and platforms like Friendster to create new forms of community and connection.
                  </p>

                  <div className="space-y-6">
                    {[
                      { 
                        icon: <Users className="w-7 h-7" />, 
                        title: 'Internet Cafés as Social Hubs', 
                        desc: 'Friends gathered after school, forming gaming clans and competing in CS and DOTA tournaments',
                        stats: ['10M+ Users', '5K+ Cafés', '₱2B Industry']
                      },
                      { 
                        icon: <MessageCircle className="w-7 h-7" />, 
                        title: 'SMS Culture Revolution', 
                        desc: 'Filipinos became the texting capital of the world, sending meaningful messages daily',
                        stats: ['500M/Day', '95% Penetration', 'New Language']
                      },
                      { 
                        icon: <Gamepad2 className="w-7 h-7" />, 
                        title: 'Gaming Communities', 
                        desc: 'Multiplayer games created new social networks and lasting friendships across the country',
                        stats: ['3M+ Gamers', '24/7 Sessions', 'National Events']
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: 10, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                        className="flex gap-6 p-6 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm transition-all group"
                      >
                        <div className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold text-xl mb-2">{item.title}</div>
                          <div className="text-gray-400 mb-3 leading-relaxed">{item.desc}</div>
                          <div className="flex gap-4">
                            {item.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="text-xs bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full">
                                {stat}
                              </div>
                            ))}
                          </div>
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
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content Side */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-full mb-8 border border-cyan-500/30">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300 font-bold text-lg">2024 - Present</span>
                    <Globe className="w-4 h-4 text-purple-400" />
                  </div>

                  <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Social Media Dominance
                  </h2>

                  <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                    Social media platforms, especially TikTok, dominate Filipino social interactions, transforming how we connect, share, and build communities.
                  </p>

                  <div className="space-y-6">
                    {[
                      { 
                        emoji: '📱', 
                        title: 'TikTok Revolution', 
                        desc: 'Short-form video content became the primary socialization platform for Gen Z',
                        stats: ['85M+ Users', '6Hrs/Day', 'Top 5 Global']
                      },
                      { 
                        emoji: '👀', 
                        title: 'Instant Visual Sharing', 
                        desc: 'From text-based communication to instant image and video sharing across platforms',
                        stats: ['500M+ Posts', 'Real-time', 'Visual First']
                      },
                      { 
                        emoji: '🏠', 
                        title: 'Virtual Hangout Spaces', 
                        desc: 'Online spaces became extensions of physical communities and global connections',
                        stats: ['24/7 Access', 'Global Reach', 'New Norms']
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ x: -10, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                        className="flex gap-6 p-6 rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm transition-all group"
                      >
                        <div className="text-5xl group-hover:scale-110 transition-transform">
                          {item.emoji}
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold text-xl mb-2">{item.title}</div>
                          <div className="text-gray-400 mb-3 leading-relaxed">{item.desc}</div>
                          <div className="flex gap-4">
                            {item.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full">
                                {stat}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border-4 border-cyan-500/40 shadow-2xl group"
                  style={{
                    boxShadow: '0 0 80px rgba(34, 211, 238, 0.5)'
                  }}
                >
                  {/* Main Visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-purple-900 to-blue-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">📱</div>
                      <div className="text-white text-2xl font-bold mb-2">Mobile Social (2024)</div>
                      <div className="text-cyan-300 text-sm">Always connected, always sharing</div>
                    </div>
                  </div>

                  {/* Floating App Icons */}
                  {['💬', '📷', '🎵', '👍', '❤️', '🎭'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -35, 0],
                        rotate: [0, 360],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                      className="absolute text-5xl"
                      style={{
                        left: `${10 + i * 16}%`,
                        top: `${15 + (i % 2) * 25}%`
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-60" />
                </motion.div>

                {/* Modern Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 mt-8"
                >
                  {[
                    { icon: '⏰', value: '6hrs', label: 'Daily Screen Time', color: 'text-cyan-400' },
                    { icon: '📱', value: '150+', label: 'Checks/Day', color: 'text-purple-400' },
                    { icon: '👥', value: '500+', label: 'Online Friends', color: 'text-blue-400' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl p-5 border border-cyan-500/30 text-center group hover:border-purple-400/50 transition-all"
                    >
                      <div className={`text-4xl mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                      <div className="text-white font-bold text-xl mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full mb-8 border border-purple-500/30">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-bold text-lg">2030 - Future</span>
                <Globe className="w-4 h-4 text-pink-400" />
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                AI-Augmented Social Networks
              </h2>

              <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Social interactions will be <span className="text-purple-400 font-bold">enhanced by AI</span> and personalized for deeper, more meaningful connections.
              </p>

              {/* Future Vision Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { emoji: '🤖', title: 'AI Social Assistants', desc: 'AI helps maintain relationships and suggest meaningful interactions', color: 'from-purple-500 to-cyan-500' },
                  { emoji: '🌐', title: 'Metaverse Communities', desc: 'Virtual spaces for immersive social experiences and global connections', color: 'from-cyan-500 to-blue-500' },
                  { emoji: '💭', title: 'Thought Sharing', desc: 'Brain-computer interfaces enable direct emotional communication', color: 'from-blue-500 to-purple-500' }
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

              {/* Final Impact */}
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
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">Observable Trend</h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">
                      Physical spaces → Digital platforms → AI-enhanced networks
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      We moved from gathering in internet cafés to connecting through social media platforms, heading toward AI-powered social networks that enhance human connection through personalized interactions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Impact to 2030</h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">
                      Deeper connections; Global communities; AI social assistance
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      The future promises more meaningful social interactions through AI assistance, global virtual communities, and technologies that bridge emotional distances while preserving authentic human connection.
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
