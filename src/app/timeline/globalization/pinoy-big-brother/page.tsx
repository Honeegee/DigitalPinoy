'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Radio, 
  ArrowLeft,
  Calendar,
  Heart,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function PinoyBigBrotherPage() {
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
        backgroundImage: 'url(/DigitalPinoy/images/globalization.jpg)',
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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-yellow-500/50"
          >
            <Radio className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
          >
            Pinoy Big Brother
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Cultural Export: When Filipino Reality Became Global Phenomenon
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-yellow-900/30 backdrop-blur-sm border border-yellow-500/50 rounded-full"
          >
            <p className="text-sm text-yellow-300 font-semibold">
              2000-2010: The Cultural Export Era
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
              <div className="w-5 h-8 border-2 border-yellow-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">Year 2005</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-yellow-400">Pinoy Big Brother</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Pinoy Big Brother wasn't just a reality show—it was cultural export, national conversation, and global Filipino representation.
                </p>
                <p>
                  What started as international format became Filipino phenomenon. TV screens became national gathering places. 
                  Filipino culture became global entertainment.
                </p>
                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 rounded p-4 mt-4">
                  <p className="text-yellow-300 font-semibold">
                    "From Manila to the world—Filipino reality became global phenomenon."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-500/30 overflow-hidden">
                <img
                  src="/DigitalPinoy/globalization/pbb1.png"
                  alt="Pinoy Big Brother creating cultural exports and global Filipino representation."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (2019, August 13). Pinoy Big Brother and its memorable real-life drama. PEP.ph. https://www.pep.ph/peptionary/143496/pinoy-big-brother-and-its-memorable-real-life-drama-a738-20190813-lfrm
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PBB Showcase Section */}
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
              The <span className="text-yellow-400">Cultural Export</span> Culture
            </h2>
            <p className="text-gray-400">Every season built global Filipino representation</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* PBB Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-yellow-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/globalization/pbb2.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      📺 Global Filipino
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                PBB!
              </motion.div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Pinoy Big Brother celebrates 20th anniversary with a historic collaboration. MSN. https://www.msn.com/en-ph/entertainment/entertainmentnews/pinoy-big-brother-celebrates-20th-anniversary-with-a-historic-collaboration/ar-AA1xWUF6
                </p>
              </div>
            </motion.div>

            {/* PBB Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Cultural Export</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '📺', title: 'Reality TV', desc: 'Filipino reality television' },
                  { icon: '🏠', title: 'House Dynamics', desc: 'Filipino household interactions' },
                  { icon: '🌍', title: 'Global Format', desc: 'International reality show format' },
                  { icon: '🛡️', title: 'Cultural Representation', desc: 'Filipino culture on global stage' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-3 hover:border-yellow-500/40 transition-colors"
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

      {/* PBB Culture */}
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
              The <span className="text-orange-400">Culture</span> of Filipino Reality
            </h2>
            <p className="text-gray-400">Every season built national conversation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Housemates',
                emoji: '🏠',
                message: 'Living Filipino reality',
                description: 'Filipino reality show participants.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Viewers',
                emoji: '📺',
                message: 'Watching Filipino stories',
                description: 'Filipino reality show audience.',
                color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
              },
              {
                title: 'The Cultural Ambassadors',
                emoji: '🌍',
                message: 'Representing Filipino culture',
                description: 'Filipino cultural representatives.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The National Conversation',
                emoji: '🗣️',
                message: 'Discussing Filipino reality',
                description: 'National reality show discussions.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Global Format',
                emoji: '📋',
                message: 'Adapting international format',
                description: 'International reality show adaptation.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Future Reality',
                emoji: '🔮',
                message: 'Tomorrows Filipino reality',
                description: 'Next generation reality shows.',
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-yellow-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-yellow-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-orange-900/30 to-yellow-900/30 rounded-xl border border-orange-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/globalization/pbb3.png"
                  alt="Pinoy Big Brother shaping cultural globalization."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Where to watch Pinoy Big Brother Double Up. Reddit. https://www.reddit.com/r/Philippines/comments/15xxvjn/where_to_watch_pinoy_big_brother_double_up_thank
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
                <Heart className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Cultural <span className="text-orange-400">Export</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered international format became Filipino cultural export. 
                  Pinoy Big Brother proved that Filipino reality could become global entertainment.
                </p>
                <p>
                  From reality TV to house dynamics, from global format to cultural representation—Pinoy Big Brother created new forms of cultural globalization.
                </p>
                <div className="bg-orange-500/10 border-l-4 border-orange-500 rounded-lg p-4 mt-4">
                  <p className="text-orange-300 font-semibold italic">
                    "We didn't just watch reality. We created culture. We built representation. We proved that Filipino entertainment could become global phenomenon."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-yellow-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Radio className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, Pinoy Big Brother is remembered as Filipino cultural export—the reality that connected Filipino culture with the global stage.
              </p>
              <p>
                Pinoy Big Brother taught us that <span className="text-yellow-400 font-semibold">reality can become culture</span>. That entertainment can represent. 
                That Filipino reality could become global phenomenon.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-yellow-300 font-semibold italic">
                  "We didn't just watch reality. We created culture. We built representation. 
                  We proved that Filipino entertainment could become global phenomenon—one season at a time."
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
            <Link href="/timeline/globalization">
              <motion.button
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm hover:bg-yellow-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Globalization Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/globalization/k-dramas">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  ← Previous: K-Dramas
                </motion.button>
              </Link>
              <Link href="/timeline/globalization/digital-creators">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  Next: Digital Creators →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
