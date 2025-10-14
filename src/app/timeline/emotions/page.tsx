'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// STEEP data structure for Emotions
const steepData = {
  Social: {
    icon: '👥',
    color: 'cyan',
    glowColor: 'rgba(34, 211, 238, 0.6)',
    past: {
      key: 'Testimonials as friendship validation',
      artifacts: ['💝 Friendster Testimonials', '📱 Group Text Chains', '📺 Teleserye Viewing Parties']
    },
    present: {
      key: 'Emojis & reactions',
      artifacts: ['😊 Emoji Language', '💬 Support Groups Online', '🧠 Mental Health Awareness']
    },
    future: {
      key: 'Emotion-sensing AI',
      artifacts: ['🤖 AI Empathy', '🌐 Virtual Empathy Spaces', '💚 Digital Wellness']
    },
    trends: 'Public displays → Nuanced expression → AI-mediated emotions',
    impact: 'Holistic digital well-being; AI emotional support systems'
  },
  Economic: {
    icon: '💰',
    color: 'green',
    glowColor: 'rgba(34, 197, 94, 0.6)',
    past: {
      key: 'OPM & entertainment sales',
      artifacts: ['💿 Album Sales', '🎫 Concert Tickets', '📺 Teleserye Merch']
    },
    present: {
      key: 'Emotional content monetization',
      artifacts: ['🎵 Streaming Revenue', '💼 Creator Economy', '🎭 Emotional Labor']
    },
    future: {
      key: 'NFT emotional art',
      artifacts: ['🖼️ Emotion NFTs', '🌐 Metaverse Experiences', '💆 Virtual Therapy Services']
    },
    trends: 'Physical products → Digital subscriptions → Virtual experiences',
    impact: 'Creator economy for feelings; Digital therapy market growth'
  },
  Political: {
    icon: '⚖️',
    color: 'purple',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    past: {
      key: 'Nationalist pride & shared emotions',
      artifacts: ['🥊 Pacquiao Unity', '📱 SMS Political Emotions', '🇵🇭 Collective Pride']
    },
    present: {
      key: 'Emotional polarization online',
      artifacts: ['😡 Online Anger', '📹 Viral Emotional Content', '⚡ Polarized Discussions']
    },
    future: {
      key: 'Emotion-verified voting',
      artifacts: ['🗳️ Emotional Voting', '🤖 AI Mediation', '🤝 Digital Unity Movements']
    },
    trends: 'Collective emotions → Fragmented feelings → AI-regulated discourse',
    impact: 'Emotion verification systems; Unity through shared values'
  },
  Cultural: {
    icon: '🎭',
    color: 'orange',
    glowColor: 'rgba(249, 115, 22, 0.6)',
    past: {
      key: 'Hugot culture born',
      artifacts: ['💔 Hugot Lines', '💕 Kilig Moments', '🤝 Digital Bayanihan']
    },
    present: {
      key: 'Meme emotional expression',
      artifacts: ['😂 Meme Culture', '🎵 TikTok Feelings', '📝 Digital Hugot Poetry']
    },
    future: {
      key: 'AI-generated hugot',
      artifacts: ['🤖 AI Hugot Generator', '🎪 Virtual Festivals', '🏛️ Digital Bayanihan 2.0']
    },
    trends: 'Text hugot → Visual memes → AI-generated emotional content',
    impact: 'Preservation of Filipino emotional vocabulary through tech'
  },
  Environmental: {
    icon: '🌿',
    color: 'teal',
    glowColor: 'rgba(20, 184, 166, 0.6)',
    past: {
      key: 'Limited awareness',
      artifacts: ['❓ Low Eco-awareness', '👨‍👩‍👧 Human Focus Only', '🌍 Disconnected from Nature']
    },
    present: {
      key: 'Climate anxiety rising',
      artifacts: ['😰 Eco-grief', '💚 Green Communities', '📢 Digital Activism']
    },
    future: {
      key: 'Eco-emotional AI',
      artifacts: ['🤖 Eco-emotional AI', '🌳 Virtual Nature Therapy', '♻️ Sustainable Emotional Tech']
    },
    trends: 'Unaware → Anxious → Healing through tech',
    impact: 'Emotion-driven environmental action; Tech for eco-healing'
  }
};

