'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Wifi,
  Music,
  Gamepad2,
  MessageSquare,
  Coffee,
  Zap,
  TrendingUp,
  Brain,
  Sparkles,
  Globe,
  Heart,
  Camera,
  Radio
} from 'lucide-react';
import FloatingSymbols from '@/components/ui/FloatingSymbols';
import Link from 'next/link';

export default function TechnologyTimelinePage() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      {/* Header */}
      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/timeline" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <Zap className="w-5 h-5" />
            <span>Back to Timeline</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-blue-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Digital Revolution Hall
              </h1>
            </div>
            <p className="text-2xl text-gray-300 mb-4">Technology: From Dial-Up Dreams to AI Reality</p>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore how technology transformed Filipino life across three defining eras—from internet cafés and Nokia phones to AI companions and the metaverse.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2000-2010: The Foundation Era */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent m-8">
              2000-2010: The Foundation Era
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Click on each exhibit to dive deep into the technological milestones that shaped Filipino digital culture
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'sms-revolution',
                title: 'SMS Revolution',
                subtitle: 'Text Capital of the World',
                icon: MessageSquare,
                color: 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30',
                href: '/timeline/technology/sms-revolution',
                position: { x: 5, y: 5 },
                imagePath: '/DigitalPinoy/images/sms.png'
              },
              {
                id: 'internet-cafe',
                title: 'Internet Café',
                subtitle: '₱15/Hour Gateway',
                icon: Coffee,
                color: 'bg-gradient-to-br from-amber-900/30 to-orange-900/30 border-amber-500/30',
                href: '/timeline/technology/internet-cafe',
                position: { x: 23, y: 5 },
                imagePath: '/DigitalPinoy/images/icafe.png'
              },
              {
                id: 'friendster-era',
                title: 'Friendster',
                subtitle: 'Digital Identity v1.0',
                icon: Sparkles,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/technology/friendster-era',
                position: { x: 42, y: 5 },
                imagePath: '/DigitalPinoy/images/friendster.png'
              },
              {
                id: 'dial-up',
                title: 'Dial-Up',
                subtitle: 'Sound of Internet',
                icon: Wifi,
                color: 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30',
                href: '/timeline/technology/dial-up',
                position: { x: 61, y: 5 },
                imagePath: '/DigitalPinoy/images/dialup.png'
              },
              {
                id: 'yahoo-messenger',
                title: 'Y! Messenger',
                subtitle: 'OG Chat App',
                icon: MessageSquare,
                color: 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30',
                href: '/timeline/technology/yahoo-messenger',
                position: { x: 80, y: 5 },
                imagePath: '/DigitalPinoy/images/ym.png'
              }
            ]}
            className="mt-0"
          />
        </div>
      </div>

      {/* Present Day: The Transformation */}
      <div className="relative z-10 py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent m-8">
              2020-2025: The Transformation
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Social media dominates. Content creation is a career. AI assists everything. The seeds planted in the 2000s have grown into a forest of possibility.
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'social-media-dominance',
                title: 'Social Media',
                subtitle: 'Algorithm Age',
                icon: TrendingUp,
                color: 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30',
                href: '/timeline/technology/social-media-dominance',
                position: { x: 15, y: 5 },
                imagePath: '/DigitalPinoy/images/social.png'
              },
              {
                id: 'mobile-gaming-esports',
                title: 'Mobile Gaming',
                subtitle: 'From Casual to Pro',
                icon: Gamepad2,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/technology/mobile-gaming-esports',
                position: { x: 37, y: 5 },
                imagePath: '/DigitalPinoy/images/mobilegame.png'
              },
              {
                id: 'content-creation-economy',
                title: 'Content Creation',
                subtitle: 'Everyone\'s a Creator',
                icon: Camera,
                color: 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30',
                href: '/timeline/technology/content-creation-economy',
                position: { x: 59, y: 5 },
                imagePath: '/DigitalPinoy/images/content.png'
              },
              {
                id: 'ai-integration',
                title: 'AI Integration',
                subtitle: 'Hello, AI',
                icon: Brain,
                color: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-500/30',
                href: '/timeline/technology/ai-integration',
                position: { x: 81, y: 5 },
                imagePath: '/DigitalPinoy/images/ai.png'
              }
            ]}
            className="mt-0"
          />
        </div>
      </div>

      {/* 2030: The Vision */}
      <div className="relative z-10 py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent m-8">
              2030: The Vision
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The future isn't written yet—but the trends point toward AI companions, metaverse communities, and the Philippines as a tech powerhouse. What will we create next?
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'metaverse-ph',
                title: 'Metaverse PH',
                subtitle: 'Virtual Barangays',
                icon: Sparkles,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/technology/metaverse-ph',
                position: { x: 18, y: 5 },
                imagePath: '/DigitalPinoy/images/metaverse.png'
              },
              {
                id: 'ai-companions',
                title: 'AI Companions',
                subtitle: 'Digital Kasama',
                icon: Brain,
                color: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-500/30',
                href: '/timeline/technology/ai-companions',
                position: { x: 41, y: 5 },
                imagePath: '/DigitalPinoy/images/aicompanion.png'
              },
              {
                id: 'holographic-communication',
                title: 'Holographic Comm',
                subtitle: 'Beyond Video Calls',
                icon: Radio,
                color: 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/30',
                href: '/timeline/technology/holographic-communication',
                position: { x: 64, y: 5 },
                imagePath: '/DigitalPinoy/images/hologram.png'
              }
            ]}
            className="mt-0"
          />
        </div>
      </div>

      {/* Museum Footer */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              The Digital Journey Continues
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              From the foundation of the 2000s to today's transformation and tomorrow's vision, 
              Filipino digital culture continues to evolve, innovate, and inspire. 
              Each era builds upon the last, creating a uniquely Filipino digital identity.
            </p>
          </div>

          {/* Navigation to Other Halls */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/timeline/emotions">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-xl border border-pink-500/20 p-6 hover:border-pink-500/40 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Heart className="w-8 h-8 text-pink-400" />
                  <div>
                    <h4 className="text-xl font-bold text-white">Emotions Hall</h4>
                    <p className="text-sm text-gray-400">Heart & Soul Gallery</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Explore how Filipino emotions evolved from hugot culture to digital empathy.</p>
              </motion.div>
            </Link>

            <Link href="/timeline/globalization">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl border border-green-500/20 p-6 hover:border-green-500/40 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Globe className="w-8 h-8 text-green-400" />
                  <div>
                    <h4 className="text-xl font-bold text-white">Globalization Hall</h4>
                    <p className="text-sm text-gray-400">World Connections Pavilion</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Discover how global trends merged with Filipino identity to create unique culture.</p>
              </motion.div>
            </Link>
          </div>

          {/* Museum Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Part of the <span className="text-white font-semibold">Digital Pinoy Museum</span> Collection
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>📱 Interactive Exhibits</span>
              <span>•</span>
              <span>🎵 Soundscapes Available</span>
              <span>•</span>
              <span>🖼️ Authentic Artifacts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
