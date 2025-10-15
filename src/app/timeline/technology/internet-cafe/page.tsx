'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Coffee, Gamepad2, Monitor, Users, Sparkles } from 'lucide-react';

export default function InternetCafePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/DigitalPinoy/images/tech-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/timeline/technology" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Technology Hall</span>
            </Link>
            <div className="flex items-center gap-2">
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="text-white font-semibold">Internet Café Culture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Internet Café Culture
                </h1>
                <p className="text-2xl text-gray-300 mt-2">The ₱15/Hour Gateway</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Internet cafés became the Filipino digital hub—where friendships were forged and gaming addictions began.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Visuals & Features */}
            <div className="space-y-8">
              
              {/* Café Setup */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl border border-amber-500/20 p-6"
              >
                <div className="aspect-video bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                    <p className="text-gray-400">Classic Internet Café Setup</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  Rows of bulky CRT monitors, ₱15 per hour, ₱100 overnight packages
                </p>
              </motion.div>

              {/* Pricing & Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Café Features
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <span className="text-gray-300">Hourly Rate</span>
                    <span className="text-amber-400 font-bold text-xl">₱15</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <span className="text-gray-300">Overnight Package</span>
                    <span className="text-amber-400 font-bold text-xl">₱100</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <span className="text-gray-300">Snacks Available</span>
                    <span className="text-amber-400 font-bold text-xl">Instant Noodles</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Social Experience
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Where "tambayan" met technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>LAN parties and gaming tournaments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Friendships forged over games</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Community gathering spaces</span>
                  </li>
                </ul>
              </motion.div>

            </div>

            {/* Right Column - Information & Games */}
            <div className="space-y-8">
              
              {/* Main Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">The Digital Tambayan</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    In the early 2000s, internet cafés became the heart of Filipino digital culture. For just ₱15 per hour, 
                    Filipinos could access the world wide web, play games, and connect with friends in air-conditioned comfort.
                  </p>
                  <p>
                    The smell of instant noodles mixed with the sound of keyboard clicks and competitive gaming rage. 
                    These weren't just places to use the internet—they were social hubs where friendships were forged, 
                    gaming skills were honed, and digital culture was born.
                  </p>
                  <p>
                    From Ragnarok Online to DOTA, from Friendster profiles to Yahoo Messenger chats, internet cafés 
                    were where Filipinos first experienced the power of digital connection and community.
                  </p>
                </div>
              </motion.div>

              {/* Popular Games */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-purple-400" />
                  Popular Games
                </h3>
                <div className="grid gap-3">
                  {[
                    { game: "Ragnarok Online", era: "MMORPG Craze" },
                    { game: "DOTA", era: "National Obsession" },
                    { game: "Counter-Strike", era: "LAN Party Classic" },
                    { game: "StarCraft", era: "Strategy Masterpiece" },
                    { game: "Red Alert", era: "RTS Legend" },
                    { game: "Gunbound", era: "Casual Favorite" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-purple-300 font-medium">{item.game}</span>
                      <span className="text-gray-300 text-sm">{item.era}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  Internet Café Timeline
                </h3>
                <div className="space-y-4">
                  {[
                    { year: '2002', event: 'Internet café boom begins nationwide' },
                    { year: '2003', event: 'Ragnarok Online fever hits PH' },
                    { year: '2005', event: 'DOTA becomes national obsession' },
                    { year: '2008', event: 'Overnight gaming packages popular' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <span className="text-green-300 font-bold">{item.year}</span>
                      </div>
                      <p className="text-gray-300 pt-2 group-hover:text-white transition-colors">{item.event}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Internet Café Memories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-black/30 rounded-xl border border-white/10 p-4 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Coffee className="w-12 h-12 text-amber-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Café Scene</p>
                    <p className="text-gray-500 text-xs">Image coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            Part of the <span className="text-white font-semibold">Digital Pinoy Museum</span> - Technology Hall
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
            <span>🎮 Gaming Culture</span>
            <span>•</span>
            <span>💻 ₱15/Hour</span>
            <span>•</span>
            <span>👥 Social Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
