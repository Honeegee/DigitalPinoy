'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Video, 
  Users, 
  ArrowLeft,
  Calendar,
  Zap,
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function HolographicCommunicationPage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-cyan-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50"
          >
            <Video className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent"
          >
            Holographic Communication
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            When Distance Disappeared: The Future of Connection
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/50 rounded-full"
          >
            <p className="text-sm text-cyan-300 font-semibold">
              2025: The Age of Immersive Communication
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
              <div className="w-5 h-8 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-cyan-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">Year 2025</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-cyan-400">Holographic</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Holographic calls, 3D projections, immersive meetings—they weren't just video calls anymore. 
                  They became lifelike experiences that made distance irrelevant.
                </p>
                <p>
                  What started as science fiction evolved into everyday communication. 
                  Filipino families proved that technology could bridge physical separation like never before.
                </p>
                <div className="bg-cyan-900/20 border-l-4 border-cyan-500 rounded p-4 mt-4">
                  <p className="text-cyan-300 font-semibold">
                    "From video calls to holographic presence—Filipino families felt closer than ever."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-500/30 overflow-hidden">
                <img 
                  src="/DigitalPinoy/images/hologram.png" 
                  alt="Holographic communication technology"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Holographic technology bringing people together across distances.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Holographic Showcase Section */}
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
              The <span className="text-cyan-400">Holographic</span> Ecosystem
            </h2>
            <p className="text-gray-400">Every call felt like presence</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Holographic Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-cyan-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/hologram.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🌐 Holographic Call
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-cyan-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                3D!
              </motion.div>
            </motion.div>

            {/* Holographic Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Immersive Revolution</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '👥', title: '3D Holograms', desc: 'Lifelike 3D projections' },
                  { icon: '🏠', title: 'Virtual Presence', desc: 'Feeling like you are there' },
                  { icon: '💼', title: 'Business Meetings', desc: 'Immersive corporate communication' },
                  { icon: '👨‍👩‍👧‍👦', title: 'Family Gatherings', desc: 'Virtual family reunions' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-cyan-900/20 border border-cyan-500/20 rounded-lg p-3 hover:border-cyan-500/40 transition-colors"
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

      {/* Holographic Culture */}
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
              The <span className="text-blue-400">Culture</span> of Presence
            </h2>
            <p className="text-gray-400">Every hologram felt real</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'OFW Families',
                emoji: '👨‍👩‍👧‍👦',
                message: 'Virtual family dinners',
                description: 'OFWs joining family meals through holograms.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'Business Leaders',
                emoji: '💼',
                message: 'Global meetings in 3D',
                description: 'Executives conducting international business.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'Medical Professionals',
                emoji: '👨‍⚕️',
                message: 'Remote consultations',
                description: 'Doctors providing care through holographic tech.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'Educators',
                emoji: '👩‍🏫',
                message: 'Virtual classrooms',
                description: 'Teachers reaching students through holograms.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'Artists',
                emoji: '🎭',
                message: 'Virtual performances',
                description: 'Filipino artists performing globally.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'Government',
                emoji: '🏛️',
                message: 'Digital diplomacy',
                description: 'Government officials meeting virtually.',
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-cyan-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-cyan-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30 overflow-hidden relative">
                <img 
                  src="/DigitalPinoy/images/OnlineSupport.png" 
                  alt="Online support and connection"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Holographic technology connecting people globally.</p>
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
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Global Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Distance <span className="text-blue-400">Disappeared</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered impossible became everyday reality. 
                  Filipino families proved that technology could eliminate physical distance.
                </p>
                <p>
                  From OFW families to global businesses, from healthcare to education—holographic communication created new possibilities for connection and collaboration.
                </p>
                <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4 mt-4">
                  <p className="text-blue-300 font-semibold italic">
                    "We didn't just make calls. We created presence. We bridged oceans. We proved that Filipino families can be together—even when they are apart."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-cyan-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Video className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, holographic communication is more than technology—it's a new way of being together, a bridge across oceans, and a promise of connection.
              </p>
              <p>
                Holographic communication taught us that <span className="text-cyan-400 font-semibold">presence matters</span>. That distance can be overcome. 
                That Filipino families can maintain strong bonds across continents.
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-cyan-300 font-semibold italic">
                  "We didn't just make calls. We created presence. We bridged oceans. 
                  We proved that Filipino families can be together—even when they are apart."
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
                className="flex items-center gap-2 px-5 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm hover:bg-cyan-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/ai-companions">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
                >
                  ← Previous: AI Companions
                </motion.button>
              </Link>
              <div className="px-5 py-2 bg-gray-900/30 border border-gray-500/30 rounded-lg text-gray-400 text-sm">
                End of Technology Hall
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
