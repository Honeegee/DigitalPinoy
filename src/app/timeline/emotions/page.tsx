'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';


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
        backgroundImage: 'url(/DigitalPinoy/images/ehall.jpg)',
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

          {/* Emotions Timeline Content */}
          <div className="relative z-10 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Emotions Evolution Through Decades
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                How Filipinos humanized technology with love, laughter, and genuine connections.
              </p>

              {/* Decade Timeline */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    period: '2000-2010',
                    title: 'Hugot Era',
                    description: 'Friendster testimonials, SMS emotions, teleserye bonding, Pacquiao pride.',
                    icon: '💝',
                    color: 'from-pink-500 to-red-500',
                    highlights: ['Friendster Testimonials', 'SMS Emotions', 'Teleserye Bonding', 'Pacquiao Pride']
                  },
                  {
                    period: 'Present (2024)',
                    title: 'Digital Empathy',
                    description: 'Mental health awareness, online support communities, emotional AI tools.',
                    icon: '❤️',
                    color: 'from-purple-500 to-indigo-500',
                    highlights: ['Mental Health', 'Online Support', 'Emotional AI', 'Digital Wellness']
                  },
                  {
                    period: 'Future (2030)',
                    title: 'Emotional Intelligence',
                    description: 'AI emotional companions, neuro-tech interfaces, digital empathy networks.',
                    icon: '🧠',
                    color: 'from-orange-500 to-yellow-500',
                    highlights: ['AI Companions', 'Neuro-Tech', 'Empathy Networks', 'Digital Therapy']
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.period}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`bg-gradient-to-br ${phase.color} p-6 rounded-2xl backdrop-blur-sm border border-white/20`}
                  >
                    <div className="text-4xl mb-4">{phase.icon}</div>
                    <div className="text-sm font-bold text-white mb-2">{phase.period}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{phase.description}</p>
                    <div className="space-y-1">
                      {phase.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color}`}></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Key Emotional Milestones</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { year: '2003', event: 'Friendster Testimonials', impact: 'Digital love letters and friendship validation' },
                    { year: '2004', event: 'Teleserye Phenomenon', impact: 'Nationwide emotional bonding through TV dramas' },
                    { year: '2005', event: 'Pacquiao Rise', impact: 'National pride and unity through boxing victories' },
                    { year: '2006', event: 'Hugot Culture Born', impact: 'Filipino emotional expression goes digital' },
                    { year: '2008', event: 'Mental Health Awareness', impact: 'Online communities provide emotional support' },
                    { year: '2010', event: 'Meme Culture', impact: 'Visual humor becomes emotional language' }
                  ].map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-pink-400 min-w-[60px]">{milestone.year}</div>
                      <div>
                        <div className="font-semibold text-white">{milestone.event}</div>
                        <div className="text-sm text-gray-400">{milestone.impact}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
