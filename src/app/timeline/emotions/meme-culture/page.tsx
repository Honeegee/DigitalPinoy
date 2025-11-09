'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Laugh, 
  ArrowLeft,
  Calendar,
  Heart,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function MemeCulturePage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-yellow-950 via-black to-black"></div>

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
            <Laugh className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
          >
            Meme Culture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Digital Humor: When Laughter Went Viral
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-yellow-900/30 backdrop-blur-sm border border-yellow-500/50 rounded-full"
          >
            <p className="text-sm text-yellow-300 font-semibold">
              2010s-Present: The Age of Digital Humor
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
                <span className="text-yellow-400 font-semibold text-sm">Year 2010</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-yellow-400">Meme</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Memes weren't just internet jokes—they were cultural commentary, 
                  social bonding, and digital language.
                </p>
                <p>
                  What started as simple image macros evolved into complex cultural expressions. 
                  Filipino netizens proved that humor could unite communities online.
                </p>
                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 rounded p-4 mt-4">
                  <p className="text-yellow-300 font-semibold">
                    "From Facebook to Twitter—memes became our digital inside jokes."
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
                  src="/DigitalPinoy/emotions/meme1.gif"
                  alt="Meme culture creating digital humor and social bonding."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Meme culture creating digital humor and social bonding [GIF]. Giphy. https://giphy.com/gifs/philippines-filipino-uy-ikr2iDniKOfuH5sYDs
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meme Showcase Section */}
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
              The <span className="text-yellow-400">Meme</span> Culture
            </h2>
            <p className="text-gray-400">Every meme told a story</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Meme Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-yellow-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/emotions/meme2.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      😂 Digital Humor
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                LOL!
              </motion.div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Meme-fied: How Pinoys get rid of bad days through memes. Explained.ph. https://explained.ph/meme-fied-how-pinoys-get-rid-of-bad-days-through-memes
                </p>
              </div>
            </motion.div>

            {/* Meme Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Memes</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '😂', title: 'Humor', desc: 'Funny and relatable content' },
                  { icon: '🗣️', title: 'Social Commentary', desc: 'Observations on society' },
                  { icon: '🤝', title: 'Community', desc: 'Shared cultural references' },
                  { icon: '🎭', title: 'Satire', desc: 'Witty social criticism' },
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

      {/* Meme Culture */}
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
              The <span className="text-orange-400">Culture</span> of Humor
            </h2>
            <p className="text-gray-400">Every meme built digital community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Funny Pages',
                emoji: '😂',
                message: 'Haha react',
                description: 'Creating laughter and joy online.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Social Critics',
                emoji: '🗣️',
                message: 'Relatable content',
                description: 'Commenting on social issues through humor.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Community Builders',
                emoji: '🤝',
                message: 'Inside jokes',
                description: 'Creating shared cultural references.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Satirists',
                emoji: '🎭',
                message: 'Witty observations',
                description: 'Using humor for social commentary.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Trend Setters',
                emoji: '🔥',
                message: 'Going viral',
                description: 'Creating trends that spread quickly.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Cultural Archivists',
                emoji: '📚',
                message: 'Digital history',
                description: 'Documenting cultural moments through memes.',
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
                  src="/DigitalPinoy/emotions/meme3.jpg"
                  alt="Meme culture shaping digital communication and humor."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Meme culture shaping digital communication and humor [PDF]. MSU-IIT. https://www.msuiit.edu.ph/academics/colleges/cass/research/langkit/2016/1-20.pdf
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
                Digital <span className="text-orange-400">Language</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered internet humor became cultural language. 
                  Filipino netizens proved that memes could create community and connection.
                </p>
                <p>
                  From social commentary to community building, from humor to cultural archiving—memes created new forms of digital communication.
                </p>
                <div className="bg-orange-500/10 border-l-4 border-orange-500 rounded-lg p-4 mt-4">
                  <p className="text-orange-300 font-semibold italic">
                    "We didn't just share memes. We created culture. We built community. We proved that Filipino humor could unite people online."
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
            <Laugh className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, meme culture is remembered as Filipino digital humor—the art of creating laughter and community online.
              </p>
              <p>
                Memes taught us that <span className="text-yellow-400 font-semibold">humor matters</span>. That laughter can unite. 
                That Filipino culture thrives through digital creativity.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-yellow-300 font-semibold italic">
                  "We didn't just share memes. We created culture. We built community. 
                  We proved that Filipino humor could unite people online—one laugh at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm hover:bg-yellow-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/emotions/hugot-culture">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  ← Previous: Hugot
                </motion.button>
              </Link>
              <Link href="/timeline/emotions/mental-health-awareness">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
                >
                  Next: Mental Health →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
