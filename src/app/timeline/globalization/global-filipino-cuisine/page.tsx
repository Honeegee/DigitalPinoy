'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Coffee, 
  ArrowLeft,
  Calendar,
  Heart,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function GlobalFilipinoCuisinePage() {
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
            <Coffee className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent"
          >
            Filipino Cuisine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Global Food Culture: When Filipino Flavors Went Worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-orange-900/30 backdrop-blur-sm border border-orange-500/50 rounded-full"
          >
            <p className="text-sm text-orange-300 font-semibold">
              2000-2010: The Global Food Culture Era
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
                <span className="text-orange-400 font-semibold text-sm">Year 2000</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-orange-400">Filipino Cuisine</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Filipino cuisine wasn't just food—it was cultural identity, global connection, and worldwide flavor exploration.
                </p>
                <p>
                  What started as local dishes became global sensations. Filipino restaurants became cultural ambassadors. 
                  Filipino flavors became international favorites.
                </p>
                <div className="bg-orange-900/20 border-l-4 border-orange-500 rounded p-4 mt-4">
                  <p className="text-orange-300 font-semibold">
                    "From Manila to the world—Filipino flavors became global cuisine."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30 overflow-hidden">
                <img 
                  src="/DigitalPinoy/images/friendster.png" 
                  alt="Filipino cuisine global food culture"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Filipino cuisine creating global food connections and cultural exchange.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cuisine Showcase Section */}
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
              The <span className="text-orange-400">Global Food</span> Culture
            </h2>
            <p className="text-gray-400">Every dish built cultural connection</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Cuisine Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-orange-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/friendster.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🍲 Global Flavor
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Yum!
              </motion.div>
            </motion.div>

            {/* Cuisine Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Global Flavor</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🍲', title: 'Traditional Dishes', desc: 'Filipino culinary heritage' },
                  { icon: '🌍', title: 'Global Restaurants', desc: 'Filipino food worldwide' },
                  { icon: '👨‍🍳', title: 'Filipino Chefs', desc: 'International culinary artists' },
                  { icon: '🛡️', title: 'Cultural Exchange', desc: 'Food as cultural bridge' },
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

      {/* Cuisine Culture */}
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
              The <span className="text-red-400">Culture</span> of Filipino Flavor
            </h2>
            <p className="text-gray-400">Every dish built global connection</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Traditional Cooks',
                emoji: '👩‍🍳',
                message: 'Cooking Filipino heritage',
                description: 'Filipino culinary tradition keepers.',
                color: 'from-orange-500/20 to-red-500/20 border-orange-500/30'
              },
              {
                title: 'The Global Restaurateurs',
                emoji: '🏪',
                message: 'Sharing Filipino food worldwide',
                description: 'International Filipino restaurant owners.',
                color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
              },
              {
                title: 'The Food Explorers',
                emoji: '🌍',
                message: 'Discovering Filipino flavors',
                description: 'Global Filipino food enthusiasts.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Cultural Ambassadors',
                emoji: '🤝',
                message: 'Bridging cultures through food',
                description: 'Filipino food cultural representatives.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Fusion Innovators',
                emoji: '✨',
                message: 'Creating new Filipino flavors',
                description: 'Filipino fusion cuisine creators.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Future Foodies',
                emoji: '🔮',
                message: 'Tomorrows Filipino cuisine',
                description: 'Next generation Filipino food lovers.',
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
                  src="/DigitalPinoy/images/friendster.png" 
                  alt="Filipino cuisine cultural impact"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Filipino cuisine shaping global food culture.</p>
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
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Global <span className="text-red-400">Flavor</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered local cuisine became global sensation. 
                  Filipino food proved that flavors could bridge cultures and create new connections.
                </p>
                <p>
                  From traditional dishes to global restaurants, from Filipino chefs to cultural exchange—Filipino cuisine created new forms of global food culture.
                </p>
                <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4 mt-4">
                  <p className="text-red-300 font-semibold italic">
                    "We didn't just cook food. We shared culture. We built connections. We proved that Filipino flavors could become global sensation."
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
            <Coffee className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, Filipino cuisine is remembered as global food culture—the flavors that connected Filipino culture with the world.
              </p>
              <p>
                Filipino cuisine taught us that <span className="text-orange-400 font-semibold">food can bridge cultures</span>. That flavors can connect. 
                That Filipino cooking could become global sensation.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-orange-300 font-semibold italic">
                  "We didn't just cook food. We shared culture. We built connections. 
                  We proved that Filipino flavors could become global sensation—one dish at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-orange-900/30 border border-orange-500/30 rounded-lg text-orange-300 text-sm hover:bg-orange-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Globalization Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/globalization/pinoy-big-brother">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm hover:bg-yellow-900/50 transition-all"
                >
                  ← Previous: Pinoy Big Brother
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
