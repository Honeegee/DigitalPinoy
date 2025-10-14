'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// STEEP data structure
const steepData = {
  Social: {
    icon: '👥',
    color: 'cyan',
    glowColor: 'rgba(34, 211, 238, 0.6)',
    past: {
      key: 'Internet cafes as social hubs',
      artifacts: ['💻 Internet Café', '👫 Barkada Gaming', '📝 Friendster Testimonials']
    },
    present: {
      key: 'Social media dominance',
      artifacts: ['📱 Mobile-first', '👤 Influencers', '💬 Online Communities']
    },
    future: {
      key: 'VR social spaces',
      artifacts: ['🥽 VR Hangouts', '🤖 AI Friends', '🌐 Metaverse']
    },
    trends: 'Physical spaces → Digital platforms → Virtual worlds',
    impact: 'Hybrid social experiences blending digital & physical'
  },
  Economic: {
    icon: '💰',
    color: 'green',
    glowColor: 'rgba(34, 197, 94, 0.6)',
    past: {
      key: 'Internet cafe economy',
      artifacts: ['💳 Load Cards', '🎮 P20/hour', '💿 Pirated CDs']
    },
    present: {
      key: 'Digital economy boom',
      artifacts: ['🛒 E-commerce', '💸 GCash', '💼 Freelancing']
    },
    future: {
      key: 'Crypto & AI commerce',
      artifacts: ['₿ Cryptocurrency', '🤖 AI Business', '🌍 Global Micro-biz']
    },
    trends: 'Pay-per-hour → Subscription models → Decentralized economy',
    impact: 'Location-independent income; Blockchain integration'
  },
  Political: {
    icon: '⚖️',
    color: 'purple',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    past: {
      key: 'EDSA II text activism',
      artifacts: ['📱 SMS Coordination', '✊ Digital Mobilization', '📢 Text Brigades']
    },
    present: {
      key: 'Social media campaigns',
      artifacts: ['📣 Viral Movements', '⚠️ Misinformation', '📊 Data Politics']
    },
    future: {
      key: 'AI-moderated discourse',
      artifacts: ['🗳️ Blockchain Voting', '🤖 AI Moderation', '🌐 Digital Rights']
    },
    trends: 'SMS activism → Platform politics → Tech-regulated democracy',
    impact: 'Digital governance tools; Automated fact-checking'
  },
  Cultural: {
    icon: '🎭',
    color: 'orange',
    glowColor: 'rgba(249, 115, 22, 0.6)',
    past: {
      key: 'Filipino-ized tech use',
      artifacts: ['💬 SMS Culture', '🎮 Pinoy Gaming', '✨ Customized Profiles']
    },
    present: {
      key: 'Digital creators rise',
      artifacts: ['🎵 TikTok OPM', '🎨 Digital Art', '😂 Meme Culture']
    },
    future: {
      key: 'AI-generated Filipino content',
      artifacts: ['🤖 AI Content', '🎪 Virtual Fiestas', '🏛️ Digital Heritage']
    },
    trends: 'Adapting global tech → Creating content → Exporting culture',
    impact: 'AI-augmented Filipino creativity; Digital cultural preservation'
  },
  Environmental: {
    icon: '🌿',
    color: 'teal',
    glowColor: 'rgba(20, 184, 166, 0.6)',
    past: {
      key: 'E-waste from cafes',
      artifacts: ['🖥️ Old CRTs', '⚡ High Energy Use', '🗑️ Tech Waste']
    },
    present: {
      key: 'Growing awareness',
      artifacts: ['♻️ E-waste Programs', '📉 Carbon Tracking', '🌱 Green Tech']
    },
    future: {
      key: 'Sustainable tech',
      artifacts: ['☀️ Green Data Centers', '🔄 Circular Economy', '🌍 Carbon-neutral']
    },
    trends: 'Unaware consumption → Conscious usage → Sustainable tech',
    impact: 'Eco-friendly digital infrastructure; Tech recycling systems'
  }
};

const periods = [
  { id: 'past', label: '2000-2010', subtitle: 'The Golden Era', color: 'blue', emoji: '📅' },
  { id: 'present', label: 'Present', subtitle: '2024', color: 'cyan', emoji: '📍' },
  { id: 'future', label: '2030', subtitle: 'The Future', color: 'purple', emoji: '🔮' }
];

