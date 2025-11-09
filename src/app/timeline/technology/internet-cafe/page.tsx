'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Coffee,
  Gamepad2,
  Users,
  ArrowLeft,
  Calendar,
  Zap,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function InternetCafePage() {
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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-amber-950 via-black to-black"></div>

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/50"
          >
            <Coffee className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent"
          >
            Internet Café Culture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            The ₱15/Hour Gateway to Digital Worlds
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-amber-900/30 backdrop-blur-sm border border-amber-500/50 rounded-full"
          >
            <p className="text-sm text-amber-300 font-semibold">
              2002-2010: The Digital Tambayan Era
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
              <div className="w-5 h-8 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
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
                <Calendar className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-semibold text-sm">Year 2002</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-amber-400">Digital Tambayan</span> is Born
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Before smartphones, before home broadband—there were internet cafés. 
                  For just ₱15 per hour, Filipinos could access the entire digital world.
                </p>
                <p>
                  The smell of instant noodles mixed with the sound of keyboard clicks and competitive gaming rage. 
                  These weren't just places to use the internet—they were social hubs where friendships were forged, 
                  gaming skills were honed, and digital culture was born.
                </p>
                <div className="bg-amber-900/20 border-l-4 border-amber-500 rounded p-4 mt-4">
                  <p className="text-amber-300 font-semibold">
                    ₱15 per hour. ₱100 overnight. Air-conditioned digital paradise.
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
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/icafe.jpg"
                  alt="Classic internet café setup"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Rows of CRT monitors, ₱15 per hour, ₱100 overnight packages.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Situations facing i-café owner in the Philippines. (2009). <em>iCafé Philippines</em>. https://icafepilipinas.blogspot.com/2009/08/situations-facing-i-cafe-owner-in.html
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classic Setup Section */}
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
              The <span className="text-amber-400">Classic Setup</span>
            </h2>
            <p className="text-gray-400">Everything you needed for ₱15/hour</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Computer Setup Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-500/40 p-8 backdrop-blur-sm">
              <div className="w-full h-full bg-black/50 rounded-xl border border-amber-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/DigitalPinoy/technology/pcsetup.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                    💻 Classic Internet Café Computer
                  </p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  2000 computer [Photograph]. (n.d.). iStock. https://www.istockphoto.com/photos/2000-computer
                </p>
              </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                ₱15/Hour!
              </motion.div>
            </motion.div>

            {/* Setup Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Perfect Setup</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '💻', title: 'CRT Monitor', desc: '17-inch, 1024x768 resolution' },
                  { icon: '⌨️', title: 'PS/2 Keyboard', desc: 'Click-clack mechanical feel' },
                  { icon: '🖱️', title: 'Ball Mouse', desc: 'Clean the ball every week' },
                  { icon: '🎧', title: 'Headphones', desc: 'For gaming and music' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-amber-900/20 border border-amber-500/20 rounded-lg p-3 hover:border-amber-500/40 transition-colors"
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

      {/* The Big Games Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* The Big Games - Text Only Tribute */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              The <span className="text-amber-400">Legendary</span> Internet Café Games
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Ragnarok Online',
                  quote: 'Wanna party? Priest LF Orc Dungeon!',
                  desc: 'The MMORPG that became our second life. Prontera City, guild wars, and endless grinding.',
                  color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
                  icon: '⚔️'
                },
                {
                  title: 'DOTA',
                  quote: 'Mid or feed! GG team noob!',
                  desc: 'The Warcraft 3 mod that birthed the MOBA genre. 5v5 battles that lasted for hours.',
                  color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                  icon: '🛡️'
                },
                {
                  title: 'Counter-Strike 1.6',
                  quote: 'The bomb has been planted!',
                  desc: 'LAN tournaments, de_dust2, AWP sniper battles. Every headshot echoed through the café.',
                  color: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
                  icon: '🎯'
                },
                {
                  title: 'StarCraft',
                  quote: 'My life for Aiur!',
                  desc: 'Strategic RTS brilliance. Zerg rush, Protoss carriers, Terran marines.',
                  color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
                  icon: '👾'
                },
                {
                  title: 'Gunbound',
                  quote: 'Perfect angle! Nice shot!',
                  desc: 'Physics-based artillery fun. Calculate wind, power, and angle for the perfect shot.',
                  color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
                  icon: '🎮'
                },
                {
                  title: 'Red Alert 2',
                  quote: 'Kirov reporting!',
                  desc: 'Base building, Tesla coils, mammoth tanks. The RTS that taught us strategy.',
                  color: 'from-red-500/20 to-yellow-500/20 border-red-500/30',
                  icon: '⚡'
                }
              ].map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.6)' }}
                  className={`bg-gradient-to-br ${game.color} rounded-xl border p-6 backdrop-blur-sm transition-all`}
                >
                  <div className="text-4xl mb-3">{game.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{game.title}</h4>
                  <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-amber-400 text-center text-xs">
                    "{game.quote}"
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{game.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Social Experience */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-amber-950/20">
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
                  src="/DigitalPinoy/technology/tambayan.jpg"
                  alt="Internet café social scene"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Where "tambayan" met technology - friendships forged over games.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Situations facing i-café owner in the Philippines. (2009). <em>iCafé Philippines</em>. https://icafepilipinas.blogspot.com/2009/08/situations-facing-i-cafe-owner-in.html
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
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Social Hub</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                More Than Just <span className="text-blue-400">Games</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Internet cafés were the original Filipino digital community centers. 
                  They were places where friendships were forged, rivalries were born, 
                  and memories were made.
                </p>
                <p>
                  From LAN parties to overnight gaming sessions, from sharing instant noodles 
                  to teaching each other gaming strategies—these spaces created bonds that 
                  lasted beyond the ₱15/hour sessions.
                </p>
                <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4 mt-4">
                  <p className="text-blue-300 font-semibold italic">
                    "We didn't just play games. We built communities."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
              By the <span className="text-amber-400">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '₱15', label: 'Hourly rate', icon: Coffee, color: 'amber' },
              { number: '₱100', label: 'Overnight package', icon: Clock, color: 'orange' },
              { number: '24/7', label: 'Operating hours', icon: Zap, color: 'yellow' },
              { number: '#1', label: 'Social hub', icon: Users, color: 'blue' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/30 rounded-xl p-6 text-center hover:border-amber-500/60 transition-all"
              >
                {(() => {
                  const IconComponent = stat.icon;
                  return <IconComponent className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3`} />;
                })()}
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-amber-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gamepad2 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, we have high-speed internet at home, powerful gaming PCs, and mobile gaming. 
                But none of them captured the magic of the internet café era.
              </p>
              <p>
                Internet cafés taught us that <span className="text-amber-400 font-semibold">community matters</span>. That the best gaming experiences 
                are shared. That ₱15 could buy you not just internet access, but friendship, 
                competition, and memories that would last a lifetime.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-amber-300 font-semibold italic">
                  "We didn't just play games. We built communities. We forged friendships. 
                  We created memories—₱15 at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-amber-900/30 border border-amber-500/30 rounded-lg text-amber-300 text-sm hover:bg-amber-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/sms-revolution">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
                >
                  ← Previous
                </motion.button>
              </Link>

              <Link href="/timeline/technology/friendster-era">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  Next →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
