'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Camera, 
  TrendingUp, 
  Users, 
  ArrowLeft,
  Calendar,
  Zap,
  Clock,
  Sparkles,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function ContentCreationEconomyPage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-orange-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl shadow-orange-500/50"
          >
            <Camera className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent"
          >
            Content Creation Economy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Everyone's a Creator: When Passion Became Profession
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-orange-900/30 backdrop-blur-sm border border-orange-500/50 rounded-full"
          >
            <p className="text-sm text-orange-300 font-semibold">
              2020-2025: The Rise of Digital Entrepreneurship
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
              <div className="w-5 h-8 border-2 border-orange-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">Year 2020</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-orange-400">Creator</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  YouTube, TikTok, Instagram—they weren't just platforms anymore. 
                  They became launchpads for careers built on creativity and authenticity.
                </p>
                <p>
                  What started as sharing videos for fun evolved into a multi-billion dollar industry. 
                  Filipino creators proved that you could build a career doing what you love.
                </p>
                <div className="bg-orange-900/20 border-l-4 border-orange-500 rounded p-4 mt-4">
                  <p className="text-orange-300 font-semibold">
                    "From bedroom vlogs to brand deals—Filipino creators changed the game."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/creatorRev.jpg"
                  alt="Content creation and digital entrepreneurship"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Filipino creators building careers through digital content.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  TikTok 3rd Annual Awards Philippines. (n.d.). Adobe Magazine. https://www.adobomagazine.com/advertising-awards/tiktok-3rd-annual-awards-philippines
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Creation Showcase Section */}
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
              The <span className="text-orange-400">Content</span> Ecosystem
            </h2>
            <p className="text-gray-400">Every niche had its audience</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Creation Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-orange-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/technology/content.gif')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🎬 Content Creation Studio
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Fail YouTube [GIF]. (n.d.). GIPHY. https://giphy.com/gifs/fail-youtube-lW1KdE0faiQ8g
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Creator!
              </motion.div>
            </motion.div>

            {/* Content Creation Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Creator Economy</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🎥', title: 'YouTube', desc: 'Long-form video platform' },
                  { icon: '📱', title: 'TikTok', desc: 'Short-form video revolution' },
                  { icon: '📸', title: 'Instagram', desc: 'Visual storytelling' },
                  { icon: '💼', title: 'Brand Deals', desc: 'Monetizing influence' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-orange-900/20 border border-orange-500/20 rounded-lg p-3 hover:border-orange-500/40 transition-colors"
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

      {/* Content Creation Culture */}
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
              The <span className="text-red-400">Culture</span> of Creation
            </h2>
            <p className="text-gray-400">Every creator had their journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Vlogging Era',
                emoji: '🎥',
                message: 'A day in my life',
                description: 'Documenting everyday moments turned into careers.',
                color: 'from-orange-500/20 to-red-500/20 border-orange-500/30'
              },
              {
                title: 'The Tutorial Boom',
                emoji: '📚',
                message: 'How to...',
                description: 'Sharing knowledge and skills with global audiences.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Comedy Scene',
                emoji: '😂',
                message: 'Making people laugh',
                description: 'Filipino humor reaching international audiences.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Beauty Community',
                emoji: '💄',
                message: 'GRWM - Get Ready With Me',
                description: 'Beauty and lifestyle content creating trends.',
                color: 'from-pink-500/20 to-purple-500/20 border-pink-500/30'
              },
              {
                title: 'The Food Vloggers',
                emoji: '🍜',
                message: 'Food trip!',
                description: 'Exploring Filipino cuisine and food culture.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Gaming Streamers',
                emoji: '🎮',
                message: 'Live streaming',
                description: 'Turning gaming sessions into entertainment.',
                color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30'
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-orange-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-orange-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/ecommerce.jpg"
                  alt="Filipino content going global"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Filipino creators making global impact.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  12 Filipino influencers you need to hit the follow button on right now. (n.d.). Harper's Bazaar Singapore. https://www.harpersbazaar.com.sg/celebrity/12-filipino-influencers-you-need-to-hit-the-follow-button-on-right-now
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Economic Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Content as <span className="text-red-400">Commerce</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered a hobby became a multi-billion dollar industry. 
                  Filipino creators proved that creativity could be a sustainable business.
                </p>
                <p>
                  From brand partnerships to merchandise, from digital products to live events—the creator economy created new revenue streams that empowered Filipino talent.
                </p>
                <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4 mt-4">
                  <p className="text-red-300 font-semibold italic">
                    "We didn't just create content. We built businesses. We empowered communities. We proved that Filipino creativity has global value."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-orange-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Camera className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, content creation is more than entertainment—it's a legitimate career path, a cultural force, and a source of national pride.
              </p>
              <p>
                Content creation taught us that <span className="text-orange-400 font-semibold">authenticity matters</span>. That creativity has value. 
                That Filipino talent can build global audiences and sustainable careers.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-orange-300 font-semibold italic">
                  "We didn't just create content. We built movements. We empowered voices. 
                  We proved that Filipino creativity can change the world—one video at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-orange-900/30 border border-orange-500/30 rounded-lg text-orange-300 text-sm hover:bg-orange-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/mobile-gaming-esports">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  ← Previous: Mobile Gaming
                </motion.button>
              </Link>
              <Link href="/timeline/technology/ai-integration">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  Next: AI Integration →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
