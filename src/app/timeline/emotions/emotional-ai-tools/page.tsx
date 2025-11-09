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

export default function EmotionalAIToolsPage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-blue-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/50"
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent"
          >
            Emotional AI Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Digital Empathy: When Machines Learned to Feel
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-blue-900/30 backdrop-blur-sm border border-blue-500/50 rounded-full"
          >
            <p className="text-sm text-blue-300 font-semibold">
              2020s-Present: The Age of Digital Empathy
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
              <div className="w-5 h-8 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Year 2020</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-blue-400">Emotional AI</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Emotional AI tools weren't just algorithms—they were digital therapists, 
                  emotional companions, and empathetic machines.
                </p>
                <p>
                  What started as simple chatbots evolved into sophisticated emotional support systems. 
                  Filipino developers proved that technology could understand and respond to human emotions.
                </p>
                <div className="bg-blue-900/20 border-l-4 border-blue-500 rounded p-4 mt-4">
                  <p className="text-blue-300 font-semibold">
                    "From code to compassion—AI became our digital emotional companions."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30 overflow-hidden">
                <img
                  src="/DigitalPinoy/emotions/aie1.png"
                  alt="Emotional AI tools creating digital empathy and support."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Emotional AI: Can machines understand feelings? AI Competence. https://aicompetence.org/emotional-ai-can-machines-understand-feelings
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
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
              The <span className="text-blue-400">Emotional AI</span> Culture
            </h2>
            <p className="text-gray-400">Every algorithm built understanding</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* AI Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl border border-blue-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/emotions/aie2.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🤖 Digital Empathy
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                AI!
              </motion.div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Wishnia, A. (n.d.). Digital empathy: Can AI truly understand us? LinkedIn. https://www.linkedin.com/pulse/digital-empathy-can-ai-truly-understand-us-asaf-wishnia-eekkc
                </p>
              </div>
            </motion.div>

            {/* AI Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of AI Empathy</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🤖', title: 'Emotional Recognition', desc: 'Understanding human emotions' },
                  { icon: '💬', title: 'Natural Language', desc: 'Conversational emotional support' },
                  { icon: '🧠', title: 'Machine Learning', desc: 'Adaptive emotional responses' },
                  { icon: '🛡️', title: 'Digital Therapy', desc: 'AI-powered mental health support' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-3 hover:border-blue-500/40 transition-colors"
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

      {/* AI Culture */}
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
              The <span className="text-indigo-400">Culture</span> of AI Empathy
            </h2>
            <p className="text-gray-400">Every algorithm built emotional intelligence</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Emotional Analysts',
                emoji: '🧠',
                message: 'I understand your feelings',
                description: 'Analyzing and responding to emotions.',
                color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
              },
              {
                title: 'The Digital Therapists',
                emoji: '💬',
                message: 'How are you feeling today?',
                description: 'Providing therapeutic conversations.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Empathy Engineers',
                emoji: '⚙️',
                message: 'Building compassionate AI',
                description: 'Creating emotionally intelligent systems.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Mental Health Bots',
                emoji: '🤖',
                message: 'Your mental health matters',
                description: 'Offering AI-powered wellness support.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Emotional Companions',
                emoji: '💝',
                message: 'Always here to listen',
                description: 'Providing constant emotional support.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Future Empaths',
                emoji: '🔮',
                message: 'Tomorrows emotional AI',
                description: 'Developing next-gen emotional intelligence.',
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-blue-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/emotions/aie3.png"
                  alt="Emotional AI tools shaping digital empathy culture."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). AI is revolutionizing mental health care: Here's what you need to know. Alicebot. https://alicebot.org/ai-is-revolutionizing-mental-health-care-heres-what-you-need-to-know
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
                Digital <span className="text-indigo-400">Empathy</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered cold technology became warm emotional support. 
                  Filipino developers proved that AI could understand and respond to human emotions.
                </p>
                <p>
                  From emotional recognition to digital therapy, from machine learning to compassionate conversations—AI created new forms of digital empathy.
                </p>
                <div className="bg-indigo-500/10 border-l-4 border-indigo-500 rounded-lg p-4 mt-4">
                  <p className="text-indigo-300 font-semibold italic">
                    "We didn't just create AI. We created empathy. We built understanding. We proved that Filipino technology could care."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-blue-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, emotional AI tools are remembered as Filipino digital empathy—the technology that made machines understand human feelings.
              </p>
              <p>
                Emotional AI taught us that <span className="text-blue-400 font-semibold">technology can care</span>. That algorithms can understand. 
                That Filipino innovation can create compassionate machines.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-blue-300 font-semibold italic">
                  "We didn't just create AI. We created empathy. We built understanding. 
                  We proved that Filipino technology could care—one algorithm at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/emotions/online-support-communities">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-teal-900/30 border border-teal-500/30 rounded-lg text-teal-300 text-sm hover:bg-teal-900/50 transition-all"
                >
                  ← Previous: Online Support
                </motion.button>
              </Link>
              <Link href="/timeline/emotions/ai-emotional-companions">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  Next: AI Companions →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