const periods = [
  { id: 'past', label: '2000-2010', subtitle: 'Hugot Era', color: 'pink', emoji: '💔' },
  { id: 'present', label: 'Present', subtitle: '2024', color: 'red', emoji: '❤️' },
  { id: 'future', label: '2030', subtitle: 'The Future', color: 'purple', emoji: '💜' }
];

export default function EmotionsTimelinePage() {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('past');
  const [selectedPedestal, setSelectedPedestal] = useState<string | null>(null);
  const [hoveredPedestal, setHoveredPedestal] = useState<string | null>(null);

  const currentPeriod = periods.find(p => p.id === selectedPeriod);

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
          <Link href="/timeline" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Timeline</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{
              background: 'linear-gradient(to right, rgb(244, 114, 182), rgb(248, 113, 113), rgb(244, 114, 182))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Emotions Exhibition Hall
            </h1>
            <p className="text-xl text-gray-300">
              Explore the evolution of Filipino emotions through time
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
              const periodData = (data as any)[selectedPeriod] as { key: string; artifacts: string[] };
              const isHovered = hoveredPedestal === category;
              const isSelected = selectedPedestal === category;

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
                      opacity: isHovered || isSelected ? 1 : 0.7,
                      y: isHovered ? -10 : 0
                    }}
                    className="mb-6 text-center"
                  >
                    <motion.div
                      animate={{
                        textShadow: isHovered || isSelected
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
                  <Link href={`/timeline/emotions/${category.toLowerCase()}`}>
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
                          boxShadow: isHovered || isSelected
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
                              scale: isHovered || isSelected ? [1, 1.2, 1] : 1,
                              rotateY: isHovered ? 360 : 0
                            }}
                            transition={{ duration: 1 }}
                            className="text-6xl z-10"
                          >
                            {data.icon}
                          </motion.div>

                          {/* Sparkles */}
                          {(isHovered || isSelected) && (
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

        {/* Artifact Display Panel */}
        <AnimatePresence>
          {selectedPedestal && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="mt-8 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${steepData[selectedPedestal as keyof typeof steepData].color}-500 to-${steepData[selectedPedestal as keyof typeof steepData].color}-600 flex items-center justify-center text-4xl shadow-lg`}
                    style={{
                      boxShadow: `0 0 40px ${steepData[selectedPedestal as keyof typeof steepData].glowColor}`
                    }}
                  >
                    {steepData[selectedPedestal as keyof typeof steepData].icon}
                  </motion.div>
                  <div>
                    <h3 className={`text-3xl font-bold bg-gradient-to-r from-${steepData[selectedPedestal as keyof typeof steepData].color}-400 to-${steepData[selectedPedestal as keyof typeof steepData].color}-600 bg-clip-text text-transparent mb-1`}>
                      {selectedPedestal}
                    </h3>
                  <p className="text-gray-400">
                    {(() => {
                      const data = steepData[selectedPedestal as keyof typeof steepData];
                      const periodData = (data as any)[selectedPeriod] as { key: string; artifacts: string[] };
                      return periodData.key;
                    })()}
                  </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPedestal(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Artifacts */}
              <div className="mb-6">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Key Artifacts
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(() => {
                    const data = steepData[selectedPedestal as keyof typeof steepData];
                    const periodData = (data as any)[selectedPeriod] as { key: string; artifacts: string[] };
                    return periodData.artifacts.map((artifact, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        className={`p-4 rounded-xl bg-gradient-to-br from-${data.color}-900/20 to-${data.color}-800/20 border border-${data.color}-500/30 hover:border-${data.color}-500/60 transition-all cursor-pointer`}
                      >
                        <div className="text-gray-200 font-medium">{artifact}</div>
                      </motion.div>
                    ));
                  })()}
                </div>
              </div>

              {/* Trends & Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/30`}>
                  <h4 className="text-pink-400 font-bold mb-3 text-sm uppercase flex items-center gap-2">
                    📊 Observable Trends
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {steepData[selectedPedestal as keyof typeof steepData].trends}
                  </p>
                </div>
                <div className={`p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30`}>
                  <h4 className="text-purple-400 font-bold mb-3 text-sm uppercase flex items-center gap-2">
                    🚀 Impact to 2030
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {steepData[selectedPedestal as keyof typeof steepData].impact}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
