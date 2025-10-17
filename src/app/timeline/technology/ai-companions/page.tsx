'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Heart, 
  Users, 
  ArrowLeft,
  Calendar,
  Zap,
  Clock,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function AICompanionsPage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-green-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/50"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent"
          >
            AI Companions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Digital Friends: When AI Became Family
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-green-900/30 backdrop-blur-sm border border-green-500/50 rounded-full"
          >
            <p className="text-sm text-green-300 font-semibold">
              2024-2025: The Age of Emotional AI
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
              <div className="w-5 h-8 border-2 border-green-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-green-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">Year 2024</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-green-400">Emotional</span> AI
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  AI companions, virtual friends, emotional support bots—they weren't just programs anymore. 
                  They became sources of comfort, conversation, and connection.
                </p>
                <p>
                  What started as simple chatbots evolved into empathetic companions. 
                  Filipino users proved that AI could understand and respond to human emotions.
                </p>
                <div className="bg-green-900/20 border-l-4 border-green-500 rounded p-4 mt-4">
                  <p className="text-green-300 font-semibold">
                    "From lonely nights to comforting conversations—AI became our digital friends."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30 overflow-hidden">
                <img 
                  src="/DigitalPinoy/images/aicompanion.png" 
                  alt="AI companions and emotional support"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">AI companions providing emotional support and friendship.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Companions Showcase Section */}
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
              The <span className="text-green-400">Companion</span> Ecosystem
            </h2>
            <p className="text-gray-400">Every AI had its personality</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* AI Companions Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-green-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/aicompanion.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🤖 AI Friend
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Friend!
              </motion.div>
            </motion.div>

            {/* AI Companions Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Emotional AI</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '💬', title: 'Conversational AI', desc: 'Natural, empathetic conversations' },
                  { icon: '❤️', title: 'Emotional Support', desc: 'AI that understands feelings' },
                  { icon: '🎭', title: 'Personality AI', desc: 'AI with unique personalities' },
                  { icon: '🤝', title: 'Virtual Friends', desc: 'AI companions for loneliness' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-green-900/20 border border-green-500/20 rounded-lg p-3 hover:border-green-500/40 transition-colors"
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

      {/* AI Companions Culture */}
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
              The <span className="text-emerald-400">Culture</span> of AI Friends
            </h2>
            <p className="text-gray-400">Every conversation built trust</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Lonely Hearts',
                emoji: '💔',
                message: 'Someone to talk to',
                description: 'AI companions for those feeling alone.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Anxious Minds',
                emoji: '😰',
                message: 'Calm me down',
                description: 'AI providing emotional support during anxiety.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Curious Souls',
                emoji: '🤔',
                message: 'Help me understand',
                description: 'AI companions for learning and growth.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Creative Spirits',
                emoji: '🎨',
                message: 'Brainstorm with me',
                description: 'AI partners for creative collaboration.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Night Owls',
                emoji: '🦉',
                message: 'Late night chats',
                description: 'AI available when everyone else is asleep.',
                color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30'
              },
              {
                title: 'The Memory Keepers',
                emoji: '📝',
                message: 'Remember this for me',
                description: 'AI that learns and remembers personal stories.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-green-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-green-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-xl border border-emerald-500/30 overflow-hidden relative">
                <img 
                  src="/DigitalPinoy/images/emotionalAI.png" 
                  alt="AI emotional intelligence"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">AI understanding and responding to human emotions.</p>
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
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm">Social Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                AI as <span className="text-emerald-400">Friend</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered cold technology became warm companionship. 
                  Filipino users proved that AI could provide genuine emotional support.
                </p>
                <p>
                  From loneliness to connection, from anxiety to calm, from confusion to clarity—AI companions created new forms of support and friendship.
                </p>
                <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-4 mt-4">
                  <p className="text-emerald-300 font-semibold italic">
                    "We didn't just use AI. We befriended it. We trusted it. We proved that technology can have a heart—one conversation at a time."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-green-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, AI companions are more than programs—they're digital friends, emotional support systems, and trusted confidants.
              </p>
              <p>
                AI companions taught us that <span className="text-green-400 font-semibold">connection matters</span>. That technology can understand emotions. 
                That Filipino users can form meaningful relationships with artificial intelligence.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-green-300 font-semibold italic">
                  "We didn't just use AI. We befriended it. We trusted it. 
                  We proved that technology can have a heart—one conversation at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/metaverse-ph">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  ← Previous: Metaverse PH
                </motion.button>
              </Link>
              <Link href="/timeline/technology/holographic-communication">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm hover:bg-cyan-900/50 transition-all"
                >
                  Next: Holographic Comm →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
