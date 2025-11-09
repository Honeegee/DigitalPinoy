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


export default function EmotionsTimelinePage() {

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
            <Heart className="w-5 h-5" />
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


      {/* 2000-2010: The Foundation Era */}
      <div className="relative z-10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
              2000-2010: The Foundation Era
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Click on each exhibit to dive deep into the emotional milestones that shaped Filipino digital culture
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'friendster-testimonials',
                title: 'Friendster',
                subtitle: 'Digital Love Letters',
                icon: Heart,
                color: 'bg-gradient-to-br from-pink-900/30 to-red-900/30 border-pink-500/30',
                href: '/timeline/emotions/friendster-testimonials',
                position: { x: 5, y: 5 },
                imagePath: '/DigitalPinoy/images/friendster.png'
              },
              {
                id: 'teleserye-bonding',
                title: 'Teleserye',
                subtitle: 'Nationwide Bonding',
                icon: Sparkles,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/emotions/teleserye-bonding',
                position: { x: 23, y: 5 },
                imagePath: '/DigitalPinoy/images/teleserye.png'
              },
              {
                id: 'pacquiao-pride',
                title: 'Pacquiao',
                subtitle: 'National Pride',
                icon: TrendingUp,
                color: 'bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-500/30',
                href: '/timeline/emotions/pacquiao-pride',
                position: { x: 42, y: 5 },
                imagePath: '/DigitalPinoy/images/pacquiao.png'
              },
              {
                id: 'hugot-culture',
                title: 'Hugot',
                subtitle: 'Emotional Expression',
                icon: MessageSquare,
                color: 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30',
                href: '/timeline/emotions/hugot-culture',
                position: { x: 61, y: 5 },
                imagePath: '/DigitalPinoy/images/hugot.png'
              },
              {
                id: 'meme-culture',
                title: 'Memes',
                subtitle: 'Visual Humor',
                icon: Camera,
                color: 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30',
                href: '/timeline/emotions/meme-culture',
                position: { x: 80, y: 5 },
                imagePath: '/DigitalPinoy/images/memes.png'
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              2020-2025: The Transformation
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mental health awareness dominates. Online support communities thrive. Emotional AI tools emerge.
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'mental-health-awareness',
                title: 'Mental Health',
                subtitle: 'Digital Wellness',
                icon: Brain,
                color: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-500/30',
                href: '/timeline/emotions/mental-health-awareness',
                position: { x: 20, y: 5 },
                imagePath: '/DigitalPinoy/images/mentalhealth.png'
              },
              {
                id: 'online-support-communities',
                title: 'Online Support',
                subtitle: 'Community Healing',
                icon: Heart,
                color: 'bg-gradient-to-br from-pink-900/30 to-red-900/30 border-pink-500/30',
                href: '/timeline/emotions/online-support-communities',
                position: { x: 42, y: 5 },
                imagePath: '/DigitalPinoy/images/OnlineSupport.png'
              },
              {
                id: 'emotional-ai-tools',
                title: 'Emotional AI',
                subtitle: 'Digital Empathy',
                icon: Brain,
                color: 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/30',
                href: '/timeline/emotions/emotional-ai-tools',
                position: { x: 64, y: 5 },
                imagePath: '/DigitalPinoy/images/emotionalai.png'
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              2030: The Vision
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              AI companions provide emotional support. Neuro-tech enhances empathy. Digital therapy becomes mainstream.
            </p>
          </motion.div>

          <FloatingSymbols
            symbols={[
              {
                id: 'ai-emotional-companions',
                title: 'AI Companions',
                subtitle: 'Digital Kasama',
                icon: Brain,
                color: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30',
                href: '/timeline/emotions/ai-emotional-companions',
                position: { x: 18, y: 5 },
                imagePath: '/DigitalPinoy/images/aicompanion.png'
              },
              {
                id: 'neuro-tech-interfaces',
                title: 'Neuro-Tech',
                subtitle: 'Brain-Computer Interface',
                icon: Zap,
                color: 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-500/30',
                href: '/timeline/emotions/neuro-tech-interfaces',
                position: { x: 41, y: 5 },
                imagePath: '/DigitalPinoy/images/neurotech.png'
              },
              {
                id: 'digital-empathy-networks',
                title: 'Empathy Networks',
                subtitle: 'Global Emotional Connection',
                icon: Globe,
                color: 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30',
                href: '/timeline/emotions/digital-empathy-networks',
                position: { x: 64, y: 5 },
                imagePath: '/DigitalPinoy/images/empathy.png'
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
               The Emotional Journey Continues
             </h3>
             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
               From the foundation of the 2000s to today's transformation and tomorrow's vision,
               Filipino emotional culture continues to evolve, innovate, and inspire.
               Each era builds upon the last, creating a uniquely Filipino emotional identity.
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
               <span>💝 Interactive Exhibits</span>
               <span>•</span>
               <span>🎭 Emotional Artifacts</span>
               <span>•</span>
               <span>🖼️ Authentic Stories</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}
