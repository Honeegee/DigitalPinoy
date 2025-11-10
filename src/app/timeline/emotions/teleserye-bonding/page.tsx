'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  ArrowLeft,
  Calendar,
  MessageSquare,
  Clock,
  Sparkles,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function TeleseryeBondingPage() {
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
        backgroundImage: 'url(/DigitalPinoy/images/emotions.jpg)',
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
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            Teleserye Bonding
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Nationwide Connection: When TV Shows Became Family
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 rounded-full"
          >
            <p className="text-sm text-purple-300 font-semibold">
              2000s-2010s: The Age of Shared Stories
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
                <span className="text-purple-400 font-semibold text-sm">Year 2000</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-purple-400">Teleserye</span> Phenomenon
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Teleseryes weren't just TV shows—they were national conversations, 
                  family bonding moments, and cultural touchstones.
                </p>
                <p>
                  What started as simple soap operas evolved into nationwide emotional experiences. 
                  Filipino families proved that television could unite an entire nation.
                </p>
                <div className="bg-purple-900/20 border-l-4 border-purple-500 rounded p-4 mt-4">
                  <p className="text-purple-300 font-semibold">
                    "From living rooms to offices—teleseryes became our shared emotional journey."
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
                  src="/DigitalPinoy/emotions/teleserye.jpg"
                  alt="Teleserye family bonding and emotional connections"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Teleseryes creating emotional connections across Filipino households.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  7 teleseryes we miss. (n.d.). PEP.ph. https://www.pep.ph/news/local/7-teleseryes-we-miss-adv-con
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teleserye Showcase Section */}
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
              The <span className="text-purple-400">Teleserye</span> Culture
            </h2>
            <p className="text-gray-400">Every episode built connections</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Teleserye Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/emotions/bondtime.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      📺 Family Time
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Filipino telenovela culture: Lazy? (2011, September 29). iStorya Dista. https://www.istoryadista.net/2011/09/filipino-telenovela-culture-lazy.html
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Drama!
              </motion.div>
            </motion.div>

            {/* Teleserye Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Teleserye</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '👨‍👩‍👧‍👦', title: 'Family Bonding', desc: 'Shared viewing experiences' },
                  { icon: '💔', title: 'Emotional Drama', desc: 'Cathartic emotional release' },
                  { icon: '🗣️', title: 'Watercooler Talk', desc: 'Office and school discussions' },
                  { icon: '❤️', title: 'Love Stories', desc: 'Romantic narratives and dreams' },
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

      {/* Teleserye Culture */}
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
              The <span className="text-pink-400">Culture</span> of Connection
            </h2>
            <p className="text-gray-400">Every teleserye built community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Family Viewers',
                emoji: '👨‍👩‍👧‍👦',
                message: 'Family dinner time',
                description: 'Families gathering to watch together.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Office Fans',
                emoji: '💼',
                message: 'Monday morning recap',
                description: 'Colleagues discussing latest episodes.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The School Groups',
                emoji: '🎒',
                message: 'Lunchtime theories',
                description: 'Students sharing predictions and reactions.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Online Communities',
                emoji: '💻',
                message: 'Forum discussions',
                description: 'Online fans sharing thoughts and feelings.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Emotional Fans',
                emoji: '😭',
                message: 'Tears and laughter',
                description: 'Viewers experiencing emotional catharsis.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Cultural Critics',
                emoji: '📝',
                message: 'Social commentary',
                description: 'Analyzing teleserye impact on society.',
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
                  src="/DigitalPinoy/emotions/teleserye3.jpg"
                  alt="Teleserye cultural impact"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Teleseryes shaping Filipino culture and emotional expression.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  5 inspirational Kapamilya teleseryes that have taught us valuable life lessons. (n.d.). ABS-CBN. https://www.abs-cbn.com/articles-news/5-inspirational-kapamilya-teleseryes-that-have-taught-us-valuable-life-lessons-21935
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
                <MessageSquare className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                National <span className="text-pink-400">Connection</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered entertainment became cultural glue. 
                  Filipino families proved that television could create shared emotional experiences.
                </p>
                <p>
                  From family bonding to national conversations, from emotional release to social commentary—teleseryes created new forms of cultural connection.
                </p>
                <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded-lg p-4 mt-4">
                  <p className="text-pink-300 font-semibold italic">
                    "We didn't just watch teleseryes. We lived them. We discussed them. We proved that stories could unite an entire nation."
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
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, teleseryes are remembered as cultural touchstones—the foundation of shared emotional experiences in the Philippines.
              </p>
              <p>
                Teleseryes taught us that <span className="text-purple-400 font-semibold">stories matter</span>. That television can unite families. 
                That Filipino culture thrives through shared narratives.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-purple-300 font-semibold italic">
                  "We didn't just watch teleseryes. We lived them. We discussed them. 
                  We proved that stories could unite an entire nation—one episode at a time."
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
            <Link href="/timeline/emotions">
              <motion.button
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/emotions/friendster-testimonials">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-pink-900/30 border border-pink-500/30 rounded-lg text-pink-300 text-sm hover:bg-pink-900/50 transition-all"
                >
                  ← Previous: Friendster
                </motion.button>
              </Link>
              <Link href="/timeline/emotions/pacquiao-pride">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300 text-sm hover:bg-red-900/50 transition-all"
                >
                  Next: Pacquiao Pride →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
