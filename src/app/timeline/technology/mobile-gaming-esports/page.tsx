'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  ArrowLeft,
  Calendar,
  Zap,
  Clock,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function MobileGamingEsportsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/technology.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/50"
          >
            <Gamepad2 className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            Mobile Gaming & eSports
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            From Casual to Pro: When Gaming Became a Career
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 rounded-full"
          >
            <p className="text-sm text-purple-300 font-semibold">
              2018-2025: The Rise of Professional Mobile Gaming
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
              <div className="w-5 h-8 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold text-sm">Year 2018</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-purple-400">Mobile</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Mobile Legends, PUBG Mobile, Call of Duty Mobile—they weren't just games anymore. 
                  They became professional sports with million-dollar tournaments.
                </p>
                <p>
                  What started as casual gaming on smartphones evolved into a legitimate career path. 
                  Filipino gamers became international champions, proving that skill knows no platform.
                </p>
                <div className="bg-purple-900/20 border-l-4 border-purple-500 rounded p-4 mt-4">
                  <p className="text-purple-300 font-semibold">
                    "From jeepney rides to international stages—Filipino gamers made history."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/mobilegames1.jpg"
                  alt="Mobile gaming and eSports"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Filipino gamers competing on the world stage.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Filipino gaming culture. (n.d.). GeekExtreme. https://www.geekextreme.com/filipino-gaming-culture
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gaming Showcase Section */}
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
              The <span className="text-purple-400">Games</span> That Changed Everything
            </h2>
            <p className="text-gray-400">Every game had its champions</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Gaming Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/technology/mobilegames.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🎮 Professional Mobile Gaming
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Five most popular mobile games 2022. (2022). Nenow. https://nenow.in/article/five-most-popular-mobile-games-2022.html
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                eSports!
              </motion.div>
            </motion.div>

            {/* Gaming Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Gaming Revolution</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '👑', title: 'Mobile Legends', desc: 'The Filipino eSports king' },
                  { icon: '🎯', title: 'PUBG Mobile', desc: 'Battle royale phenomenon' },
                  { icon: '🔫', title: 'Call of Duty Mobile', desc: 'Console experience on mobile' },
                  { icon: '🏆', title: 'Tournaments', desc: 'Million-dollar prize pools' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-purple-900/20 border border-purple-500/20 rounded-lg p-3 hover:border-purple-500/40 transition-colors"
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

      {/* Gaming Culture */}
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
              The <span className="text-pink-400">Culture</span> of Competitive Gaming
            </h2>
            <p className="text-gray-400">Every match told a story</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Pro Scene',
                emoji: '🏆',
                message: 'From casual to pro',
                description: 'Filipino teams dominating international tournaments.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'Streaming Culture',
                emoji: '📺',
                message: 'Live on Twitch!',
                description: 'Gamers becoming content creators and influencers.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Grind',
                emoji: '💪',
                message: 'Practice makes perfect',
                description: 'Hours of training to reach professional level.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'Team Dynamics',
                emoji: '👥',
                message: 'Squad goals',
                description: 'Building chemistry and strategy with teammates.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Meta',
                emoji: '🧠',
                message: 'Master the meta',
                description: 'Understanding game mechanics and strategies.',
                color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30'
              },
              {
                title: 'The Community',
                emoji: '🤝',
                message: 'Gaming families',
                description: 'Building communities around favorite games.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-purple-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/mobilegames3.jpg"
                  alt="Gaming community and support"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Building communities and careers through gaming.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Ampverse's Minana eSports secures largest gaming creator Philippines, ChooXTV become brand ambassador & investor. (n.d.). Phil-IT. https://phil-it.org.ph/ampverses-minana-esports-secures-largest-gaming-creator-philippines-chooxtv-become-brand-ambassador-investor
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
                <Trophy className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-semibold text-sm">Career Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Gaming as a <span className="text-pink-400">Career</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered a hobby became a legitimate profession. 
                  Filipino gamers proved that passion could become a sustainable career.
                </p>
                <p>
                  From professional players to streamers, coaches to analysts—the gaming industry created new career paths that didn't exist a decade ago.
                </p>
                <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded-lg p-4 mt-4">
                  <p className="text-pink-300 font-semibold italic">
                    "We didn't just play games. We built careers. We created opportunities. We proved that passion pays."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, mobile gaming is more than entertainment—it's a cultural phenomenon, a career path, and a source of national pride.
              </p>
              <p>
                Mobile gaming taught us that <span className="text-purple-400 font-semibold">passion matters</span>. That skill transcends platforms. 
                That Filipinos can compete and win on the global stage.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-purple-300 font-semibold italic">
                  "We didn't just play games. We built careers. We created communities. 
                  We proved that Filipino gamers are world-class—one victory at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/social-media-dominance">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  ← Previous: Social Media
                </motion.button>
              </Link>
              <Link href="/timeline/technology/content-creation-economy">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-orange-900/30 border border-orange-500/30 rounded-lg text-orange-300 text-sm hover:bg-orange-900/50 transition-all"
                >
                  Next: Content Creation →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
