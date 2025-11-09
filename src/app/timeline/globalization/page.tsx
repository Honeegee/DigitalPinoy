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


export default function GlobalizationTimelinePage() {

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
          <Link href="/timeline" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors">
            <Globe className="w-5 h-5" />
            <span>Back to Timeline</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{
              background: 'linear-gradient(to right, rgb(74, 222, 128), rgb(52, 211, 153), rgb(74, 222, 128))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Globalization Exhibition Hall
            </h1>
            <p className="text-xl text-gray-300">
              Explore the impact of globalization on Filipino society
            </p>
          </motion.div>
        </div>
      </div>


      {/* 2000-2010: The Foundation Era */}
      <div className="relative z-10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              2000-2010: The Foundation Era
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Click on each exhibit to dive deep into the globalization milestones that shaped Filipino digital culture
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'harry-potter-phenomenon',
                title: 'Harry Potter',
                subtitle: 'Global Fandom',
                icon: Sparkles,
                color: 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30',
                href: '/timeline/globalization/harry-potter-phenomenon',
                position: { x: 10, y: 5 },
                imagePath: '/DigitalPinoy/images/harry.png'
              },
              {
                id: 'ofw-remittances',
                title: 'OFW Remittances',
                subtitle: 'Economic Lifeline',
                icon: TrendingUp,
                color: 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30',
                href: '/timeline/globalization/ofw-remittances',
                position: { x: 30, y: 5 },
                imagePath: '/DigitalPinoy/images/ofw.png'
              },
              {
                id: 'k-dramas',
                title: 'K-Dramas',
                subtitle: 'Cultural Import',
                icon: Camera,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/globalization/k-dramas',
                position: { x: 50, y: 5 },
                imagePath: '/DigitalPinoy/images/kdrama.png'
              },
              {
                id: 'pinoy-big-brother',
                title: 'Pinoy Big Brother',
                subtitle: 'Cultural Export',
                icon: Radio,
                color: 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30',
                href: '/timeline/globalization/pinoy-big-brother',
                position: { x: 70, y: 5 },
                imagePath: '/DigitalPinoy/images/PBB.png'
              },
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
              2020-2025: The Transformation
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Filipino creators dominate global platforms. Digital OFWs thrive. Cultural exports flourish.
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'digital-creators',
                title: 'Digital Creators',
                subtitle: 'Global Influence',
                icon: Camera,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/globalization/digital-creators',
                position: { x: 20, y: 5 },
                imagePath: '/DigitalPinoy/images/content.png'
              },
              {
                id: 'global-platforms',
                title: 'Global Platforms',
                subtitle: 'TikTok & YouTube',
                icon: TrendingUp,
                color: 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30',
                href: '/timeline/globalization/global-platforms',
                position: { x: 45, y: 5 },
                imagePath: '/DigitalPinoy/images/social.png'
              },
              {
                id: 'cultural-exports',
                title: 'Cultural Exports',
                subtitle: 'Filipino Content',
                icon: Music,
                color: 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30',
                href: '/timeline/globalization/cultural-exports',
                position: { x: 70, y: 5 },
                imagePath: '/DigitalPinoy/images/culturalexports.png'
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              2030: The Vision
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Filipino culture mainstream worldwide. AI translation enables borderless communities.
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'cultural-mainstream',
                title: 'Cultural Mainstream',
                subtitle: 'Global Filipino',
                icon: Globe,
                color: 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30',
                href: '/timeline/globalization/cultural-mainstream',
                position: { x: 35, y: 5 },
                imagePath: '/DigitalPinoy/images/culturalmainstream.png'
              },
              {
                id: 'ai-translation',
                title: 'AI Translation',
                subtitle: 'Language Bridge',
                icon: Brain,
                color: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-500/30',
                href: '/timeline/globalization/ai-translation',
                position: { x: 60, y: 5 },
                imagePath: '/DigitalPinoy/images/ai.png'
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
               The Globalization Journey Continues
             </h3>
             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
               From the foundation of the 2000s to today's transformation and tomorrow's vision,
               Filipino globalization continues to evolve, innovate, and inspire.
               Each era builds upon the last, creating a uniquely Filipino global identity.
             </p>
           </div>

           {/* Navigation to Other Halls */}
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <Link href="/timeline/technology">
               <motion.div
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all cursor-pointer"
               >
                 <div className="flex items-center gap-4 mb-3">
                   <Zap className="w-8 h-8 text-blue-400" />
                   <div>
                     <h4 className="text-xl font-bold text-white">Technology Hall</h4>
                     <p className="text-sm text-gray-400">Digital Revolution Pavilion</p>
                   </div>
                 </div>
                 <p className="text-gray-300 text-sm">Explore how technology transformed Filipino life from dial-up to AI.</p>
               </motion.div>
             </Link>

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
           </div>

           {/* Museum Info */}
           <div className="mt-12 text-center">
             <p className="text-gray-400 mb-4">
               Part of the <span className="text-white font-semibold">Digital Pinoy Museum</span> Collection
             </p>
             <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
               <span>🌍 Interactive Exhibits</span>
               <span>•</span>
               <span>🌐 Global Artifacts</span>
               <span>•</span>
               <span>🖼️ Authentic Stories</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}
