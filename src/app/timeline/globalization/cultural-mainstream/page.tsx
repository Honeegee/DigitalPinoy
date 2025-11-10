'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowLeft,
  Calendar,
  Heart,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function CulturalMainstreamPage() {
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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-yellow-500/50"
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent"
          >
            Cultural Mainstream
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Global Acceptance: When Filipino Culture Became Mainstream
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-yellow-900/30 backdrop-blur-sm border border-yellow-500/50 rounded-full"
          >
            <p className="text-sm text-yellow-300 font-semibold">
              2020-Present: The Cultural Mainstream Era
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
                <span className="text-yellow-400 font-semibold text-sm">Year 2020</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-yellow-400">Cultural Mainstream</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Cultural mainstream wasn't just acceptance—it was global integration, worldwide recognition, and Filipino culture becoming everyday global phenomenon.
                </p>
                <p>
                  What started as niche interests became global trends. Filipino culture became international mainstream. 
                  Cultural elements became global standards.
                </p>
                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 rounded p-4 mt-4">
                  <p className="text-yellow-300 font-semibold">
                    "From Manila to the world—Filipino culture became global mainstream."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-900/30 to-amber-900/30 rounded-xl border border-yellow-500/30 overflow-hidden">
                <img
                  src="/DigitalPinoy/globalization/culturalmainstream1.png"
                  alt="Cultural mainstream creating global acceptance and worldwide integration."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). The history and future of Filipino pop from folk love songs to the P-pop wave. Billboard Philippines. https://billboardphilippines.com/culture/scenes/the-history-and-future-of-filipino-pop-from-folk-love-songs-to-the-p-pop-wave
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mainstream Showcase Section */}
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
              The <span className="text-yellow-400">Global Acceptance</span> Culture
            </h2>
            <p className="text-gray-400">Every mainstream built cultural integration</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mainstream Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl border border-yellow-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-yellow-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/globalization/culturalmainstream2.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🌟 Global Trend
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Trend!
              </motion.div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (2025, June 9). Philippine national day at Expo 2025 Osaka celebrates a nation woven by culture, creativity and community. Great Travel Magazine. https://greattravelmagazine.com/2025/06/09/philippine-national-day-at-expo-2025-osaka-celebrates-a-nation-woven-by-culture-creativity-and-community
                </p>
              </div>
            </motion.div>

            {/* Mainstream Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Cultural Integration</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🌟', title: 'Global Trends', desc: 'Filipino culture worldwide' },
                  { icon: '🌍', title: 'International Recognition', desc: 'Global cultural acceptance' },
                  { icon: '💼', title: 'Mainstream Economy', desc: 'Global cultural industries' },
                  { icon: '🛡️', title: 'Cultural Integration', desc: 'Filipino culture in daily life' },
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

      {/* Mainstream Culture */}
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
              The <span className="text-amber-400">Culture</span> of Global Acceptance
            </h2>
            <p className="text-gray-400">Every mainstream built worldwide integration</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Trendsetters',
                emoji: '🌟',
                message: 'Setting global cultural trends',
                description: 'Filipino cultural trend creators.',
                color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30'
              },
              {
                title: 'The Global Adopters',
                emoji: '🌍',
                message: 'Embracing Filipino culture worldwide',
                description: 'International Filipino culture adopters.',
                color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
              },
              {
                title: 'The Mainstream Entrepreneurs',
                emoji: '💼',
                message: 'Building cultural industries',
                description: 'Filipino mainstream business creators.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Cultural Integrators',
                emoji: '🤝',
                message: 'Integrating Filipino culture globally',
                description: 'Filipino cultural integration specialists.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Trend Innovators',
                emoji: '✨',
                message: 'Creating new cultural standards',
                description: 'Filipino cultural standard creators.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Future Mainstream',
                emoji: '🔮',
                message: 'Tomorrows cultural acceptance',
                description: 'Next generation Filipino cultural leaders.',
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
              <div className="aspect-video bg-gradient-to-br from-amber-900/30 to-yellow-900/30 rounded-xl border border-amber-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/globalization/culturalmainstream3.png"
                  alt="Cultural mainstream shaping global acceptance culture."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (2025, June 9). Philippine national day at Expo 2025 Osaka celebrates a nation woven by culture, creativity and community. Great Travel Magazine. https://greattravelmagazine.com/2025/06/09/philippine-national-day-at-expo-2025-osaka-celebrates-a-nation-woven-by-culture-creativity-and-community
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
                <Heart className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Global <span className="text-amber-400">Acceptance</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered niche interests became global cultural mainstream. 
                  Cultural mainstream proved that Filipino culture could achieve worldwide acceptance.
                </p>
                <p>
                  From global trends to international recognition, from mainstream economy to cultural integration—cultural mainstream created new forms of global acceptance culture.
                </p>
                <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-lg p-4 mt-4">
                  <p className="text-amber-300 font-semibold italic">
                    "We didn't just follow trends. We set standards. We built acceptance. We proved that Filipino culture could become global mainstream."
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
            <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, cultural mainstream is remembered as global acceptance—the integration that connected Filipino culture with everyday global life.
              </p>
              <p>
                Cultural mainstream taught us that <span className="text-yellow-400 font-semibold">culture can become everyday life</span>. That trends can become standards. 
                That Filipino culture could become global mainstream.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-yellow-300 font-semibold italic">
                  "We didn't just follow trends. We set standards. We built acceptance. 
                  We proved that Filipino culture could become global mainstream—one integration at a time."
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
              <Link href="/timeline/globalization/cultural-exports">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
                >
                  ← Previous: Cultural Exports
                </motion.button>
              </Link>
              <Link href="/timeline/globalization/ai-translation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  Next: AI Translation →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
