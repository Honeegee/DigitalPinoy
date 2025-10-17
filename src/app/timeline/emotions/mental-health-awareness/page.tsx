'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Brain, 
  ArrowLeft,
  Calendar,
  Heart,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function MentalHealthAwarenessPage() {
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
            <Brain className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent"
          >
            Mental Health Awareness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Breaking Stigmas: When Emotions Became Valid
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-green-900/30 backdrop-blur-sm border border-green-500/50 rounded-full"
          >
            <p className="text-sm text-green-300 font-semibold">
              2010s-Present: The Age of Emotional Wellness
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
                <span className="text-green-400 font-semibold text-sm">Year 2015</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-green-400">Mental Health</span> Movement
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Mental health awareness wasn't just a trend—it was cultural healing, 
                  emotional validation, and social progress.
                </p>
                <p>
                  What started as taboo conversations evolved into national dialogues. 
                  Filipino society proved that emotional wellness could be openly discussed.
                </p>
                <div className="bg-green-900/20 border-l-4 border-green-500 rounded p-4 mt-4">
                  <p className="text-green-300 font-semibold">
                    "From whispers to conversations—mental health became our shared responsibility."
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
                  src="/DigitalPinoy/images/mentalhealth.png" 
                  alt="Mental health awareness and emotional wellness"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Mental health awareness creating emotional wellness conversations.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mental Health Showcase Section */}
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
              The <span className="text-green-400">Mental Health</span> Culture
            </h2>
            <p className="text-gray-400">Every conversation built understanding</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mental Health Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-green-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/mentalhealth.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🧠 Emotional Wellness
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Care!
              </motion.div>
            </motion.div>

            {/* Mental Health Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Wellness</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🧠', title: 'Self-Care', desc: 'Prioritizing mental wellness' },
                  { icon: '🗣️', title: 'Open Conversations', desc: 'Breaking mental health stigmas' },
                  { icon: '🤝', title: 'Support Systems', desc: 'Building emotional support networks' },
                  { icon: '💚', title: 'Community Care', desc: 'Collective emotional wellness' },
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

      {/* Mental Health Culture */}
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
              The <span className="text-emerald-400">Culture</span> of Wellness
            </h2>
            <p className="text-gray-400">Every conversation built emotional health</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Self-Care Advocates',
                emoji: '🧘‍♀️',
                message: 'Take care of yourself',
                description: 'Promoting personal mental wellness practices.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Community Supporters',
                emoji: '🤝',
                message: 'You are not alone',
                description: 'Building emotional support networks.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Stigma Breakers',
                emoji: '🗣️',
                message: 'Its okay to not be okay',
                description: 'Breaking mental health taboos.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Wellness Educators',
                emoji: '📚',
                message: 'Knowledge is healing',
                description: 'Educating about mental health awareness.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Digital Therapists',
                emoji: '💻',
                message: 'Online support matters',
                description: 'Providing digital mental health resources.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Policy Advocates',
                emoji: '🏛️',
                message: 'Mental health is a right',
                description: 'Advocating for mental health policies.',
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
                  src="/DigitalPinoy/images/OnlineSupport.png" 
                  alt="Mental health awareness impact"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Mental health awareness shaping emotional wellness culture.</p>
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
                <Heart className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Emotional <span className="text-emerald-400">Wellness</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered taboo became cultural progress. 
                  Filipino society proved that mental health could be openly discussed and supported.
                </p>
                <p>
                  From self-care to community support, from stigma breaking to policy advocacy—mental health awareness created new forms of emotional wellness.
                </p>
                <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-lg p-4 mt-4">
                  <p className="text-emerald-300 font-semibold italic">
                    "We didn't just talk about mental health. We created support. We broke stigmas. We proved that Filipino emotional wellness could be prioritized."
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
            <Brain className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, mental health awareness is remembered as Filipino emotional progress—the movement that made feelings valid and wellness accessible.
              </p>
              <p>
                Mental health awareness taught us that <span className="text-green-400 font-semibold">emotions matter</span>. That wellness can be prioritized. 
                That Filipino society can support emotional health.
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-green-300 font-semibold italic">
                  "We didn't just talk about mental health. We created support. We broke stigmas. 
                  We proved that Filipino emotional wellness could be prioritized—one conversation at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/emotions/meme-culture">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm hover:bg-yellow-900/50 transition-all"
                >
                  ← Previous: Meme Culture
                </motion.button>
              </Link>
              <Link href="/timeline/emotions/online-support-communities">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-teal-900/30 border border-teal-500/30 rounded-lg text-teal-300 text-sm hover:bg-teal-900/50 transition-all"
                >
                  Next: Online Support →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