export default function TechnologyTimelinePage() {
  const [hoveredPedestal, setHoveredPedestal] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/ehall.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/timeline" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Timeline</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{
              background: 'linear-gradient(to right, rgb(96, 165, 250), rgb(34, 211, 238), rgb(96, 165, 250))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Technology Exhibition Hall
            </h1>
            <p className="text-xl text-gray-300">
              Explore the evolution of technology through time
            </p>
          </motion.div>
        </div>
      </div>

      {/* Exhibition Hall */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        {/* Hall Floor */}
        <div className="relative min-h-[600px] bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40 rounded-3xl p-8 border border-gray-700/30">

          {/* Perspective Grid Floor */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Pedestals Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {Object.entries(steepData).map(([category, data], idx) => {
              const periodData = data.past as { key: string; artifacts: string[] };
              const isHovered = hoveredPedestal === category;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Floating Label Above Pedestal */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isHovered ? 1 : 0.7,
                      y: isHovered ? -10 : 0
                    }}
                    className="mb-6 text-center"
                  >
                    <motion.div
                      animate={{
                        textShadow: isHovered
                          ? [`0 0 10px ${data.glowColor}`, `0 0 30px ${data.glowColor}`, `0 0 10px ${data.glowColor}`]
                          : '0 0 0px rgba(0,0,0,0)'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-3xl font-bold mb-2 text-white"
                      style={{
                        background: data.color === 'cyan' ? 'linear-gradient(to bottom right, rgb(34, 211, 238), rgb(6, 182, 212))' :
                                   data.color === 'green' ? 'linear-gradient(to bottom right, rgb(34, 197, 94), rgb(22, 163, 74))' :
                                   data.color === 'purple' ? 'linear-gradient(to bottom right, rgb(168, 85, 247), rgb(147, 51, 234))' :
                                   data.color === 'orange' ? 'linear-gradient(to bottom right, rgb(249, 115, 22), rgb(234, 88, 12))' :
                                   'linear-gradient(to bottom right, rgb(20, 184, 166), rgb(13, 148, 136))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {category}
                    </motion.div>
                    <div className="text-xs text-gray-400 max-w-[120px]">
                      {periodData.key}
                    </div>
                  </motion.div>

                  {/* Pedestal */}
                  <Link href={`/timeline/technology/${category.toLowerCase()}`}>
                    <motion.div
                      whileHover={{ y: -15, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredPedestal(category)}
                      onHoverEnd={() => setHoveredPedestal(null)}
                      className="relative cursor-pointer group"
                      style={{ perspective: '1000px' }}
                    >
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        boxShadow: isHovered
                          ? [
                              `0 0 20px ${data.glowColor}`,
                              `0 0 60px ${data.glowColor}`,
                              `0 0 20px ${data.glowColor}`
                            ]
                          : '0 0 0px rgba(0,0,0,0)'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl"
                    />

                    {/* Pedestal Base */}
                    <div className="relative">
                      {/* Top Display */}
                      <motion.div
                        animate={{
                          rotateX: isHovered ? 0 : 10,
                        }}
                        className={`w-32 h-32 rounded-2xl bg-gradient-to-br from-${data.color}-500/20 to-${data.color}-600/20 border-2 border-${data.color}-500/50 backdrop-blur-md flex items-center justify-center relative overflow-hidden`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Icon */}
                        <motion.div
                          animate={{
                            scale: isHovered ? [1, 1.2, 1] : 1,
                            rotateY: isHovered ? 360 : 0
                          }}
                          transition={{ duration: 1 }}
                          className="text-6xl z-10"
                        >
                          {data.icon}
                        </motion.div>

                        {/* Sparkles */}
                        {isHovered && (
                          <>
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 40],
                                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 40]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.1
                                }}
                                className="absolute"
                              >
                                <Sparkles className={`w-4 h-4 text-${data.color}-400`} />
                              </motion.div>
                            ))}
                          </>
                        )}

                        {/* Glass shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      </motion.div>

                      {/* Pedestal Column */}
                      <motion.div
                        animate={{
                          scaleY: isHovered ? 1.1 : 1
                        }}
                        className={`w-20 h-24 mx-auto mt-2 bg-gradient-to-b from-${data.color}-900/40 to-gray-900/60 border-x-2 border-${data.color}-500/30`}
                        style={{ transformOrigin: 'top' }}
                      />

                      {/* Pedestal Base */}
                      <div className={`w-28 h-4 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-${data.color}-500/30 rounded-sm`} />
                    </div>
                  </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
