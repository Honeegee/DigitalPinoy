'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Video, 
  ArrowLeft,
  Calendar,
  Heart,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function DigitalCreatorsPage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-purple-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/50"
          >
            <Video className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent"
          >
            Digital Creators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Global Content: When Filipino Creativity Went Digital
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 rounded-full"
          >
            <p className="text-sm text-purple-300 font-semibold">
              2010-2020: The Digital Creator Era
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
                <span className="text-purple-400 font-semibold text-sm">Year 2010</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-purple-400">Digital Creator</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Digital creators weren't just content makers—they were global storytellers, cultural ambassadors, and digital entrepreneurs.
                </p>
                <p>
                  What started as personal videos became global platforms. Filipino creators became international stars. 
                  Digital content became cultural currency.
                </p>
                <div className="bg-purple-900/20 border-l-4 border-purple-500 rounded p-4 mt-4">
                  <p className="text-purple-300 font-semibold">
                    "From Manila to the world—Filipino creativity became digital content."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/30 overflow-hidden">
                <img
                  src="/DigitalPinoy/globalization/influencers1.png"
                  alt="Digital creators creating global content and cultural exchange."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Top social media influencers in the Philippines. Spiralytics. https://www.spiralytics.com/blog/top-social-media-influencers-in-the-philippines
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creator Showcase Section */}
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
              The <span className="text-purple-400">Global Content</span> Culture
            </h2>
            <p className="text-gray-400">Every creator built digital connection</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Creator Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl border border-purple-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/globalization/influencers2.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🎬 Digital Story
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Create!
              </motion.div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (2024). Filipino content creators took over our feeds. Nylon Manila. https://nylonmanila.com/pop-culture/filipino-content-creators-took-over-our-feeds-2024
                </p>
              </div>
            </motion.div>

            {/* Creator Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Digital Storytelling</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🎬', title: 'Video Content', desc: 'Filipino digital storytelling' },
                  { icon: '🌍', title: 'Global Platforms', desc: 'International content sharing' },
                  { icon: '💼', title: 'Digital Entrepreneurship', desc: 'Content creation business' },
                  { icon: '🛡️', title: 'Cultural Representation', desc: 'Filipino culture online' },
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

      {/* Creator Culture */}
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
              The <span className="text-indigo-400">Culture</span> of Digital Creativity
            </h2>
            <p className="text-gray-400">Every creator built global audience</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Video Creators',
                emoji: '🎬',
                message: 'Creating digital stories',
                description: 'Filipino video content creators.',
                color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30'
              },
              {
                title: 'The Global Influencers',
                emoji: '🌍',
                message: 'Reaching international audiences',
                description: 'Filipino global social media stars.',
                color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
              },
              {
                title: 'The Digital Entrepreneurs',
                emoji: '💼',
                message: 'Building content businesses',
                description: 'Filipino digital business creators.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Cultural Storytellers',
                emoji: '📖',
                message: 'Sharing Filipino stories',
                description: 'Filipino cultural content creators.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Platform Innovators',
                emoji: '✨',
                message: 'Creating new digital spaces',
                description: 'Filipino digital platform creators.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Future Creators',
                emoji: '🔮',
                message: 'Tomorrows digital content',
                description: 'Next generation Filipino creators.',
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
              <div className="aspect-video bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/globalization/influencers3.png"
                  alt="Digital creators shaping global content culture."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (2020, December 16). Digital YouTube reveals top trending videos and content creators of 2020 in the Philippines. Adobe Magazine. https://www.adobomagazine.com/digital-news/digital-youtube-reveals-top-trending-videos-and-content-creators-of-2020-in-the-philippines
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
                <Heart className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Global <span className="text-indigo-400">Content</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered personal content became global phenomenon. 
                  Digital creators proved that Filipino stories could reach worldwide audiences.
                </p>
                <p>
                  From video content to global platforms, from digital entrepreneurship to cultural representation—digital creators created new forms of global content culture.
                </p>
                <div className="bg-indigo-500/10 border-l-4 border-indigo-500 rounded-lg p-4 mt-4">
                  <p className="text-indigo-300 font-semibold italic">
                    "We didn't just create content. We told stories. We built audiences. We proved that Filipino creativity could become global phenomenon."
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
            <Video className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, digital creators are remembered as global content pioneers—the storytellers that connected Filipino creativity with the world.
              </p>
              <p>
                Digital creators taught us that <span className="text-purple-400 font-semibold">creativity can reach global audiences</span>. That stories can connect. 
                That Filipino content could become global phenomenon.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-purple-300 font-semibold italic">
                  "We didn't just create content. We told stories. We built audiences. 
                  We proved that Filipino creativity could become global phenomenon—one video at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
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
              <Link href="/timeline/globalization/global-platforms">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  Next: Global Platforms →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
