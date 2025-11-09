'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Wifi, 
  Volume2, 
  Clock, 
  ArrowLeft,
  Calendar,
  TrendingUp,
  Zap,
  Users,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function DialUpPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [playingSound, setPlayingSound] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setPlayingSound(true);
    }
  };

  const stopNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlayingSound(false);
    }
  };

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
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-2xl shadow-blue-500/50"
          >
            <Wifi className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            The Dial-Up Era
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            The Sound of Internet: Beeps, Buzzes, and Digital Dreams
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-blue-900/30 backdrop-blur-sm border border-blue-500/50 rounded-full"
          >
            <p className="text-sm text-blue-300 font-semibold">
              2000-2005: The Soundtrack of Early Internet
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
                <span className="text-blue-400 font-semibold text-sm">Year 2000</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-blue-400">Digital Handshake</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Before broadband, before Wi-Fi—there was dial-up. 
                  The sound that meant you were connecting to the entire world.
                </p>
                <p>
                  That iconic sequence of beeps, buzzes, and static wasn't just noise—it was the sound of possibility. 
                  It meant you were about to enter a digital world where anything was possible.
                </p>
                <div className="bg-blue-900/20 border-l-4 border-blue-500 rounded p-4 mt-4">
                  <p className="text-blue-300 font-semibold">
                    "The sound that meant you were about to connect with the world."
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
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/dialup.jpg"
                  alt="Dial-up modem connection"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">The iconic 56k modem that connected Filipinos to the world.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Who still uses 56k modems and why? (n.d.). TechRadar. https://www.techradar.com/news/internet/who-still-uses-56k-modems-and-why-471022
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modem Showcase Section */}
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
              The <span className="text-blue-400">56k Experience</span>
            </h2>
            <p className="text-gray-400">When patience was a virtue</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Modem Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-blue-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/dialup.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <button className="absolute inset-0 flex items-center justify-center group">
                    <div className="w-16 h-16 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Volume2 className="w-8 h-8 text-white" />
                    </div>
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🔊 Classic Dial-Up Sound
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                56k!
              </motion.div>
            </motion.div>

            {/* Modem Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Dial-Up Experience</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '⏱️', title: 'Connection Time', desc: '30-60 seconds to connect' },
                  { icon: '📞', title: 'Phone Line', desc: 'Tied up the landline' },
                  { icon: '🐌', title: 'Speed', desc: '56kbps - 0.056 Mbps' },
                  { icon: '💸', title: 'Cost', desc: 'Per-minute charges' },
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

              {/* Sound Buttons */}
              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={playNotificationSound}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 hover:from-blue-600 hover:to-cyan-700 transition-all"
                >
                  <Volume2 className={`w-4 h-4 ${playingSound ? 'animate-pulse' : ''}`} />
                  {playingSound ? 'Playing...' : 'Play Dial-Up Sound'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={stopNotificationSound}
                  className="px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 hover:from-red-600 hover:to-red-700 transition-all"
                >
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                  Stop
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dial-Up Culture */}
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
              The <span className="text-cyan-400">Culture</span> of Waiting
            </h2>
            <p className="text-gray-400">Every minute counted</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Soundtrack',
                emoji: '🎵',
                message: 'Beep-boop-buzz-connect!',
                description: 'That iconic sequence became the soundtrack of early internet users.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'Phone Line Wars',
                emoji: '📞',
                message: 'Get off the internet!',
                description: 'The eternal battle between internet users and phone calls.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'Loading Patience',
                emoji: '⏳',
                message: 'Image loading... 1/10',
                description: 'Watching images load line by line, pixel by pixel.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'Offline Planning',
                emoji: '📝',
                message: 'Plan your clicks!',
                description: 'You had to plan your browsing because every minute cost money.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Disconnect',
                emoji: '❌',
                message: 'Someone picked up the phone!',
                description: 'The dreaded sound of someone picking up the landline.',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'Night Owls',
                emoji: '🌙',
                message: 'Cheaper rates at night',
                description: 'Staying up late for cheaper internet rates.',
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

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/DigitalPinoy/audios/dialup.mp3" preload="auto" />

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-blue-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Wifi className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, we have fiber optics, 5G, and instant connections. 
                But none of them captured the magic of that dial-up handshake.
              </p>
              <p>
                Dial-up taught us that <span className="text-blue-400 font-semibold">patience matters</span>. That anticipation builds excitement. 
                That the journey to connection was as important as the connection itself.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-blue-300 font-semibold italic">
                  "We didn't just connect to the internet. We earned it. We waited for it. 
                  We listened for it—one beep, one buzz, one connection at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/friendster-era">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
                >
                  ← Previous: Friendster Era
                </motion.button>
              </Link>
              <Link href="/timeline/technology/yahoo-messenger">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-yellow-900/30 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm hover:bg-yellow-900/50 transition-all"
                >
                  Next: Yahoo Messenger →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
