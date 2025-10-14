'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Headphones, Gamepad2, MessageCircle, Clock, Users, ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';

interface Computer {
  id: number;
  status: 'occupied' | 'available' | 'maintenance';
  user?: string;
  activity: string;
  timeRemaining?: number;
}

export default function InternetCafeExhibit() {
  const [selectedComputer, setSelectedComputer] = useState<number | null>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState('10:30 PM');
  const [showDesktop, setShowDesktop] = useState(false);
  const [currentSong, setCurrentSong] = useState('Hale - The Day You Said Goodnight');
  const [isPlaying, setIsPlaying] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  const computers: Computer[] = [
    { id: 1, status: 'occupied', user: 'Jun16', activity: 'DOTA All-Stars', timeRemaining: 45 },
    { id: 2, status: 'occupied', user: 'GamerGirl123', activity: 'Counter-Strike', timeRemaining: 23 },
    { id: 3, status: 'available', activity: 'Available' },
    { id: 4, status: 'occupied', user: 'Kuya_Mark', activity: 'Yahoo Messenger', timeRemaining: 67 },
    { id: 5, status: 'occupied', user: 'StudentMode', activity: 'Friendster + Research', timeRemaining: 12 },
    { id: 6, status: 'available', activity: 'Available' },
    { id: 7, status: 'occupied', user: 'NightOwl2003', activity: 'Ragnarok Online', timeRemaining: 89 },
    { id: 8, status: 'maintenance', activity: 'Under Maintenance' },
    { id: 9, status: 'occupied', user: 'ChatMaster', activity: 'IRC + MP3 Download', timeRemaining: 156 },
    { id: 10, status: 'available', activity: 'Available' },
    { id: 11, status: 'occupied', user: 'TermPaper2k3', activity: 'Microsoft Word', timeRemaining: 234 },
    { id: 12, status: 'occupied', user: 'PhotoEdit', activity: 'Photoshop + Multiply', timeRemaining: 78 }
  ];

  const chatMessages = [
    { user: 'Jun16', message: 'sino gusto mag-team sa DOTA?', time: '10:28' },
    { user: 'GamerGirl123', message: 'tara CS nalang', time: '10:29' },
    { user: 'Kuya_Mark', message: 'may naghahanap ng internet card?', time: '10:30' },
    { user: 'NightOwl2003', message: 'RO server 1 anyone?', time: '10:31' }
  ];

  // Sound generation functions
  const playKeyboardClick = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(800 + Math.random() * 200, ctx.currentTime);
    oscillator.type = 'square';

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.1);
  };

  const playMouseClick = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(1200, ctx.currentTime);
    oscillator.type = 'square';

    gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.05);
  };

  const startAmbientSound = () => {
    if (!audioContextRef.current) return;
    const ctx = audioContextRef.current;

    // Air conditioning hum
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(60, ctx.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.02, ctx.currentTime);

    oscillator.start(ctx.currentTime);
    oscillatorRef.current = oscillator;
  };

  const stopAmbientSound = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }
  };

  const toggleAudio = () => {
    if (!audioEnabled) {
      // Initialize audio context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      startAmbientSound();

      // Random keyboard clicks
      const keyboardInterval = setInterval(() => {
        if (Math.random() < 0.3) playKeyboardClick();
      }, 500 + Math.random() * 1000);

      // Random mouse clicks
      const mouseInterval = setInterval(() => {
        if (Math.random() < 0.2) playMouseClick();
      }, 800 + Math.random() * 1500);

      // Store intervals for cleanup
      if (audioContextRef.current) {
        (audioContextRef.current as { keyboardInterval?: NodeJS.Timeout }).keyboardInterval = keyboardInterval;
        (audioContextRef.current as { mouseInterval?: NodeJS.Timeout }).mouseInterval = mouseInterval;
      }
    } else {
      stopAmbientSound();

      // Clear intervals
      if (audioContextRef.current) {
        const ctx = audioContextRef.current as { keyboardInterval?: NodeJS.Timeout; mouseInterval?: NodeJS.Timeout };
        if (ctx.keyboardInterval) clearInterval(ctx.keyboardInterval);
        if (ctx.mouseInterval) clearInterval(ctx.mouseInterval);
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    }
    setAudioEnabled(!audioEnabled);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        stopAmbientSound();
        const ctx = audioContextRef.current as { keyboardInterval?: NodeJS.Timeout; mouseInterval?: NodeJS.Timeout };
        if (ctx.keyboardInterval) clearInterval(ctx.keyboardInterval);
        if (ctx.mouseInterval) clearInterval(ctx.mouseInterval);
        audioContextRef.current.close();
      }
    };
  }, []);

  const getStatusColor = (status: Computer['status']) => {
    switch (status) {
      case 'occupied': return 'bg-red-500';
      case 'available': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getActivityIcon = (activity: string) => {
    if (activity.includes('DOTA') || activity.includes('Counter-Strike') || activity.includes('Ragnarok')) {
      return <Gamepad2 className="w-4 h-4" />;
    }
    if (activity.includes('Messenger') || activity.includes('IRC') || activity.includes('Chat')) {
      return <MessageCircle className="w-4 h-4" />;
    }
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-deep-navy py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-warm-sand hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Museum
          </Link>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                Internet Café / Gaming Arcade
              </h1>
              <p className="text-warm-sand text-lg">
                Step into the digital plaza where friendships were forged over DOTA battles and late-night chats.
              </p>
            </div>

            <div className="text-right">
              <div className="text-warm-sand text-sm">Current Time</div>
              <div className="text-2xl font-mono">{currentTime}</div>
              <button
                onClick={toggleAudio}
                className="mt-2 flex items-center gap-2 text-sm bg-muted-teal px-3 py-1 rounded hover:bg-opacity-80 transition-all"
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                Ambient Sound
              </button>
              {audioEnabled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-xs text-warm-sand"
                >
                  🔊 Playing: Keyboard clicks, mouse clicks, aircon hum, DOTA battle sounds...
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Café Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Computer Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-blue-400" />
                  NetCafe Pro - Computer Status
                </h2>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Maintenance</span>
                  </div>
                </div>
              </div>

              {/* Computer Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {computers.map((computer) => (
                  <motion.div
                    key={computer.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedComputer(computer.id);
                      if (audioEnabled) playMouseClick();
                    }}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedComputer === computer.id
                        ? 'border-blue-400 bg-blue-400/10'
                        : 'border-gray-600 hover:border-gray-500'
                    } ${computer.status === 'available' ? 'bg-gray-700' : 'bg-gray-800'}`}
                  >
                    {/* Status Indicator */}
                    <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${getStatusColor(computer.status)}`} />

                    {/* Computer Icon */}
                    <div className="text-center mb-3">
                      <Monitor className="w-8 h-8 mx-auto text-gray-400" />
                      <div className="text-lg font-mono font-bold mt-1">#{computer.id}</div>
                    </div>

                    {/* Computer Info */}
                    <div className="text-center text-sm">
                      {computer.user && (
                        <div className="text-blue-300 font-medium mb-1">{computer.user}</div>
                      )}
                      <div className="flex items-center justify-center gap-1 text-gray-300 mb-2">
                        {getActivityIcon(computer.activity)}
                        <span className="text-xs">{computer.activity}</span>
                      </div>
                      {computer.timeRemaining && (
                        <div className="text-yellow-300 text-xs flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3" />
                          {computer.timeRemaining}min
                        </div>
                      )}
                    </div>

                    {/* Computer Screen Effect */}
                    {computer.status === 'occupied' && (
                      <div className="absolute inset-2 bg-blue-500/5 rounded animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Real-time Chat Simulation */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  Café Chat (Public Channel)
                </h3>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.5 }}
                      className="text-sm"
                    >
                      <span className="text-blue-300">[{msg.time}]</span>
                      <span className="text-yellow-300 ml-2">{msg.user}:</span>
                      <span className="text-gray-200 ml-2">{msg.message}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-3 flex">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-600 text-white px-3 py-1 rounded-l text-sm outline-none"
                  />
                  <button className="bg-blue-600 px-4 py-1 rounded-r text-sm hover:bg-blue-700">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Classic Windows XP Desktop Simulation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-blue-600 rounded-xl overflow-hidden"
              style={{
                background: 'linear-gradient(45deg, #3d7fd8, #5ba0f2)',
                minHeight: '400px'
              }}
            >
              {/* Windows XP Taskbar */}
              <div className="h-full relative">
                <div className="absolute bottom-0 left-0 right-0 bg-blue-700 h-10 flex items-center px-2 border-t-2 border-blue-500">
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold hover:bg-green-700 transition-colors">
                    Start
                  </button>
                  <div className="flex-1 mx-2">
                    <div className="flex gap-1">
                      <div className="bg-blue-800 px-2 py-1 rounded text-xs text-white">Winamp</div>
                      <div className="bg-blue-800 px-2 py-1 rounded text-xs text-white">Internet Explorer</div>
                      <div className="bg-blue-800 px-2 py-1 rounded text-xs text-white">Friendster</div>
                    </div>
                  </div>
                  <div className="text-white text-xs">{currentTime}</div>
                </div>

                {/* Desktop Icons */}
                <div className="p-4 grid grid-cols-6 gap-4 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowDesktop(!showDesktop);
                      if (audioEnabled) playMouseClick();
                    }}
                    className="flex flex-col items-center cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 bg-yellow-600 rounded border-2 border-yellow-400 flex items-center justify-center text-2xl mb-1">
                      📁
                    </div>
                    <span className="text-xs text-center">My Computer</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="flex flex-col items-center cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 bg-blue-800 rounded border-2 border-blue-600 flex items-center justify-center text-2xl mb-1">
                      🌐
                    </div>
                    <span className="text-xs text-center">Internet Explorer</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="flex flex-col items-center cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 bg-orange-600 rounded border-2 border-orange-400 flex items-center justify-center text-2xl mb-1">
                      🎵
                    </div>
                    <span className="text-xs text-center">Winamp</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="flex flex-col items-center cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded border-2 border-red-400 flex items-center justify-center text-2xl mb-1">
                      🎮
                    </div>
                    <span className="text-xs text-center">DOTA</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="flex flex-col items-center cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 bg-gray-600 rounded border-2 border-gray-400 flex items-center justify-center text-2xl mb-1">
                      💀
                    </div>
                    <span className="text-xs text-center">Counter-Strike</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="flex flex-col items-center cursor-pointer text-white"
                  >
                    <div className="w-12 h-12 bg-purple-600 rounded border-2 border-purple-400 flex items-center justify-center text-2xl mb-1">
                      ⚔️
                    </div>
                    <span className="text-xs text-center">Ragnarok Online</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Classic Winamp Player */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-gray-800 rounded-xl p-4"
            >
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded p-3 max-w-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-green-400 text-xs font-mono">♪ Winamp v2.95 ♪</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                  </div>
                </div>

                <div className="bg-black p-2 rounded mb-2">
                  <div className="text-green-400 text-xs font-mono animate-pulse">
                    ♪ Now Playing: {currentSong}
                  </div>
                  <div className="text-green-400 text-xs mt-1">
                    <div className="flex items-center gap-1">
                      <div className="flex-1 bg-gray-700 h-1 rounded">
                        <motion.div
                          className="bg-green-400 h-1 rounded"
                          initial={{ width: "0%" }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 3, repeat: Infinity }}
                        ></motion.div>
                      </div>
                      <span className="text-xs">2:34</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      if (audioEnabled) playMouseClick();
                    }}
                    className="bg-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-500"
                  >
                    {isPlaying ? '⏸️' : '▶️'}
                  </button>
                  <button
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="bg-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-500"
                  >⏹️</button>
                  <button
                    onClick={() => {
                      if (audioEnabled) playMouseClick();
                    }}
                    className="bg-gray-600 px-2 py-1 rounded text-xs hover:bg-gray-500"
                  >⏭️</button>
                  <div className="flex-1 text-xs text-gray-400">
                    Playlist: OPM Hits 2005.m3u
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Food & Loading Counter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-yellow-800 rounded-xl p-4"
            >
              <h3 className="font-bold text-yellow-200 mb-3 flex items-center gap-2">
                🏪 Café Counter & Snacks
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-yellow-700 p-3 rounded text-center">
                  <div className="text-2xl mb-1">🍜</div>
                  <div className="text-yellow-200">Lucky Me!</div>
                  <div className="text-yellow-300">₱12</div>
                </div>
                <div className="bg-yellow-700 p-3 rounded text-center">
                  <div className="text-2xl mb-1">🥤</div>
                  <div className="text-yellow-200">Coke Mismo</div>
                  <div className="text-yellow-300">₱8</div>
                </div>
                <div className="bg-yellow-700 p-3 rounded text-center">
                  <div className="text-2xl mb-1">🍪</div>
                  <div className="text-yellow-200">SkyFlakes</div>
                  <div className="text-yellow-300">₱5</div>
                </div>
                <div className="bg-red-700 p-3 rounded text-center">
                  <div className="text-2xl mb-1">💳</div>
                  <div className="text-red-200">Internet Card</div>
                  <div className="text-red-300">₱20/hr</div>
                </div>
              </div>

              <div className="mt-4 bg-yellow-900 p-3 rounded">
                <div className="text-yellow-200 text-xs mb-2">📋 Current Promotions:</div>
                <div className="text-yellow-300 text-xs">
                  • 5hrs = ₱90 (save ₱10!) <br/>
                  • Overnight: 10PM-6AM = ₱120 <br/>
                  • Student Discount: ₱15/hr with ID
                </div>
              </div>
            </motion.div>

            {/* Tournament Bracket */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 bg-red-800 rounded-xl p-4"
            >
              <h3 className="font-bold text-red-200 mb-3 flex items-center gap-2">
                🏆 Weekly DOTA Tournament
              </h3>
              <div className="bg-red-900 p-3 rounded">
                <div className="text-red-200 text-sm mb-2">🗓️ Every Saturday 2PM</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-red-700 p-2 rounded">
                    <div className="text-red-200 font-bold">Semi-Finals:</div>
                    <div className="text-red-300">TeamBarkada vs PinoyPride</div>
                    <div className="text-red-300">NoobSlayers vs ProGamersPH</div>
                  </div>
                  <div className="bg-red-700 p-2 rounded">
                    <div className="text-red-200 font-bold">Prizes:</div>
                    <div className="text-yellow-300">1st: ₱2,000 + 50hrs</div>
                    <div className="text-gray-300">2nd: ₱1,000 + 25hrs</div>
                    <div className="text-orange-300">3rd: ₱500 + 10hrs</div>
                  </div>
                </div>
                <div className="mt-2 text-red-300 text-xs">
                  📝 Registration: ₱50 per team (5 players)
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 rounded-xl p-6 sticky top-24"
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-400" />
                Café Info
              </h3>

              {/* Current Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Occupied:</span>
                  <span className="text-red-400 font-bold">
                    {computers.filter(c => c.status === 'occupied').length}/12
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Available:</span>
                  <span className="text-green-400 font-bold">
                    {computers.filter(c => c.status === 'available').length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rate:</span>
                  <span className="text-yellow-400 font-bold">₱20/hour</span>
                </div>
              </div>

              {/* Popular Activities */}
              <div className="mb-6">
                <h4 className="font-semibold text-warm-sand mb-3">Popular Activities</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-red-400" />
                    <span>DOTA All-Stars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-orange-400" />
                    <span>Counter-Strike 1.6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4 text-purple-400" />
                    <span>Ragnarok Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <span>Yahoo Messenger</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-blue-400" />
                    <span>Friendster/Multiply</span>
                  </div>
                </div>
              </div>

              {/* Selected Computer Details */}
              {selectedComputer && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-700 rounded-lg p-4"
                >
                  {(() => {
                    const computer = computers.find(c => c.id === selectedComputer);
                    return computer ? (
                      <>
                        <h4 className="font-semibold mb-2">Computer #{computer.id}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className={`font-bold ${
                              computer.status === 'occupied' ? 'text-red-400' :
                              computer.status === 'available' ? 'text-green-400' : 'text-yellow-400'
                            }`}>
                              {computer.status}
                            </span>
                          </div>
                          {computer.user && (
                            <div className="flex justify-between">
                              <span>User:</span>
                              <span className="text-blue-300">{computer.user}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Activity:</span>
                            <span className="text-gray-200">{computer.activity}</span>
                          </div>
                          {computer.timeRemaining && (
                            <div className="flex justify-between">
                              <span>Time Left:</span>
                              <span className="text-yellow-300">{computer.timeRemaining} min</span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : null;
                  })()}
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-deep-navy rounded-xl p-6"
        >
          <h3 className="font-serif text-xl text-white mb-4">🎮 The Internet Café Era (2000-2010)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-warm-sand mb-2">Cultural Impact</h4>
              <ul className="space-y-1 text-muted-teal">
                <li>• Digital gathering places</li>
                <li>• Birth of Filipino esports</li>
                <li>• Social equalizer - shared access</li>
                <li>• Gateway to global gaming</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-warm-sand mb-2">Popular Games</h4>
              <ul className="space-y-1 text-muted-teal">
                <li>• DOTA All-Stars tournaments</li>
                <li>• Counter-Strike LAN parties</li>
                <li>• Ragnarok Online grinding</li>
                <li>• StarCraft strategy battles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-warm-sand mb-2">Beyond Gaming</h4>
              <ul className="space-y-1 text-muted-teal">
                <li>• Research for school projects</li>
                <li>• Social media and chat</li>
                <li>• Email and communication</li>
                <li>• Music and media downloads</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
