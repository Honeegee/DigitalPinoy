'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, 
  Users, 
  ArrowLeft,
  Calendar,
  MessageSquare,
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function FriendsterTestimonialsPage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-pink-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-2xl shadow-pink-500/50"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-red-400 to-pink-500 bg-clip-text text-transparent"
          >
            Friendster Testimonials
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Digital Love Letters: When Profiles Became Poetry
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-pink-900/30 backdrop-blur-sm border border-pink-500/50 rounded-full"
          >
            <p className="text-sm text-pink-300 font-semibold">
              2003-2008: The Age of Digital Romance
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
              <div className="w-5 h-8 border-2 border-pink-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-pink-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-semibold text-sm">Year 2003</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-pink-400">Testimonial</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Friendster testimonials weren't just comments—they were digital love letters, 
                  friendship declarations, and public displays of affection.
                </p>
                <p>
                  What started as simple profile comments evolved into elaborate poetic expressions. 
                  Filipino users proved that digital spaces could host genuine emotional connections.
                </p>
                <div className="bg-pink-900/20 border-l-4 border-pink-500 rounded p-4 mt-4">
                  <p className="text-pink-300 font-semibold">
                    "From simple greetings to heartfelt messages—Friendster testimonials became our digital diaries."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-xl border border-pink-500/30 overflow-hidden">
                <img 
                  src="/DigitalPinoy/images/friendster.png" 
                  alt="Friendster testimonials and digital romance"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Friendster profiles filled with heartfelt testimonials and messages.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Showcase Section */}
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
              The <span className="text-pink-400">Testimonial</span> Culture
            </h2>
            <p className="text-gray-400">Every message told a story</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Testimonial Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-2xl border border-pink-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-pink-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/friendster.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      💌 Digital Love Letters
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Love!
              </motion.div>
            </motion.div>

            {/* Testimonial Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Testimonials</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '💝', title: 'Love Letters', desc: 'Romantic expressions and declarations' },
                  { icon: '🤝', title: 'Friendship', desc: 'Public appreciation for friends' },
                  { icon: '📝', title: 'Poetry', desc: 'Creative writing and verses' },
                  { icon: '🎭', title: 'Inside Jokes', desc: 'Shared memories and humor' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-pink-900/20 border border-pink-500/20 rounded-lg p-3 hover:border-pink-500/40 transition-colors"
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

      {/* Testimonial Culture */}
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
              The <span className="text-red-400">Culture</span> of Connection
            </h2>
            <p className="text-gray-400">Every testimonial built relationships</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Romantics',
                emoji: '💕',
                message: 'You complete me',
                description: 'Love declarations that made hearts flutter.',
                color: 'from-pink-500/20 to-red-500/20 border-pink-500/30'
              },
              {
                title: 'The Best Friends',
                emoji: '👯‍♀️',
                message: 'Best friends forever',
                description: 'Friendship testimonials that strengthened bonds.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Poets',
                emoji: '📝',
                message: 'Poetry in motion',
                description: 'Creative writers expressing through verses.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Jokers',
                emoji: '😂',
                message: 'Remember when...',
                description: 'Inside jokes and shared memories.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Supporters',
                emoji: '🤗',
                message: 'I believe in you',
                description: 'Encouraging messages during tough times.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Admirers',
                emoji: '🌟',
                message: 'You inspire me',
                description: 'Appreciation for talents and achievements.',
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-pink-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-pink-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-xl border border-red-500/30 overflow-hidden relative">
                <img 
                  src="/DigitalPinoy/images/friendsterBackground.gif" 
                  alt="Friendster emotional connections"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Friendster created lasting emotional connections and memories.</p>
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
                <MessageSquare className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Emotional Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Digital <span className="text-red-400">Emotions</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered impersonal technology became deeply personal. 
                  Filipino users proved that digital spaces could host genuine emotional expression.
                </p>
                <p>
                  From love to friendship, from support to admiration—Friendster testimonials created new forms of emotional connection and digital intimacy.
                </p>
                <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4 mt-4">
                  <p className="text-red-300 font-semibold italic">
                    "We didn't just write testimonials. We expressed love. We strengthened friendships. We proved that digital words could carry real emotions."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-pink-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, Friendster testimonials are remembered as the first digital love letters—the foundation of online emotional expression in the Philippines.
              </p>
              <p>
                Friendster testimonials taught us that <span className="text-pink-400 font-semibold">digital words matter</span>. That online spaces can host genuine emotions. 
                That Filipino users can build meaningful connections through technology.
              </p>
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-pink-300 font-semibold italic">
                  "We didn't just write testimonials. We expressed love. We strengthened friendships. 
                  We proved that digital words could carry real emotions—one message at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-pink-900/30 border border-pink-500/30 rounded-lg text-pink-300 text-sm hover:bg-pink-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <div className="px-5 py-2 bg-gray-900/30 border border-gray-500/30 rounded-lg text-gray-400 text-sm">
                First Exhibit
              </div>
              <Link href="/timeline/emotions/teleserye-bonding">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  Next: Teleserye Bonding →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
