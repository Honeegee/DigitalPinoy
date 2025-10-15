'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Smartphone, Heart, TrendingUp, Sparkles } from 'lucide-react';

export default function SMSRevolutionPage() {
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
              <MessageSquare className="w-6 h-6 text-green-400" />
              <span className="text-white font-semibold">SMS Revolution</span>
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  The SMS Revolution
                </h1>
                <p className="text-2xl text-gray-300 mt-2">Text Capital of the World</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Filipinos sent 350 million text messages per day, earning the title "Texting Capital of the World" and transforming communication forever.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Visuals & Statistics */}
            <div className="space-y-8">
              
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl border border-green-500/20 p-6"
              >
                <div className="aspect-video bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <p className="text-gray-400">Nokia 3310 - The Legend</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  The indestructible phone that powered the SMS revolution
                </p>
              </motion.div>

              {/* Statistics */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  By the Numbers
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-gray-300">Daily Texts</span>
                    <span className="text-green-400 font-bold text-xl">350M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-gray-300">Mobile Penetration</span>
                    <span className="text-green-400 font-bold text-xl">40%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <span className="text-gray-300">Characters per SMS</span>
                    <span className="text-green-400 font-bold text-xl">160</span>
                  </div>
                </div>
              </motion.div>

              {/* Cultural Impact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl border border-pink-500/20 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Cultural Impact
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Texting became our love language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>EDSA 2 mobilized via text messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Text poetry and romantic quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Daily ritual for millions</span>
                  </li>
                </ul>
              </motion.div>

            </div>

            {/* Right Column - Information & Timeline */}
            <div className="space-y-8">
              
              {/* Main Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">The Digital Revolution Begins</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    In the early 2000s, the Philippines earned the title "Texting Capital of the World" as Filipinos embraced SMS technology like no other nation. 
                    With 350 million text messages sent daily, mobile phones became more than just communication devices—they became extensions of our identity.
                  </p>
                  <p>
                    The 160-character limit forced creativity, giving birth to text shorthand like "GM po" (Good morning), "Txt bak" (Text back), 
                    and the iconic "143" (I love you). Texting wasn't just practical; it was emotional, political, and deeply cultural.
                  </p>
                  <p>
                    From mobilizing EDSA 2 protests to sending daily greetings to loved ones, SMS became the heartbeat of Filipino digital culture, 
                    proving that sometimes, 160 characters is all you need to change everything.
                  </p>
                </div>
              </motion.div>

              {/* Iconic Messages */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl border border-amber-500/20 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Iconic SMS Messages
                </h3>
                <div className="grid gap-3">
                  {[
                    { message: "GM po", meaning: "Good morning" },
                    { message: "Txt bak", meaning: "Text back" },
                    { message: "143", meaning: "I love you" },
                    { message: "Wer na u?", meaning: "Where are you?" },
                    { message: "CU l8r", meaning: "See you later" },
                    { message: "BRB", meaning: "Be right back" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                      <code className="text-amber-300 font-mono">{item.message}</code>
                      <span className="text-gray-300 text-sm">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Key Moments Timeline
                </h3>
                <div className="space-y-4">
                  {[
                    { year: '2001', event: 'EDSA 2 mobilized via text messages' },
                    { year: '2003', event: 'Text messaging peak in Philippines' },
                    { year: '2005', event: 'Mobile penetration reaches 40%' },
                    { year: '2008', event: 'Unlimited texting promos introduced' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                        <span className="text-blue-300 font-bold">{item.year}</span>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Visual History</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-black/30 rounded-xl border border-white/10 p-4 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">SMS Era Artifact</p>
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
            <span>📱 Mobile Revolution</span>
            <span>•</span>
            <span>💬 160 Characters</span>
            <span>•</span>
            <span>🇵🇭 Filipino Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
