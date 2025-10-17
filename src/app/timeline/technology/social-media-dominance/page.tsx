'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  ArrowLeft,
  Calendar,
  Zap,
  Clock,
  Sparkles,
  Share2
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function SocialMediaDominancePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-blue-950 via-black to-black"></div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/grid-pattern.png')] opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-blue-500/50"
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Social Media Dominance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            The Algorithm Age: When Likes Became Currency
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-blue-900/30 backdrop-blur-sm border border-blue-500/50 rounded-full"
          >
            <p className="text-sm text-blue-300 font-semibold">
              2015-2025: The Age of Digital Influence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12"
          >
            <p className="text-gray-500 text-sm mb-3">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-5 h-8 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section 1 */}
      <section className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Year 2015</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-blue-400">Algorithm</span> Takes Over
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Facebook, Instagram, Twitter—they weren't just platforms anymore. 
                  They became algorithmic ecosystems that shaped what we see, think, and feel.
                </p>
                <p>
                  The timeline became curated. The feed became personalized. 
                  Every like, share, and comment became data points in a massive digital experiment.
                </p>
                <div className="bg-blue-900/20 border-l-4 border-blue-500 rounded p-4 mt-4">
                  <p className="text-blue-300 font-semibold">
                    "The algorithm knew you better than you knew yourself."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30 overflow-hidden">
                <img 
                  src="/DigitalPinoy/images/social.png" 
                  alt="Social media algorithms"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Algorithms shaping our digital experiences and perceptions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Showcase Section */}
      <section className="relative z-10 py-16 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              The <span className="text-blue-400">Platform</span> Wars
            </h2>
            <p className="text-gray-400">Every platform had its purpose</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Social Media Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/social.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      📱 Social Media Ecosystem
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Algorithm!
              </motion.div>
            </motion.div>

            {/* Platform Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Social Landscape</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '📘', title: 'Facebook', desc: 'Family & friends network' },
                  { icon: '📷', title: 'Instagram', desc: 'Visual storytelling' },
                  { icon: '🐦', title: 'Twitter', desc: 'Real-time conversations' },
                  { icon: '🎵', title: 'TikTok', desc: 'Short-form video revolution' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-3 hover:border-blue-500/40 transition-colors"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Culture */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              The <span className="text-cyan-400">Culture</span> of Engagement
            </h2>
            <p className="text-gray-400">Every interaction had value</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Like Economy',
                emoji: '❤️',
                message: 'Likes = Validation',
                description: 'The dopamine hit of social validation through likes and reactions.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The FYP Effect',
                emoji: '📈',
                message: 'Going viral!',
                description: 'The dream of appearing on everyone\'s For You Page.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Story Culture',
                emoji: '📖',
                message: '24-hour stories',
                description: 'Ephemeral content that disappears, creating urgency.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Hashtag Game',
                emoji: '#️⃣',
                message: '#Trending',
                description: 'Mastering the art of hashtags for maximum reach.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Algorithm Dance',
                emoji: '💃',
                message: 'Play the algorithm',
                description: 'Learning what content the algorithm prefers.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Cancel Culture',
                emoji: '🚫',
                message: 'Accountability online',
                description: 'The power of collective voice in calling out issues.',
                color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`bg-gradient-to-br ${story.color} backdrop-blur-sm rounded-xl border p-5 hover:shadow-xl transition-all`}
              >
                <div className="text-3xl mb-3">{story.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-blue-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 overflow-hidden relative">
                <img 
                  src="/DigitalPinoy/images/mentalhealth.png" 
                  alt="Social media impact on mental health"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">The double-edged sword of social media influence.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">Social Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-cyan-400">Double-Edged</span> Sword
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Social media connected us like never before, but it also brought new challenges. 
                  Mental health awareness, digital wellness, and online safety became crucial conversations.
                </p>
                <p>
                  From cancel culture to digital activism, from influencer marketing to mental health awareness—social media became both a tool for good and a source of stress.
                </p>
                <div className="bg-cyan-500/10 border-l-4 border-cyan-500 rounded-lg p-4 mt-4">
                  <p className="text-cyan-300 font-semibold italic">
                    "We gained global connections but lost some local ones. We found our voices but sometimes lost our peace."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-blue-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, social media is woven into the fabric of our daily lives. 
                It's where we connect, learn, work, and create.
              </p>
              <p>
                Social media taught us that <span className="text-blue-400 font-semibold">digital influence matters</span>. That algorithms shape reality. 
                That our voices can reach millions, but our peace can be fragile.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-blue-300 font-semibold italic">
                  "We didn't just share updates. We built communities. We started movements. 
                  We learned to navigate the algorithm—one post, one like, one share at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative z-10 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/timeline/technology">
              <motion.button
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/yahoo-messenger">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm hover:bg-yellow-900/50 transition-all"
                >
                  ← Previous: Yahoo Messenger
                </motion.button>
              </Link>
              <Link href="/timeline/technology/mobile-gaming-esports">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  Next: Mobile Gaming →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
