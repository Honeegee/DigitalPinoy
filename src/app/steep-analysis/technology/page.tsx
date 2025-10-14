'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowLeft, Sparkles, Zap, Users, DollarSign, Scale, Palette, Leaf } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TechnologySteepPage() {
  const [selectedExhibit, setSelectedExhibit] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'gallery' | 'timeline'>('gallery');

  const exhibits = {
    Social: {
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      glowColor: 'shadow-cyan-500/50',
      title: 'Social Evolution',
      subtitle: 'How Filipinos Connected',
      artifacts: {
        past: {
          title: 'The Tambayan Era (2000-2010)',
          items: [
            { emoji: '🏪', label: 'Internet Cafes', desc: 'Our digital plazas' },
            { emoji: '📝', label: 'Friendster Testimonials', desc: 'Written friendships' },
            { emoji: '💬', label: 'Group Texting', desc: '160-character bonds' }
          ],
          atmosphere: 'Sounds of clicking keyboards, laughter echoing in dimly lit computer shops...'
        },
        present: {
          title: 'The Scroll Generation (2024)',
          items: [
            { emoji: '📱', label: 'Mobile-First Life', desc: 'Always connected' },
            { emoji: '👤', label: 'Influencer Culture', desc: 'New celebrities' },
            { emoji: '🎭', label: 'Social Media Identity', desc: 'Curated personas' }
          ],
          atmosphere: 'Endless scrolling, notifications pinging, lives lived through screens...'
        },
        future: {
          title: 'The Metaverse Barkada (2030)',
          items: [
            { emoji: '🥽', label: 'VR Social Spaces', desc: 'Virtual hangouts' },
            { emoji: '🤖', label: 'AI Companions', desc: 'Digital friends' },
            { emoji: '🌐', label: 'Decentralized Networks', desc: 'Own your data' }
          ],
          atmosphere: 'Avatars meeting in digital worlds, AI translating emotions in real-time...'
        }
      },
      trend: 'From physical tambayan to digital worlds',
      prediction: 'Hybrid reality where physical and digital blur completely'
    },
    Economic: {
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/50',
      title: 'Economic Transformation',
      subtitle: 'The Digital Peso',
      artifacts: {
        past: {
          title: 'Pisonet Economy (2000-2010)',
          items: [
            { emoji: '🪙', label: 'Load Cards', desc: '₱5 per hour' },
            { emoji: '💿', label: 'CD-R Burning', desc: 'Digital marketplace' },
            { emoji: '🎮', label: 'Gaming Rentals', desc: 'DOTA per hour' }
          ],
          atmosphere: 'Coins dropping in internet cafe slots, CD-Rs spinning, prepaid cards scratching...'
        },
        present: {
          title: 'Digital Economy Boom (2024)',
          items: [
            { emoji: '🛒', label: 'E-commerce', desc: 'Shopee generations' },
            { emoji: '💳', label: 'GCash/Maya', desc: 'Cashless lifestyle' },
            { emoji: '💼', label: 'Gig Economy', desc: 'Freelance nation' }
          ],
          atmosphere: 'Payment received notifications, online shopping carts filling, remote work from home...'
        },
        future: {
          title: 'Crypto & AI Commerce (2030)',
          items: [
            { emoji: '₿', label: 'Blockchain Payments', desc: 'Decentralized money' },
            { emoji: '🤖', label: 'AI Business Tools', desc: 'Automated entrepreneurship' },
            { emoji: '🏪', label: 'Virtual Stores', desc: 'Metaverse shops' }
          ],
          atmosphere: 'Smart contracts executing, AI handling customers, virtual storefronts in digital cities...'
        }
      },
      trend: 'From physical pesos to digital currencies',
      prediction: 'AI-powered micro-businesses accessible to all'
    },
    Political: {
      icon: Scale,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'shadow-purple-500/50',
      title: 'Political Awakening',
      subtitle: 'Digital Democracy',
      artifacts: {
        past: {
          title: 'SMS Revolution (2000-2010)',
          items: [
            { emoji: '✊', label: 'EDSA II', desc: 'Text power' },
            { emoji: '📲', label: 'Mass Forwarding', desc: 'Chain messages' },
            { emoji: '📰', label: 'Citizen Journalism', desc: 'Camera phones' }
          ],
          atmosphere: 'Text messages coordinating protests, forwarded political jokes, Nokia phones as weapons...'
        },
        present: {
          title: 'Social Media Politics (2024)',
          items: [
            { emoji: '📱', label: 'Twitter Activism', desc: 'Hashtag movements' },
            { emoji: '🎥', label: 'Facebook Live', desc: 'Unfiltered truth' },
            { emoji: '⚠️', label: 'Fake News Battle', desc: 'Truth vs lies' }
          ],
          atmosphere: 'Trending hashtags, viral videos exposing corruption, fact-checkers racing against time...'
        },
        future: {
          title: 'AI Governance (2030)',
          items: [
            { emoji: '🗳️', label: 'Blockchain Voting', desc: 'Unhackable elections' },
            { emoji: '🤖', label: 'AI Moderation', desc: 'Fair discourse' },
            { emoji: '🌐', label: 'Digital Rights', desc: 'New freedoms' }
          ],
          atmosphere: 'Transparent blockchain ballots, AI detecting manipulation, digital citizens demanding rights...'
        }
      },
      trend: 'From SMS coordination to platform democracy',
      prediction: 'Tech-enabled transparent governance'
    },
    Cultural: {
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      glowColor: 'shadow-orange-500/50',
      title: 'Cultural Expression',
      subtitle: 'Pinoy Digital Soul',
      artifacts: {
        past: {
          title: 'The Jejemons Era (2000-2010)',
          items: [
            { emoji: '💬', label: 'Jejemon Text', desc: 'pHuNkY sPeLLiNg' },
            { emoji: '🎮', label: 'Pinoyed Gaming', desc: 'Bobo mid GG' },
            { emoji: '📸', label: 'Multiply Albums', desc: 'Emo duck face' }
          ],
          atmosphere: 'Creative text speak, LAN parties with trashtalk, mirror selfies with Friendster angles...'
        },
        present: {
          title: 'Content Creator Nation (2024)',
          items: [
            { emoji: '🎬', label: 'TikTok Stars', desc: 'Dance challenges' },
            { emoji: '🎵', label: 'Digital OPM', desc: 'Spotify hugot' },
            { emoji: '😂', label: 'Meme Culture', desc: 'Filipino humor' }
          ],
          atmosphere: '15-second fame, viral dances, hugot playlists on loop, memes in every group chat...'
        },
        future: {
          title: 'AI-Augmented Creativity (2030)',
          items: [
            { emoji: '🎨', label: 'AI-Generated Art', desc: 'Filipino aesthetics' },
            { emoji: '🎪', label: 'Virtual Festivals', desc: 'Digital fiesta' },
            { emoji: '🏛️', label: 'Digital Heritage', desc: 'Preserved culture' }
          ],
          atmosphere: 'AI creating OPM, virtual Sinulog in the metaverse, ancestors stories in VR museums...'
        }
      },
      trend: 'From text creativity to AI-augmented expression',
      prediction: 'Filipino culture preserved and evolved digitally'
    },
    Environmental: {
      icon: Leaf,
      color: 'from-teal-500 to-green-500',
      glowColor: 'shadow-teal-500/50',
      title: 'Environmental Impact',
      subtitle: 'Digital Carbon Footprint',
      artifacts: {
        past: {
          title: 'Unaware Consumption (2000-2010)',
          items: [
            { emoji: '🖥️', label: 'CRT Monitors', desc: 'Energy guzzlers' },
            { emoji: '🗑️', label: 'E-waste Piles', desc: 'Discarded tech' },
            { emoji: '💡', label: '24/7 Cafes', desc: 'Always-on lights' }
          ],
          atmosphere: 'Humming CRT screens, stacks of old electronics in corners, AC units running constantly...'
        },
        present: {
          title: 'Growing Awareness (2024)',
          items: [
            { emoji: '♻️', label: 'E-waste Recycling', desc: 'Tech graveyards' },
            { emoji: '🌱', label: 'Green Tech Talk', desc: 'Eco-conscious' },
            { emoji: '☁️', label: 'Cloud Carbon', desc: 'Data center heat' }
          ],
          atmosphere: 'Recycling bins for gadgets, solar-powered charging stations, carbon footprint apps tracking...'
        },
        future: {
          title: 'Sustainable Digital (2030)',
          items: [
            { emoji: '🌞', label: 'Solar Data Centers', desc: 'Green cloud' },
            { emoji: '♻️', label: 'Circular Tech', desc: 'Zero waste' },
            { emoji: '🌍', label: 'Carbon-Neutral Net', desc: 'Clean internet' }
          ],
          atmosphere: 'Solar panels powering servers, biodegradable tech, AI optimizing energy for every click...'
        }
      },
      trend: 'From wasteful tech to sustainable innovation',
      prediction: 'Zero-carbon digital infrastructure'
    }
  };

  const periods = [
    { id: 'past', label: '2000-2010', emoji: '📅', color: 'from-blue-500 to-cyan-500' },
    { id: 'present', label: 'Present', emoji: '📍', color: 'from-cyan-500 to-teal-500' },
    { id: 'future', label: '2030', emoji: '🔮', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/images/exhibit.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95"></div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [Math.random() * 1000, Math.random() * 1000],
              y: [Math.random() * 1000, Math.random() * 1000],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Museum Header */}
      <div className="relative z-10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/timeline" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Exit Exhibition</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Cpu className="w-16 h-16 text-blue-400 mx-auto" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Technology Exhibition
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              STEEP Analysis Gallery
            </p>
            <p className="text-gray-400 italic mb-8">
              "Walk through the evolution of Filipino technology culture"
            </p>

            {/* View Mode Toggle */}
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('gallery')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'gallery'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700'
                }`}
              >
                🖼️ Gallery View
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('timeline')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'timeline'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-800/50 text-gray-400 border border-gray-700'
                }`}
              >
                ⏱️ Timeline View
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Exhibition Hall */}
      <div className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">

          {viewMode === 'gallery' ? (
            <>
              {/* Gallery Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Object.entries(exhibits).map(([key, exhibit], index) => {
                  const IconComponent = exhibit.icon;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onClick={() => setSelectedExhibit(selectedExhibit === key ? null : key)}
                      className={`relative cursor-pointer group rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                        selectedExhibit === key
                          ? `bg-gradient-to-br ${exhibit.color} border-white shadow-2xl ${exhibit.glowColor}`
                          : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {/* Museum Frame Effect */}
                      <div className="absolute inset-0 border-8 border-double border-yellow-600/20 pointer-events-none"></div>

                      <div className="p-8 relative">
                        <motion.div
                          animate={selectedExhibit === key ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.6 }}
                          className="mb-6"
                        >
                          <IconComponent className="w-16 h-16 mx-auto text-white" />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white text-center mb-2">
                          {exhibit.title}
                        </h3>
                        <p className="text-gray-300 text-center text-sm mb-4">
                          {exhibit.subtitle}
                        </p>

                        {selectedExhibit !== key && (
                          <div className="text-center text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to enter →
                          </div>
                        )}
                      </div>

                      {/* Museum Plaque */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded text-center">
                        <p className="text-yellow-400 text-xs font-mono">EXHIBIT {index + 1}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Selected Exhibit Display */}
              <AnimatePresence mode="wait">
                {selectedExhibit && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-4 border-yellow-600/30 shadow-2xl"
                  >
                    {/* Exhibit Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        {(() => {
                          const IconComponent = exhibits[selectedExhibit as keyof typeof exhibits].icon;
                          return <IconComponent className="w-12 h-12 text-cyan-400" />;
                        })()}
                        <div>
                          <h2 className={`text-4xl font-bold bg-gradient-to-r ${exhibits[selectedExhibit as keyof typeof exhibits].color} bg-clip-text text-transparent`}>
                            {exhibits[selectedExhibit as keyof typeof exhibits].title}
                          </h2>
                          <p className="text-gray-400">{exhibits[selectedExhibit as keyof typeof exhibits].subtitle}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedExhibit(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ✕
                      </motion.button>
                    </div>

                    {/* Timeline Artifacts */}
                    <div className="space-y-8">
                      {periods.map((period, idx) => {
                        const artifactData = exhibits[selectedExhibit as keyof typeof exhibits].artifacts[period.id as 'past' | 'present' | 'future'];
                        return (
                          <motion.div
                            key={period.id}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className={`bg-gradient-to-br ${period.color} bg-opacity-10 rounded-2xl p-6 border-2 border-white/10`}
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-4xl">{period.emoji}</span>
                              <div>
                                <h3 className="text-2xl font-bold text-white">{artifactData.title}</h3>
                                <p className="text-gray-400 text-sm italic">{artifactData.atmosphere}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {artifactData.items.map((item, i) => (
                                <motion.div
                                  key={i}
                                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                                  className="bg-black/40 rounded-xl p-4 border border-white/10 cursor-pointer"
                                >
                                  <div className="text-4xl mb-2 text-center">{item.emoji}</div>
                                  <div className="text-white font-bold text-sm text-center mb-1">{item.label}</div>
                                  <div className="text-gray-400 text-xs text-center">{item.desc}</div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Analysis Footer */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap className="w-5 h-5 text-blue-400" />
                          <h4 className="text-blue-300 font-bold uppercase text-sm">Observable Trend</h4>
                        </div>
                        <p className="text-gray-200">{exhibits[selectedExhibit as keyof typeof exhibits].trend}</p>
                      </div>
                      <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-purple-400" />
                          <h4 className="text-purple-300 font-bold uppercase text-sm">2030 Prediction</h4>
                        </div>
                        <p className="text-gray-200">{exhibits[selectedExhibit as keyof typeof exhibits].prediction}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            /* Timeline View */
            <div className="space-y-12">
              {periods.map((period, periodIdx) => (
                <motion.div
                  key={period.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: periodIdx * 0.2 }}
                  className={`bg-gradient-to-br ${period.color} bg-opacity-10 rounded-3xl p-8 border-2 border-white/20`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-6xl">{period.emoji}</span>
                    <div>
                      <h2 className="text-4xl font-bold text-white">{period.label}</h2>
                      <p className="text-gray-300">Across all aspects</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(exhibits).map(([key, exhibit]) => {
                      const IconComponent = exhibit.icon;
                      const artifactData = exhibit.artifacts[period.id as 'past' | 'present' | 'future'];
                      return (
                        <motion.div
                          key={key}
                          whileHover={{ scale: 1.03 }}
                          className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <IconComponent className="w-8 h-8 text-white" />
                            <h3 className="text-xl font-bold text-white">{exhibit.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {artifactData.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="text-2xl">{item.emoji}</span>
                                <div className="flex-1">
                                  <div className="text-white text-sm font-semibold">{item.label}</div>
                                  <div className="text-gray-400 text-xs">{item.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
