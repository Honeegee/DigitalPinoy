'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ArrowLeft, Calendar, MapPin, Star, Cross } from 'lucide-react';
import Link from 'next/link';

interface CandleIntention {
  id: string;
  saint: string;
  intention: string;
  author: string;
  location: string;
  timestamp: string;
  color: string;
}

interface Fiesta {
  id: string;
  saint: string;
  date: string;
  location: string;
  description: string;
  traditions: string[];
  image: string;
  color: string;
}

interface Prayer {
  title: string;
  text: string;
  occasion: string;
}

export default function FaithFiestasExhibit() {
  const [candlesLit, setCandlesLit] = useState<CandleIntention[]>([]);
  const [selectedFiesta, setSelectedFiesta] = useState<Fiesta | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [prayerCount, setPrayerCount] = useState(1247);

  const fiestas: Fiesta[] = [
    {
      id: 'sinulog',
      saint: 'Santo Niño',
      date: 'Third Sunday of January',
      location: 'Cebu City',
      description: 'The grandest festival honoring the Child Jesus, featuring colorful street dancing and religious processions.',
      traditions: ['Street dancing in colorful costumes', 'Shouting "Pit Señor!"', 'Grand procession', 'Traditional drumbeats'],
      image: '/images/sinulog.jpg',
      color: '#FFD700'
    },
    {
      id: 'ati-atihan',
      saint: 'Santo Niño',
      date: 'Third Sunday of January',
      location: 'Kalibo, Aklan',
      description: 'The "Mother of All Philippine Festivals" with tribal dancing and face painting.',
      traditions: ['Black face painting', 'Tribal costumes', 'Hala Bira! chants', 'Street music and dancing'],
      image: '/images/ati-atihan.jpg',
      color: '#8B4513'
    },
    {
      id: 'nazarene',
      saint: 'Black Nazarene',
      date: 'January 9',
      location: 'Quiapo, Manila',
      description: 'One of the largest religious gatherings in Asia, known for intense devotion and miracles.',
      traditions: ['Barefoot procession', 'Touching the image', 'Purple robes', 'All-night vigil'],
      image: '/images/nazarene.jpg',
      color: '#800080'
    },
    {
      id: 'flores-de-mayo',
      saint: 'Blessed Virgin Mary',
      date: 'Month of May',
      location: 'Nationwide',
      description: 'Month-long celebration honoring the Virgin Mary with flower offerings and santacruzan.',
      traditions: ['Daily flower offerings', 'Santacruzan parade', 'Evening prayers', 'Crown ceremony'],
      image: '/images/flores-mayo.jpg',
      color: '#FFB6C1'
    }
  ];

  const prayers: Prayer[] = [
    {
      title: 'Prayer to Santo Niño',
      text: 'Santo Niño de Cebu, bless our families and keep us safe. Guide us with your innocent love and protect our children.',
      occasion: 'For family protection'
    },
    {
      title: 'Novena to Our Lady of Perpetual Help',
      text: 'Most Holy Virgin Mary, you are the refuge of all who are in trouble. Look upon me with mercy and help me in my need.',
      occasion: 'For personal troubles'
    },
    {
      title: 'Prayer for Healing',
      text: 'Lord Jesus, Divine Physician, heal our bodies, minds and spirits. Touch us with your healing hands.',
      occasion: 'For health and healing'
    }
  ];

  const sampleCandles: CandleIntention[] = [
    {
      id: '1',
      saint: 'Santo Niño',
      intention: 'Para sa kaligtasan ng pamilya ko, lalo na sa mga anak ko',
      author: 'Nanay Rosa',
      location: 'Cebu City',
      timestamp: '2 minutes ago',
      color: '#FFD700'
    },
    {
      id: '2',
      saint: 'Black Nazarene',
      intention: 'Para mahanap ko ng magandang trabaho at makakuha ng visa',
      author: 'Jun Dela Cruz',
      location: 'Manila',
      timestamp: '5 minutes ago',
      color: '#800080'
    },
    {
      id: '3',
      saint: 'Our Lady of Perpetual Help',
      intention: 'Para gumaling ang sakit ng tatay ko at maging okay ang results',
      author: 'Maria Santos',
      location: 'Bacolod',
      timestamp: '8 minutes ago',
      color: '#4169E1'
    },
    {
      id: '4',
      saint: 'San Antonio',
      intention: 'Para makahanap ng true love at maging happy sa buhay',
      author: 'Single ka Pa Rin',
      location: 'Baguio',
      timestamp: '12 minutes ago',
      color: '#FFB6C1'
    }
  ];

  useEffect(() => {
    setCandlesLit(sampleCandles);
  }, [sampleCandles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrayerCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const lightCandle = (saint: string, intention: string) => {
    const newCandle: CandleIntention = {
      id: Date.now().toString(),
      saint,
      intention,
      author: 'Anonymous Devotee',
      location: 'Philippines',
      timestamp: 'Just now',
      color: getRandomCandleColor()
    };
    setCandlesLit(prev => [newCandle, ...prev.slice(0, 7)]);
    setPrayerCount(prev => prev + 1);
  };

  const getRandomCandleColor = () => {
    const colors = ['#FFD700', '#FFB6C1', '#4169E1', '#800080', '#FF6347', '#32CD32'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2c1810 0%, #8b4513 30%, #daa520 60%, #2c1810 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Church Window Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-1/2 h-64">
          <div className="w-full h-full bg-gradient-to-b from-blue-600 via-purple-600 to-red-600 rounded-b-full" />
        </div>
      </div>

      {/* Sacred Header */}
      <div className="bg-gradient-to-r from-purple-900 via-gold-600 to-purple-900 border-b-4 border-gold-400 relative">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-gold-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to Museum</span>
            </Link>

            <div className="text-center">
              <h1 className="text-4xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                FAITH, FIESTAS & RITUALS
              </h1>
              <div className="text-sm text-gold-200">Sacred Traditions • Bayanihan Spirit</div>
            </div>

            <div className="flex items-center gap-2 bg-white/20 rounded px-3 py-1">
              <Cross className="w-4 h-4 text-white" />
              <span className="text-xs text-white">🙏 In Faith We Trust</span>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-white hover:text-gold-200"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Altar Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">

        {/* Sacred Heart Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div
            className="rounded-lg p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #DAA520, #FFD700, #FFA500, #FFD700, #DAA520)',
              boxShadow: '0 0 50px rgba(218,165,32,0.8), inset 0 0 30px rgba(255,255,255,0.3)'
            }}
          >
            <div className="text-center relative z-10">
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px #8b0000',
                    '0 0 40px #8b0000',
                    '0 0 60px #8b0000',
                    '0 0 40px #8b0000',
                    '0 0 20px #8b0000'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'serif' }}
              >
                ✝ SACRED COMMUNITY ✝
              </motion.div>
              <div className="text-xl text-purple-800 font-bold mb-2">
                🙏 Where Faith Unites Families 🙏
              </div>
              <div className="text-lg text-blue-800">
                "Ang pamilyang nagsasama-sama sa pananalangin, nagsasama-sama sa lahat"
              </div>
            </div>

            {/* Floating Angels */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 left-4 text-3xl"
            >
              👼
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute top-4 right-4 text-3xl"
            >
              👼
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Sidebar - Prayer Candles */}
          <div className="space-y-6">

            {/* Light a Candle Section */}
            <div className="bg-white rounded-lg p-4 border-4 border-gold-500 shadow-2xl">
              <h3 className="font-bold text-gold-700 mb-4 text-center text-lg">
                🕯️ LIGHT A PRAYER CANDLE 🕯️
              </h3>

              <div className="space-y-3">
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={(e) => {
                    if (e.target.value) {
                      lightCandle(e.target.value, "For guidance and blessings");
                    }
                  }}
                >
                  <option value="">Choose a Saint...</option>
                  <option value="Santo Niño">Santo Niño</option>
                  <option value="Black Nazarene">Black Nazarene</option>
                  <option value="Our Lady of Perpetual Help">Our Lady of Perpetual Help</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="Santa Rita">Santa Rita</option>
                </select>

                <textarea
                  placeholder="Enter your prayer intention..."
                  className="w-full p-2 border border-gray-300 rounded h-20 text-sm"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => lightCandle("Santo Niño", "For peace and blessings")}
                  className="w-full py-2 bg-gold-600 text-white rounded font-bold hover:bg-gold-700"
                >
                  🕯️ Light Candle
                </motion.button>
              </div>
            </div>

            {/* Recent Candles */}
            <div className="bg-white rounded-lg p-4 border-4 border-red-500 shadow-2xl">
              <h3 className="font-bold text-red-700 mb-4 text-center">
                🔥 RECENT PRAYERS 🔥
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {candlesLit.map((candle) => (
                  <motion.div
                    key={candle.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-3 rounded border-l-4"
                    style={{ borderColor: candle.color, backgroundColor: candle.color + '15' }}
                  >
                    <div className="flex items-start gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-lg"
                      >
                        🕯️
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-gray-800">{candle.saint}</div>
                        <p className="text-xs text-gray-600 italic">"{candle.intention}"</p>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>- {candle.author}</span>
                          <span>{candle.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Prayer Counter */}
            <div className="bg-white rounded-lg p-4 border-4 border-blue-500 shadow-2xl text-center">
              <h3 className="font-bold text-blue-700 mb-2">🙏 COMMUNITY PRAYERS 🙏</h3>
              <motion.div
                key={prayerCount}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-3xl font-bold text-blue-600"
              >
                {prayerCount.toLocaleString()}
              </motion.div>
              <div className="text-sm text-gray-600">prayers today</div>
            </div>
          </div>

          {/* Main Content - Fiesta Calendar */}
          <div className="lg:col-span-2 space-y-6">

            {/* Fiesta Showcase */}
            <div className="bg-white rounded-lg overflow-hidden border-4 border-purple-600 shadow-2xl">
              <div className="bg-gradient-to-r from-purple-600 to-gold-600 p-4">
                <h3 className="font-bold text-white text-xl text-center">
                  🎉 PHILIPPINE FIESTAS & CELEBRATIONS 🎉
                </h3>
              </div>

              {selectedFiesta ? (
                <div>
                  <div
                    className="h-48 relative"
                    style={{ backgroundColor: selectedFiesta.color + '20' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-8xl mb-4"
                        >
                          🎭
                        </motion.div>
                        <div className="text-2xl font-bold">{selectedFiesta.saint}</div>
                        <div className="text-lg">{selectedFiesta.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-bold text-2xl text-gray-800 mb-2">{selectedFiesta.saint} Festival</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedFiesta.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedFiesta.location}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{selectedFiesta.description}</p>

                    <h5 className="font-bold text-gray-800 mb-2">Festival Traditions:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedFiesta.traditions.map((tradition, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <Star className="w-4 h-4 text-gold-500" />
                          <span className="text-sm">{tradition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">⛪</div>
                  <div className="text-xl text-gray-600 mb-4">Select a fiesta to learn more</div>
                </div>
              )}
            </div>

            {/* Fiesta Selection */}
            <div className="grid grid-cols-2 gap-4">
              {fiestas.map((fiesta) => (
                <motion.button
                  key={fiesta.id}
                  onClick={() => setSelectedFiesta(fiesta)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedFiesta?.id === fiesta.id
                      ? 'border-gold-500 bg-gold-50'
                      : 'border-gray-300 bg-white hover:border-purple-400'
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3"
                    style={{ backgroundColor: fiesta.color }}
                  >
                    🎭
                  </div>
                  <div className="font-bold text-gray-800">{fiesta.saint}</div>
                  <div className="text-sm text-gray-600">{fiesta.location}</div>
                  <div className="text-xs text-gray-500 mt-1">{fiesta.date}</div>
                </motion.button>
              ))}
            </div>

            {/* Traditional Prayers */}
            <div className="bg-white rounded-lg p-4 border-4 border-green-600 shadow-2xl">
              <h3 className="font-bold text-green-700 mb-4 text-center text-lg">
                📿 TRADITIONAL PRAYERS 📿
              </h3>
              <div className="space-y-4">
                {prayers.map((prayer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-green-50 rounded border border-green-200"
                  >
                    <h4 className="font-bold text-green-800 mb-1">{prayer.title}</h4>
                    <p className="text-sm text-gray-700 italic mb-2">"{prayer.text}"</p>
                    <div className="text-xs text-green-600">- {prayer.occasion}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Museum Info */}
        <div className="mt-8 text-center text-sm text-gold-200 bg-black/50 rounded p-4">
          <p>This exhibit celebrates the deep Catholic faith that has been central to Filipino culture for centuries.
          From grand fiestas to intimate family prayers, faith continues to unite and strengthen Filipino communities worldwide.</p>
        </div>
      </div>
    </div>
  );
}
