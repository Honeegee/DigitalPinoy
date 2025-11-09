'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageSquare, 
  Heart, 
  Phone, 
  Volume2, 
  ArrowLeft,
  Calendar,
  Users,
  TrendingUp,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function SMSRevolutionPage() {
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
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent"
          >
            The SMS Revolution
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            When 160 Characters Changed Everything
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-green-900/30 backdrop-blur-sm border border-green-500/50 rounded-full"
          >
            <p className="text-sm text-green-300 font-semibold">
              2000-2010: The Texting Capital of the World
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
                <span className="text-green-400 font-semibold text-sm">Year 2000</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                It Started with a <span className="text-green-400">Beep</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Before Facebook, before Twitter, before Instagram—there was SMS. 
                  A simple text message. 160 characters. That's all Filipinos needed 
                  to revolutionize communication.
                </p>
                <p>
                  In the year 2000, something extraordinary happened. The Philippines 
                  became the <span className="text-green-400 font-semibold">"Texting Capital of the World."</span> Not Silicon Valley. 
                  Not Tokyo. Manila.
                </p>
                <div className="bg-green-900/20 border-l-4 border-green-500 rounded p-4 mt-4">
                  <p className="text-green-300 font-semibold">
                    350 million text messages. Every. Single. Day.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-green-900/30 to-black rounded-xl border border-green-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/texting.jpg"
                  alt="Texting Capital of the World"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Philippines still SMS texting capital. (2010). <em>GameOps</em>. http://www.gameops.net/2010/08/philippines-still-sms-texting-capital.html
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nokia 3310 Section */}
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
              Meet the <span className="text-green-400">Legend</span>
            </h2>
            <p className="text-gray-400">The phone that survived everything</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Nokia 3310 Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-green-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/technology/3310.gif')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <button className="absolute inset-0 flex items-center justify-center group">
                    <div className="w-16 h-16 rounded-full bg-green-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Volume2 className="w-8 h-8 text-white" />
                    </div>
                  </button>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      📹 3D Interactive Nokia 3310 Model
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Nokia 3310 [GIF]. (n.d.). GIPHY. https://giphy.com/gifs/jJB6GOY0sh4Iv2tRSV
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Indestructible!
              </motion.div>
            </motion.div>

            {/* Nokia 3310 Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Nokia 3310</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🔋', title: 'Battery Life', desc: '7 days standby. Charge once a week!' },
                  { icon: '💪', title: 'Durability', desc: 'Dropped 100 times? Still works.' },
                  { icon: '🎮', title: 'Snake II', desc: 'The only game you needed.' },
                  { icon: '⚡', title: 'T9 Texting', desc: 'Master the art of predictive text.' },
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

              {/* Sound Buttons */}
              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={playNotificationSound}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold text-sm flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <Volume2 className={`w-4 h-4 ${playingSound ? 'animate-pulse' : ''}`} />
                  {playingSound ? 'Playing...' : 'Play Nokia Tune'}
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

      {/* How Filipinos Used SMS */}
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
              How We <span className="text-green-400">Texted</span>
            </h2>
            <p className="text-gray-400">Every message told a story</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Morning Ritual',
                emoji: '☀️',
                message: 'GM po! ☺️',
                description: 'Every day started with "Good Morning po!" Respect, even in 160 characters.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'Love Language',
                emoji: '💕',
                message: '143 means I ♥ U',
                description: 'Codes became poetry. 143 (I Love You), 831 (8 letters, 3 words, 1 meaning).',
                color: 'from-pink-500/20 to-red-500/20 border-pink-500/30'
              },
              {
                title: 'The Check-In',
                emoji: '📍',
                message: 'Wer na u?',
                description: '"Where are you na?" Because tracking apps didn\'t exist yet.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'The Invitation',
                emoji: '🎉',
                message: 'Gig 2nyt! C u!',
                description: 'Text abbreviations weren\'t lazy—they were efficient. And cool.',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Apology',
                emoji: '🙏',
                message: 'Sry na po. Pls?',
                description: 'Making peace via SMS. "Sorry na po" could fix everything.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'The Forwarded Prayer',
                emoji: '🙏',
                message: 'Send 2 10 ppl 4 blessings',
                description: 'Chain messages promising blessings. We all sent them, just in case.',
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

      {/* EDSA 2 */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-green-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-green-900/30 to-black rounded-xl border border-green-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/edsa2.jpg"
                  alt="EDSA 2 SMS mobilization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  First Person: Why I joined the revolution—The girl of EDSA Dos [Video]. (n.d.). Rappler. https://www.rappler.com/voices/ispeak/first-person-why-i-joined-revolution-the-girl-edsa-dos-video
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
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">January 2001</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The Text Message That <span className="text-yellow-400">Toppled a President</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p className="text-yellow-300 font-semibold">
                  "Go 2 EDSA. Wear blk."
                </p>
                <p>
                  One message. Millions of phones. A nation mobilized.
                </p>
                <p>
                  EDSA 2 proved that SMS wasn't just for love letters and jokes. 
                  It was a tool for <span className="text-white font-semibold">revolution</span>. Filipinos used text messages 
                  to coordinate, organize, and overthrow a government.
                </p>
                <div className="bg-yellow-500/10 border-l-4 border-yellow-500 rounded-lg p-4 mt-4">
                  <p className="text-yellow-300 font-semibold italic">
                    "The first successful SMS-powered revolution in world history."
                  </p>
                  <p className="text-gray-400 text-xs mt-2">- International Media</p>
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
              By the <span className="text-green-400">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '350M', label: 'Texts per day', icon: MessageSquare, color: 'green' },
              { number: '₱1', label: 'Cost per text', icon: Phone, color: 'emerald' },
              { number: '160', label: 'Character limit', icon: TrendingUp, color: 'cyan' },
              { number: '#1', label: 'World ranking', icon: Sparkles, color: 'yellow' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-xl p-6 text-center hover:border-green-500/60 transition-all"
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


      {/* Hidden audio element */}
      <audio ref={audioRef} src="/DigitalPinoy/audios/3310sound.mp3" preload="auto" />

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-green-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, we have Messenger, Viber, WhatsApp, and a thousand other ways to communicate.
                But none of them changed the Philippines quite like SMS did.
              </p>
              <p>
                SMS taught us that <span className="text-green-400 font-semibold">words matter</span>. That creativity flourishes in constraints.
                That 160 characters is enough to say "I love you," "I'm sorry," or "Let's change the world."
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-green-300 font-semibold italic">
                  "We didn't just text. We revolutionized communication. We toppled a president.
                  We fell in love. We made history—160 characters at a time."
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
                className="flex items-center gap-2 px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/internet-cafe">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-amber-900/30 border border-amber-500/30 rounded-lg text-amber-300 text-sm hover:bg-amber-900/50 transition-all"
                >
                  Next: Internet Café Era →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
