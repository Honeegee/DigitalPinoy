'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowLeft, Trophy, Users, Heart, Star, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

interface Fight {
  id: string;
  opponent: string;
  date: string;
  venue: string;
  result: string;
  description: string;
  significance: string;
  highlights: string[];
}

interface CommunityMessage {
  author: string;
  message: string;
  timestamp: string;
  location: string;
}

export default function PacquiaoExhibit() {
  const [selectedFight, setSelectedFight] = useState<Fight | null>(null);
  const [isWatching, setIsWatching] = useState(false);
  const [pusoMeter, setPusoMeter] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentRound, setCurrentRound] = useState(1);
  const [showCommunity, setShowCommunity] = useState(true);

  const historicFights: Fight[] = [
    {
      id: 'delahoya',
      opponent: 'Oscar De La Hoya',
      date: 'December 6, 2008',
      venue: 'MGM Grand, Las Vegas',
      result: 'Victory by Decision',
      description: 'The fight that announced Pacquiao as boxing\'s biggest star',
      significance: 'First fighter to win world titles in six different weight classes',
      highlights: ['Knocked down De La Hoya in Round 3', 'Dominated throughout 12 rounds', 'Philippines declared national holiday']
    },
    {
      id: 'hatton',
      opponent: 'Ricky Hatton',
      date: 'May 2, 2009',
      venue: 'MGM Grand, Las Vegas',
      result: 'Victory by KO (Round 2)',
      description: 'One of the most devastating knockouts in boxing history',
      significance: 'Showed Pacquiao\'s incredible power at welterweight',
      highlights: ['Perfect left hook knockout', 'Hatton unconscious for 2 minutes', 'Entire Philippines erupted in celebration']
    },
    {
      id: 'cotto',
      opponent: 'Miguel Cotto',
      date: 'November 14, 2009',
      venue: 'MGM Grand, Las Vegas',
      result: 'Victory by TKO (Round 12)',
      description: 'Brutal war that showcased Pacquiao\'s heart and determination',
      significance: 'Won WBO Welterweight title',
      highlights: ['Knockdown in Round 3', 'Bloodied but never quit', 'Corner stopped fight in final round']
    }
  ];

  const communityMessages: CommunityMessage[] = [
    {
      author: 'Tito Boy from Quezon City',
      message: 'MANNY!!! PUSO!!! Nakakagigil yung laban na yan! Naalala ko nanunuod kami sa barangay, lahat nagsisigawan!',
      timestamp: '2 minutes ago',
      location: 'QC'
    },
    {
      author: 'Maria Santos',
      message: 'Grabe yung knockout kay Hatton! Nandun ako sa Araneta watching party, umiyak ako sa tuwa!',
      timestamp: '5 minutes ago',
      location: 'Manila'
    },
    {
      author: 'Jun from Davao',
      message: 'Pride of Mindanao! Pang-8th division na to! GOAT talaga si Pacman!',
      timestamp: '8 minutes ago',
      location: 'Davao'
    },
    {
      author: 'Ate Luz',
      message: 'Nakakagigil! Yung whole street namin nagsigawan nung nanalo! Mga kapitbahay nagkakantahan pa ng lupang hinirang!',
      timestamp: '12 minutes ago',
      location: 'Cebu'
    }
  ];

  const achievements = [
    { title: 'Only 8-Division World Champion', icon: '👑' },
    { title: 'Fighter of the Decade (2000s)', icon: '🏆' },
    { title: 'Congressional Medal of Achievement', icon: '🎖️' },
    { title: 'Order of Lakandula', icon: '⭐' },
    { title: 'Time Magazine 100 Most Influential', icon: '📰' },
    { title: 'Forbes Highest-Paid Athlete', icon: '💰' }
  ];

  useEffect(() => {
    if (isWatching && selectedFight) {
      const interval = setInterval(() => {
        setPusoMeter(prev => Math.min(prev + Math.random() * 15, 100));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isWatching, selectedFight]);

  const startWatching = (fight: Fight) => {
    setSelectedFight(fight);
    setIsWatching(true);
    setCurrentRound(1);
    setPusoMeter(30);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Philippine Flag Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-1/3 bg-blue-600"></div>
        <div className="w-full h-1/3 bg-red-600"></div>
        <div className="w-full h-1/3 bg-blue-600"></div>
      </div>

      {/* Boxing Arena Header */}
      <div className="bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 border-b-4 border-yellow-400 relative">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-yellow-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to Museum</span>
            </Link>

            <div className="text-center">
              <h1 className="text-4xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                PACQUIAO ARENA
              </h1>
              <div className="text-sm text-yellow-200">The People's Champion • Pambansang Kamao</div>
            </div>

            <div className="flex items-center gap-2 bg-white/20 rounded px-3 py-1">
              <span className="text-xs text-white">🇵🇭 LABAN PILIPINAS!</span>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-white hover:text-yellow-200"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Arena */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">

        {/* Pacquiao Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div
            className="rounded-lg p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B35, #FFA500, #FFD700)',
              boxShadow: '0 0 50px rgba(255,215,0,0.8), inset 0 0 30px rgba(255,255,255,0.3)'
            }}
          >
            <div className="text-center relative z-10">
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px #ff0000',
                    '0 0 40px #ff0000',
                    '0 0 60px #ff0000',
                    '0 0 40px #ff0000',
                    '0 0 20px #ff0000'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                MANNY "PACMAN" PACQUIAO
              </motion.div>
              <div className="text-2xl text-red-800 font-bold mb-2">
                🥊 EIGHT-DIVISION WORLD CHAMPION 🥊
              </div>
              <div className="text-lg text-blue-800">
                "I fight for my country, I fight for my people"
              </div>
            </div>

            {/* Boxing Gloves Animation */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 left-4 text-4xl"
            >
              🥊
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute top-4 right-4 text-4xl"
            >
              🥊
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Sidebar - Fight Selection */}
          <div className="space-y-6">

            {/* Fight Selection */}
            <div className="bg-white rounded-lg p-4 border-4 border-red-600 shadow-2xl">
              <h3 className="font-bold text-red-800 mb-4 text-center text-lg">
                🏆 LEGENDARY FIGHTS 🏆
              </h3>
              <div className="space-y-3">
                {historicFights.map((fight) => (
                  <motion.button
                    key={fight.id}
                    onClick={() => startWatching(fight)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-3 rounded border-2 text-left transition-all ${
                      selectedFight?.id === fight.id
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-300 bg-white hover:border-red-400'
                    }`}
                  >
                    <div className="font-bold text-red-700">vs {fight.opponent}</div>
                    <div className="text-sm text-gray-600">{fight.date}</div>
                    <div className="text-xs text-blue-600 mt-1">{fight.result}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Puso Meter */}
            <div className="bg-white rounded-lg p-4 border-4 border-blue-600 shadow-2xl">
              <h3 className="font-bold text-blue-800 mb-4 text-center">
                🇵🇭 PUSO METER 🇵🇭
              </h3>
              <div className="space-y-3">
                <div className="text-center text-lg font-bold text-red-600">
                  National Pride: {Math.round(pusoMeter)}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 border-2 border-red-400">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${pusoMeter}%` }}
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #ff0000, #ffff00, #0000ff)',
                      boxShadow: 'inset 0 0 10px rgba(255,255,255,0.5)'
                    }}
                  />
                </div>
                <div className="text-center text-sm text-gray-600">
                  {pusoMeter > 80 ? 'LABAN PILIPINAS!' :
                   pusoMeter > 60 ? 'Proud Pinoy!' :
                   pusoMeter > 40 ? 'Suportahan natin!' : 'Start watching!'}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg p-4 border-4 border-yellow-500 shadow-2xl">
              <h3 className="font-bold text-yellow-700 mb-4 text-center">
                🏅 ACHIEVEMENTS 🏅
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 p-2 bg-yellow-50 rounded border border-yellow-300"
                  >
                    <span className="text-lg">{achievement.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{achievement.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Fight Viewer */}
          <div className="lg:col-span-2 space-y-6">

            {/* Fight Viewer */}
            <div className="bg-black rounded-lg overflow-hidden border-4 border-red-600 shadow-2xl">
              {selectedFight ? (
                <div>
                  {/* Fight Header */}
                  <div className="bg-gradient-to-r from-red-600 to-blue-600 p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h3 className="font-bold text-lg">PACQUIAO vs {selectedFight.opponent}</h3>
                        <div className="text-sm">{selectedFight.venue} • {selectedFight.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-bold">ROUND {currentRound}</div>
                        <div className="text-sm">3:00</div>
                      </div>
                    </div>
                  </div>

                  {/* Video Placeholder */}
                  <div className="relative h-64 bg-gray-900 flex items-center justify-center">
                    {isWatching ? (
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="text-6xl mb-4"
                        >
                          🥊
                        </motion.div>
                        <div className="text-2xl font-bold mb-2">FIGHT IN PROGRESS</div>
                        <div className="text-lg">Pacquiao dominating!</div>

                        <motion.button
                          onClick={() => setIsWatching(false)}
                          whileHover={{ scale: 1.05 }}
                          className="mt-4 px-4 py-2 bg-red-600 text-white rounded flex items-center gap-2 mx-auto"
                        >
                          <Pause className="w-4 h-4" />
                          Pause
                        </motion.button>
                      </div>
                    ) : (
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">📺</div>
                        <div className="text-xl mb-4">Ready to watch {selectedFight.opponent} fight?</div>
                        <motion.button
                          onClick={() => setIsWatching(true)}
                          whileHover={{ scale: 1.05 }}
                          className="px-6 py-3 bg-red-600 text-white rounded flex items-center gap-2 mx-auto"
                        >
                          <Play className="w-5 h-5" />
                          Start Fight
                        </motion.button>
                      </div>
                    )}
                  </div>

                  {/* Fight Info */}
                  <div className="p-4 bg-gray-100">
                    <h4 className="font-bold text-gray-800 mb-2">{selectedFight.description}</h4>
                    <p className="text-gray-600 text-sm mb-3">{selectedFight.significance}</p>

                    <div>
                      <h5 className="font-bold text-gray-700 mb-2">Fight Highlights:</h5>
                      <ul className="space-y-1">
                        {selectedFight.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🥊</div>
                    <div className="text-xl">Select a fight to begin the experience</div>
                  </div>
                </div>
              )}
            </div>

            {/* Community Watch Party */}
            <div className="bg-white rounded-lg p-4 border-4 border-green-600 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-green-800 text-lg">
                  🏠 BARANGAY WATCH PARTY 🏠
                </h3>
                <div className="flex items-center gap-2 text-green-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{communityMessages.length} Watching</span>
                </div>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                <AnimatePresence>
                  {communityMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-50 rounded border border-green-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-green-700">{msg.author}</span>
                            <span className="text-xs bg-green-200 px-2 py-1 rounded text-green-700">
                              {msg.location}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm">{msg.message}</p>
                        </div>
                        <span className="text-xs text-gray-500">{msg.timestamp}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-300">
                <div className="text-sm text-yellow-800">
                  💬 Join the conversation! Share your Pacquiao fight memories and show your Filipino pride!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Museum Info */}
        <div className="mt-8 text-center text-sm text-gray-300 bg-black/50 rounded p-4">
          <p>This exhibit recreates the communal experience of watching Manny Pacquiao fights that united the entire Philippines.
          From barangays to watch parties, Pacquiao brought the nation together like no other athlete.</p>
        </div>
      </div>
    </div>
  );
}