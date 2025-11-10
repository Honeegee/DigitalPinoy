'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  ArrowLeft,
  Calendar,
  Heart,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function OnlineSupportCommunitiesPage() {
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
        backgroundImage: 'url(/DigitalPinoy/images/emotions.jpg)',
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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-teal-500/50"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent"
          >
            Online Support Communities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Digital Empathy: When Strangers Became Support Systems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-teal-900/30 backdrop-blur-sm border border-teal-500/50 rounded-full"
          >
            <p className="text-sm text-teal-300 font-semibold">
              2010s-Present: The Age of Digital Support
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
              <div className="w-5 h-8 border-2 border-teal-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-teal-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-teal-400" />
                <span className="text-teal-400 font-semibold text-sm">Year 2015</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-teal-400">Online Support</span> Revolution
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Online support communities weren't just forums—they were digital families, 
                  emotional lifelines, and virtual safe spaces.
                </p>
                <p>
                  What started as anonymous forums evolved into compassionate communities. 
                  Filipino netizens proved that strangers could become emotional support systems.
                </p>
                <div className="bg-teal-900/20 border-l-4 border-teal-500 rounded p-4 mt-4">
                  <p className="text-teal-300 font-semibold">
                    "From anonymity to empathy—online communities became our digital shoulders to cry on."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-xl border border-teal-500/30 overflow-hidden">
                <img
                  src="/DigitalPinoy/emotions/onlinesupport.png"
                  alt="Online support communities creating digital empathy and connection."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Empowering the Philippines through digital innovation. Tarkie. https://www.tarkie.com/empowering-the-philippines-through-digital-innovation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Showcase Section */}
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
              The <span className="text-teal-400">Support</span> Culture
            </h2>
            <p className="text-gray-400">Every message built connection</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Support Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl border border-teal-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-teal-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/emotions/onlinesupport2.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🤝 Digital Empathy
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Support!
              </motion.div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). Cyber wellness Philippines. AskSonnie. https://asksonnie.info/strengthen-and-strategize/cyber-wellness/cyber-wellness-philippines
                </p>
              </div>
            </motion.div>

            {/* Support Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Art of Support</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🤝', title: 'Empathy', desc: 'Understanding and compassion' },
                  { icon: '🗣️', title: 'Active Listening', desc: 'Genuine emotional support' },
                  { icon: '💚', title: 'Community Care', desc: 'Collective emotional wellness' },
                  { icon: '🛡️', title: 'Safe Spaces', desc: 'Non-judgmental environments' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-teal-900/20 border border-teal-500/20 rounded-lg p-3 hover:border-teal-500/40 transition-colors"
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

      {/* Support Culture */}
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
              The <span className="text-cyan-400">Culture</span> of Support
            </h2>
            <p className="text-gray-400">Every community built emotional safety</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Empathetic Listeners',
                emoji: '👂',
                message: 'I hear you',
                description: 'Providing genuine emotional support.',
                color: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30'
              },
              {
                title: 'The Community Builders',
                emoji: '🤝',
                message: 'We are here for you',
                description: 'Creating safe online spaces.',
                color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30'
              },
              {
                title: 'The Mental Health Advocates',
                emoji: '🧠',
                message: 'Your feelings are valid',
                description: 'Promoting emotional wellness.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Anonymous Supporters',
                emoji: '🎭',
                message: 'No judgment here',
                description: 'Providing confidential support.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'The Digital Therapists',
                emoji: '💻',
                message: 'Professional guidance',
                description: 'Offering expert emotional support.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'The Peer Supporters',
                emoji: '👥',
                message: 'Been there too',
                description: 'Sharing lived experiences.',
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
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-teal-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-teal-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-xl border border-cyan-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/emotions/onlinesupport3.png"
                  alt="Online support communities shaping digital empathy culture."
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  (n.d.). We think digital Philippines. Facebook. https://wethinkdigital.fb.com/ph/en-ph
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
                <Heart className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold text-sm">Cultural Impact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Digital <span className="text-cyan-400">Empathy</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  What was once considered anonymous forums became emotional lifelines. 
                  Filipino netizens proved that digital spaces could provide genuine emotional support.
                </p>
                <p>
                  From empathy to community care, from safe spaces to peer support—online communities created new forms of digital connection.
                </p>
                <div className="bg-cyan-500/10 border-l-4 border-cyan-500 rounded-lg p-4 mt-4">
                  <p className="text-cyan-300 font-semibold italic">
                    "We didn't just create communities. We created support. We built empathy. We proved that Filipino digital spaces could heal."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-teal-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, online support communities are remembered as Filipino digital empathy—the movement that made strangers into support systems.
              </p>
              <p>
                Online support taught us that <span className="text-teal-400 font-semibold">empathy matters</span>. That community can heal. 
                That Filipino digital spaces can provide emotional safety.
              </p>
              <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-teal-300 font-semibold italic">
                  "We didn't just create communities. We created support. We built empathy. 
                  We proved that Filipino digital spaces could heal—one message at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-teal-900/30 border border-teal-500/30 rounded-lg text-teal-300 text-sm hover:bg-teal-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Emotions Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/emotions/mental-health-awareness">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
                >
                  ← Previous: Mental Health
                </motion.button>
              </Link>
              <Link href="/timeline/emotions/emotional-ai-tools">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  Next: Emotional AI →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
