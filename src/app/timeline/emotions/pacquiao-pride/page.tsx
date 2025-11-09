'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowLeft,
  Calendar,
  Users,
  Heart,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function PacquiaoPridePage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-red-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-red-500/50"
          >
            <TrendingUp className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent"
          >
            Pacquiao Pride
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            National Unity: When One Man United a Nation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-red-900/30 backdrop-blur-sm border border-red-500/50 rounded-full"
          >
            <p className="text-sm text-red-300 font-semibold">
              2000s-2010s: The Age of National Pride
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
              <div className="w-5 h-8 border-2 border-red-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-red-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold text-sm">Year 2005</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-red-400">Pacquiao</span> Phenomenon
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Manny Pacquiao wasn't just a boxer—he was national pride, 
                  unity personified, and hope embodied.
                </p>
                <p>
                  What started as boxing matches evolved into national celebrations. 
                  Filipino families proved that sports could unite an entire nation.
                </p>
                <div className="bg-red-900/20 border-l-4 border-red-500 rounded p-4 mt-4">
                  <p className="text-red-300 font-semibold">
                    "From living rooms to streets—Pacquiao fights became our national holidays."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/emotions/pacquiao1.jpg"
                  alt="Manny Pacquiao national pride"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Pacquiao fights uniting Filipino households nationwide.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Filipinos take Pacquiao loss hard, demand rematch. (n.d.). Reuters. https://www.reuters.com/article/sports/filipinos-take-pacquiao-loss-hard-demand-rematch-idUSKBN0NO040/
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pacquiao Showcase Section */}
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
              The <span className="text-red-400">Pacquiao</span> Effect
            </h2>
            <p className="text-gray-400">Every fight built national pride</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Pacquiao Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl border border-red-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-red-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/emotions/pac2.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🥊 National Pride
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Pacman Pacquiao gives Filipinos reason to cheer. (2009, December 16). NPR. https://www.npr.org/2009/12/16/121482903/pacman-pacquiao-gives-filipinos-reason-to-cheer
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Pride!
              </motion.div>
            </motion.div>

            {/* Pacquiao Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of National Pride</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🇵🇭', title: 'National Unity', desc: 'Filipinos united across the globe' },
                  { icon: '🏆', title: 'Global Recognition', desc: 'Putting Philippines on the world map' },
                  { icon: '💪', title: 'Inspiration', desc: 'Inspiring hope and determination' },
                  { icon: '🎉', title: 'Celebration', desc: 'National celebrations and joy' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-red-900/20 border border-red-500/20 rounded-lg p-3 hover:border-red-500/40 transition-colors"
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

      {/* Pacquiao Culture */}
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
              The <span className="text-orange-400">Culture</span> of Pride
            </h2>
            <p className="text-gray-400">Every victory built national identity</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Family Viewers',
                emoji: '👨‍👩‍👧‍👦',
                message: 'Family fight nights',
                description: 'Families gathering to watch together.',
                color: 'from-red-500/20 to-orange-500/20 border-red-500/30'
              },
              {
                title: 'The OFW Communities',
                emoji: '🌍',
                message: 'Global Filipino pride',
                description: 'OFWs celebrating with compatriots worldwide.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Youth Inspiration',
                emoji: '🎯',
                message: 'Dream big, work hard',
                description: 'Inspiring the next generation of Filipinos.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The National Media',
                emoji: '📺',
                message: 'Live coverage events',
                description: 'Media creating national viewing experiences.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Street Celebrations',
                emoji: '🎉',
                message: 'Victory parades',
                description: 'Spontaneous celebrations across the country.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Cultural Impact',
                emoji: '🏛️',
                message: 'National identity',
                description: 'Shaping Filipino cultural confidence.',
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-red-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl border border-orange-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/emotions/pac3.jpg"
                  alt="Pacquiao cultural impact"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Pacquiao shaping Filipino national identity and pride.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Manny Pacquiao. (n.d.). Pinterest. https://ph.pinterest.com/pin/574771971166796148
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
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-orange-400 font-semibold text-sm">National Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                National <span className="text-orange-400">Unity</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered sports became national identity. 
                  Filipino families proved that one man could unite an entire nation.
                </p>
                <p>
                  From family bonding to global recognition, from inspiration to celebration—Pacquiao created new forms of national pride and unity.
                </p>
                <div className="bg-orange-500/10 border-l-4 border-orange-500 rounded-lg p-4 mt-4">
                  <p className="text-orange-300 font-semibold italic">
                    "We didn't just watch Pacquiao. We believed in him. We celebrated with him. We proved that one Filipino could inspire an entire nation."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-red-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, Pacquiao is remembered as a national hero—the embodiment of Filipino pride, determination, and unity.
              </p>
              <p>
                Pacquiao taught us that <span className="text-red-400 font-semibold">national pride matters</span>. That sports can unite a nation. 
                That one Filipino can inspire millions worldwide.
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-red-300 font-semibold italic">
                  "We didn't just watch Pacquiao. We believed in him. We celebrated with him. 
                  We proved that one Filipino could inspire an entire nation—one fight at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300 text-sm hover:bg-red-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/emotions/teleserye-bonding">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  ← Previous: Teleserye
                </motion.button>
              </Link>
              <Link href="/timeline/emotions/hugot-culture">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  Next: Hugot Culture →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
