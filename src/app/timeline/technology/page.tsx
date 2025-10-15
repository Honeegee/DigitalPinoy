'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Smartphone,
  Wifi,
  Music,
  Gamepad2,
  MessageSquare,
  Download,
  Radio,
  Camera,
  Coffee,
  Zap,
  TrendingUp,
  Brain,
  Sparkles,
  Home,
  ArrowRight,
  Globe,
  Heart
} from 'lucide-react';
import FloatingSymbols from '@/components/ui/FloatingSymbols';
import Link from 'next/link';
import { useState } from 'react';

export default function TechnologyTimelinePage() {
  const [selectedDecade, setSelectedDecade] = useState<'2000s' | 'present' | '2030'>('2000s');
  const [selectedExhibit, setSelectedExhibit] = useState<any>(null);

  // 2000-2010 EXHIBITS (Main Focus)
  const exhibits2000s = [
    {
      id: 'sms-revolution',
      title: 'The SMS Revolution',
      subtitle: 'Text Capital of the World',
      icon: MessageSquare,
      image: '/DigitalPinoy/images/exhibits/sms.jpg', // Add your images
      year: '2000-2010',
      description: 'Filipinos sent 350 million text messages per day, earning the title "Texting Capital of the World."',
      artifacts: [
        { type: 'device', name: 'Nokia 3310', description: 'The indestructible legend' },
        { type: 'text', name: 'Common Messages', description: 'GM po, Txt bak, 143, Wer na u?' },
        { type: 'stat', name: '350M texts/day', description: 'Philippine daily average' },
        { type: 'cultural', name: 'Text Poetry', description: 'Romantic quotes sent via SMS' }
      ],
      popCulture: 'Texting became our love language, our activism tool (EDSA 2), and our daily ritual. 160 characters was all we needed.',
      interactiveElement: 'Type a message using T9 format',
      soundscape: 'Nokia ringtone, message notification sounds',
      keyMoments: [
        '2001: EDSA 2 mobilized via text messages',
        '2003: Text messaging peak in PH',
        '2005: Mobile penetration reaches 40%',
        '2008: Unlimited texting promos introduced'
      ]
    },
    {
      id: 'internet-cafe',
      title: 'Internet Café Culture',
      subtitle: 'The ₱15/Hour Gateway',
      icon: Coffee,
      image: '/DigitalPinoy/images/exhibits/internet-cafe.jpg',
      year: '2000-2010',
      description: 'Internet cafés became the Filipino digital hub—where friendships were forged and gaming addictions began.',
      artifacts: [
        { type: 'visual', name: 'Café Setup', description: 'Rows of bulky CRT monitors' },
        { type: 'pricing', name: '₱15/hour', description: 'Standard rate, ₱100 overnight' },
        { type: 'games', name: 'Popular Games', description: 'Ragnarok, DOTA, Counter-Strike' },
        { type: 'snacks', name: 'Café Menu', description: 'Instant noodles, softdrinks, pandesal' }
      ],
      popCulture: 'Where "tambayan" met technology. The smell of instant noodles mixed with competitive gaming rage.',
      interactiveElement: '360° virtual tour of a classic internet café',
      soundscape: 'Keyboard clicks, mouse clicks, "HEAL ME!", background chatter',
      keyMoments: [
        '2002: Internet café boom begins',
        '2003: Ragnarok Online fever hits PH',
        '2005: DOTA becomes national obsession',
        '2008: Overnight gaming packages popular'
      ]
    },
    {
      id: 'friendster-era',
      title: 'Friendster Era',
      subtitle: 'Your Digital Identity (Version 1.0)',
      icon: Sparkles,
      image: '/DigitalPinoy/images/exhibits/friendster.jpg',
      year: '2003-2008',
      description: 'Before Instagram, there was Friendster—where glitter graphics, testimonials, and Top 8 drama defined us.',
      artifacts: [
        { type: 'profile', name: 'Profile Elements', description: 'Glitter graphics, song lyrics, quotes' },
        { type: 'social', name: 'Testimonials', description: 'Heartfelt messages for friends' },
        { type: 'drama', name: 'Top 8 Friends', description: 'Social hierarchy visualized' },
        { type: 'music', name: 'Profile Songs', description: 'OPM hits that defined you' }
      ],
      popCulture: 'Your profile was your soul. Choosing your profile song? Life-defining decision. Getting kicked out of someone\'s Top 8? Devastating.',
      interactiveElement: 'Build your own retro Friendster profile',
      soundscape: 'Keyboard typing, profile song snippets',
      keyMoments: [
        '2003: Friendster arrives in the Philippines',
        '2004: Peak of Friendster popularity',
        '2006: Facebook begins migration',
        '2008: Friendster usage declines'
      ]
    },
    {
      id: 'dial-up',
      title: 'The Dial-Up Connection',
      subtitle: 'The Sound of the Internet Arriving',
      icon: Wifi,
      image: '/DigitalPinoy/images/exhibits/dialup.jpg',
      year: '2000-2006',
      description: 'That iconic screeching sound meant the world was connecting—slowly, very slowly.',
      artifacts: [
        { type: 'audio', name: 'Modem Sound', description: 'The iconic dial-up screech' },
        { type: 'tech', name: 'How It Worked', description: 'Phone line internet connection' },
        { type: 'experience', name: 'Loading Times', description: 'Images loaded line by line' },
        { type: 'culture', name: 'Phone Line Drama', description: '"Someone pick up the phone!" conflicts' }
      ],
      popCulture: 'When getting online meant tying up the phone line and praying nobody calls. "DON\'T USE THE PHONE, I\'M DOWNLOADING!"',
      interactiveElement: 'Play the iconic dial-up sound, progressive image loading demo',
      soundscape: 'Dial-up modem connection sequence',
      keyMoments: [
        '2000: Dial-up internet standard in PH',
        '2002: PLDT MyDSL introduced',
        '2005: Broadband slowly arrives',
        '2008: DSL becomes more accessible'
      ]
    },
    {
      id: 'mp3-revolution',
      title: 'MP3 Revolution & Download Culture',
      subtitle: 'The Age of Digital Piracy',
      icon: Music,
      image: '/DigitalPinoy/images/exhibits/mp3.jpg',
      year: '2000-2010',
      description: 'Napster, LimeWire, Kazaa—we were all digital pirates, downloading one song at a time.',
      artifacts: [
        { type: 'software', name: 'Download Tools', description: 'Napster, LimeWire, Kazaa, BitTorrent' },
        { type: 'media', name: 'CD-R Culture', description: 'Burning mixtapes and compilation CDs' },
        { type: 'players', name: 'MP3 Players', description: 'iPod, generic Chinese MP3 players' },
        { type: 'stores', name: 'Pirated CDs', description: 'Quiapo, Greenhills, ₱50 per CD' }
      ],
      popCulture: 'Before Spotify, we waited hours for a single song to download. "Download complete" was the best notification sound ever.',
      interactiveElement: 'Virtual jukebox of 2000s OPM hits',
      soundscape: '"Download complete" sound, CD burning drive noises',
      keyMoments: [
        '2001: Napster peak and shutdown',
        '2003: iPod reaches Philippines',
        '2005: YouTube launches, becomes music source',
        '2008: MP3 players everywhere'
      ]
    },
    {
      id: 'social-media-dawn',
      title: 'Social Media Dawn',
      subtitle: 'From Friendster to Facebook',
      icon: TrendingUp,
      image: '/DigitalPinoy/images/exhibits/social-dawn.jpg',
      year: '2003-2010',
      description: 'The birth of social networking—from Friendster testimonials to Facebook pokes.',
      artifacts: [
        { type: 'timeline', name: 'Platform Evolution', description: 'Friendster→Multiply→Facebook→Twitter' },
        { type: 'features', name: 'Iconic Features', description: 'Poke, Testimonials, Multiply albums' },
        { type: 'behavior', name: 'Early Habits', description: 'Profile customization, status updates' },
        { type: 'migration', name: 'The Great Migration', description: 'Moving from Friendster to Facebook (2008-2010)' }
      ],
      popCulture: 'When "Add as friend" actually meant something. When "It\'s complicated" was a legitimate relationship status.',
      interactiveElement: 'Compare old vs new social media interfaces',
      soundscape: 'Facebook notification sound evolution',
      keyMoments: [
        '2003: Friendster explosion in PH',
        '2004: Multiply launches',
        '2006: Facebook opens to public',
        '2008-2010: Mass Facebook migration'
      ]
    },
    {
      id: 'mobile-evolution',
      title: 'Mobile Phone Evolution',
      subtitle: 'From Snake to Smartphones',
      icon: Smartphone,
      image: '/DigitalPinoy/images/exhibits/phones.jpg',
      year: '2000-2010',
      description: 'The decade that took us from indestructible Nokias to the iPhone revolution.',
      artifacts: [
        { type: 'devices', name: 'Iconic Phones', description: 'Nokia 3310, 3315, 6600, N70, N95' },
        { type: 'games', name: 'Mobile Games', description: 'Snake, Space Impact, Bounce' },
        { type: 'features', name: 'Phone Features', description: 'Polyphonic ringtones, infrared, Bluetooth' },
        { type: 'revolution', name: 'iPhone (2007)', description: 'The game-changer arrives' }
      ],
      popCulture: 'When dropping your phone 10 times meant nothing. When battery life was measured in days, not hours. When Snake was life.',
      interactiveElement: 'Play the classic Snake game',
      soundscape: 'Nokia tune, polyphonic ringtones, keypad tones',
      keyMoments: [
        '2000: Nokia 3310 becomes iconic',
        '2003: Camera phones arrive',
        '2005: 3G networks launch',
        '2007: iPhone revolutionizes everything',
        '2008: Android smartphones emerge'
      ]
    },
    {
      id: 'yahoo-messenger',
      title: 'Yahoo! Messenger',
      subtitle: 'Y!M: The OG Chat App',
      icon: MessageSquare,
      image: '/DigitalPinoy/images/exhibits/ym.jpg',
      year: '2000-2010',
      description: 'Before Messenger blue ticks, there was Y!M\'s typing indicator anxiety.',
      artifacts: [
        { type: 'interface', name: 'Y!M Interface', description: 'The classic yellow messenger window' },
        { type: 'features', name: 'Iconic Features', description: 'Buzz, emoticons, custom statuses' },
        { type: 'emoticons', name: 'Emoticon Collection', description: 'Animated smileys, the dancing banana' },
        { type: 'chatrooms', name: 'Chat Rooms', description: 'Phils-18-25, Manila-Chat, regional rooms' }
      ],
      popCulture: 'The "Buzz" feature was basically a digital poke. "BRB" and "ASL?" were conversation starters. The typing indicator caused anxiety before read receipts existed.',
      interactiveElement: 'Send a virtual "Buzz" to visitors',
      soundscape: 'Y!M notification sounds, door opening/closing sounds',
      keyMoments: [
        '2000-2005: Y!M dominance in PH',
        '2006: Competition from Facebook Chat',
        '2008: Declining usage',
        '2010: Migration to Facebook Messenger begins'
      ]
    }
  ];

  // PRESENT (2020-2025) - Streamlined
  const exhibitsPresent = [
    {
      id: 'social-media-dominance',
      title: 'Social Media Dominance',
      subtitle: 'The Algorithm Age',
      icon: TrendingUp,
      year: '2020-2025',
      description: 'TikTok, Instagram, Facebook—the algorithm knows you better than your friends do.',
      highlights: [
        'TikTok viral trends define culture',
        'Instagram aesthetics replace reality',
        'Discord communities replace IRL hangouts',
        'PH average screen time: 10+ hours/day'
      ],
      popCulture: 'When "For You Page" curates your entire personality. When going viral is a career path.',
      impact: 'From intentional posting to constant content creation. From connecting to performing.'
    },
    {
      id: 'mobile-gaming-esports',
      title: 'Mobile Gaming & Esports',
      subtitle: 'From Casual to Professional',
      icon: Gamepad2,
      year: '2020-2025',
      description: 'Mobile Legends, Valorant, Genshin Impact—gaming became a legitimate career.',
      highlights: [
        'Blacklist International world champions',
        'Mobile Legends national obsession',
        'Esports arenas packed nationwide',
        'Prize pools reach millions of pesos'
      ],
      popCulture: 'When "What\'s your rank?" is a legitimate question. When "GGWP" enters everyday vocabulary.',
      impact: 'From internet café hobby to stadium esports. From "stop playing" to "stream it."'
    },
    {
      id: 'ecommerce-fintech',
      title: 'E-Commerce & Fintech Revolution',
      subtitle: 'From Cash to Cashless',
      icon: Zap,
      year: '2020-2025',
      description: 'Shopee, Lazada, GCash, Maya—physical money becoming optional.',
      highlights: [
        'GCash becomes verb: "GCash mo na lang"',
        'Shopee 9.9, 11.11, 12.12 sale culture',
        'QR code payments everywhere',
        'Digital wallets replace physical ones'
      ],
      popCulture: 'When "COD" means Cash on Delivery, not Call of Duty. When midnight flash sales cause nationwide panic.',
      impact: 'From mall shopping to midnight scrolling. From ATMs to QR codes. From savings to "Add to Cart."'
    },
    {
      id: 'content-creation-economy',
      title: 'Content Creation Economy',
      subtitle: 'Everyone\'s a Creator Now',
      icon: Camera,
      year: '2020-2025',
      description: 'YouTube, TikTok, streaming—Filipinos monetizing creativity globally.',
      highlights: [
        'Filipino YouTubers reach millions of subscribers',
        'TikTok creators become celebrities',
        'Podcast boom in Filipino languages',
        '"Content creator" = legitimate job title'
      ],
      popCulture: 'When "What do you do?" is answered with "I create content." When everyone has a Ring Light.',
      impact: 'From consuming to creating. From audience to influencer. From hobby to hustle.'
    },
    {
      id: 'ai-integration',
      title: 'AI Integration Begins',
      subtitle: 'Hello, Artificial Intelligence',
      icon: Brain,
      year: '2023-2025',
      description: 'ChatGPT, AI art, smart assistants—AI becomes our daily companion.',
      highlights: [
        'ChatGPT helps with everything',
        'AI-generated art goes mainstream',
        'Smart recommendations everywhere',
        'AI in GCash, Shopee, education'
      ],
      popCulture: 'When AI writes your essays, generates your art, and knows your shopping habits better than you.',
      impact: 'From fearing AI to depending on it. From human-only creativity to AI-assisted everything.'
    }
  ];

  // FUTURE (2030) - Visionary
  const exhibits2030 = [
    {
      id: 'metaverse-ph',
      title: 'Metaverse Philippines',
      subtitle: 'Virtual Barangays & Digital Fiestas',
      icon: Sparkles,
      year: '2030',
      description: 'Virtual communities where Filipinos gather, celebrate, and live digitally.',
      predictions: [
        'Virtual barangay halls for community meetings',
        'Digital fiestas with holographic performers',
        'VR family reunions for OFWs',
        'NFT-based property in virtual Manila'
      ],
      popCulture: 'When "See you sa metaverse" replaces "See you sa mall." When your lola joins you in VR for Sunday lunch.',
      wildCard: 'Will virtual lechon taste good? Scientists working on it.'
    },
    {
      id: 'ai-companions',
      title: 'AI Companions & Digital Twins',
      subtitle: 'Your Personalized AI Kasama',
      icon: Brain,
      year: '2030',
      description: 'AI companions that speak Tagalog, understand Filipino humor, and never ghost you.',
      predictions: [
        'AI companions fluent in regional languages',
        'Digital twins of loved ones',
        'AI that understands "Filipino time"',
        'Personal AI assistants managing your life'
      ],
      popCulture: 'When your AI knows your nanay\'s adobo recipe better than you. When AI gives better advice than your barkada.',
      wildCard: 'AI that can perfectly time when to say "Sige na nga" in negotiations.'
    },
    {
      id: 'holographic-communication',
      title: 'Holographic Communication',
      subtitle: 'Beyond Video Calls',
      icon: Radio,
      year: '2030',
      description: 'Life-size holograms making distance meaningless for OFW families.',
      predictions: [
        'Holographic family gatherings',
        'OFWs "present" at home celebrations',
        '3D presence in meetings and events',
        'Holographic concerts and performances'
      ],
      popCulture: 'When "I\'ll be there in spirit" becomes literally true. When hugging your OFW parent feels real again.',
      wildCard: 'Holographic tsinelas—can nanay discipline you through holograms?'
    },
    {
      id: 'ph-tech-hub',
      title: 'Philippines as Tech Powerhouse',
      subtitle: 'From BPO to Innovation Capital',
      icon: Zap,
      year: '2030',
      description: 'Filipino-built tech companies competing globally, innovation hubs in every city.',
      predictions: [
        'Filipino tech unicorns worth billions',
        'Manila as Southeast Asian Silicon Valley',
        'AI trained on Filipino languages and culture',
        'Global developers speaking Tagalog'
      ],
      popCulture: 'When "Made in Philippines" means cutting-edge, not outsourced. When Filipino startups are acquired by Silicon Valley.',
      wildCard: 'The first AI that truly understands "kilig" emotion.'
    }
  ];

  const decades = [
    { id: '2000s', label: '2000-2010', subtitle: 'The Foundation Era', color: 'from-amber-500 to-orange-500' },
    { id: 'present', label: 'Present', subtitle: 'The Transformation', color: 'from-blue-500 to-cyan-500' },
    { id: '2030', label: '2030', subtitle: 'The Vision', color: 'from-purple-500 to-pink-500' }
  ];

  const getCurrentExhibits = () => {
    switch(selectedDecade) {
      case '2000s': return exhibits2000s;
      case 'present': return exhibitsPresent;
      case '2030': return exhibits2030;
      default: return exhibits2000s;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/DigitalPinoy/images/tech-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>


      {/* Hero Section */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
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

      {/* Decade Selector */}
      <div className="relative z-10 bg-black/80 backdrop-blur-md border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4">
            {decades.map((decade) => (
              <motion.button
                key={decade.id}
                onClick={() => setSelectedDecade(decade.id as any)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedDecade === decade.id
                    ? 'border-white/40 bg-gradient-to-br from-white/10 to-white/5 shadow-lg'
                    : 'border-white/10 bg-black/40 hover:border-white/20'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${decade.color} opacity-0 ${
                  selectedDecade === decade.id ? 'opacity-15' : ''
                } transition-opacity duration-300 rounded-xl`}></div>
                
                <div className="relative z-10 text-center">
                  <motion.h3 
                    className={`text-xl font-bold mb-2 ${
                      selectedDecade === decade.id
                        ? `bg-gradient-to-r ${decade.color} bg-clip-text text-transparent`
                        : 'text-gray-400'
                    }`}
                    animate={{ 
                      scale: selectedDecade === decade.id ? 1.05 : 1,
                      y: selectedDecade === decade.id ? -1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {decade.label}
                  </motion.h3>
                  <motion.p 
                    className={`text-sm font-medium ${
                      selectedDecade === decade.id ? 'text-gray-200' : 'text-gray-500'
                    }`}
                    animate={{ 
                      opacity: selectedDecade === decade.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {decade.subtitle}
                  </motion.p>
                  
                  {/* Gap between text and underline */}
                  <div className="h-3"></div>
                  
                  {selectedDecade === decade.id && (
                    <motion.div
                      layoutId="activeDecade"
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r ${decade.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Exhibits Grid */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDecade}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* 2000-2010: Organized Exhibit Grid */}
              {selectedDecade === '2000s' && (
                <div className="relative">
                  <div className="text-center mb-12">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-white mb-4"
                    >
                      Explore the Digital Revolution
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-300 max-w-2xl mx-auto"
                    >
                      Click on each exhibit to dive deep into the technological milestones that shaped Filipino digital culture
                    </motion.p>
                  </div>
                  
                  <FloatingSymbols
                    symbols={[
                      {
                        id: 'sms-revolution',
                        title: 'SMS',
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
              )}

          {/* PRESENT: Floating Symbols */}
          {selectedDecade === 'present' && (
            <div className="relative">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  Explore the Digital Revolution
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 max-w-2xl mx-auto"
                >
                  Click on each exhibit to dive deep into the technological milestones that shaped Filipino digital culture
                </motion.p>
              </div>

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
          )}

          {/* 2030: Floating Symbols */}
          {selectedDecade === '2030' && (
            <div className="relative">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  Explore the Digital Revolution
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 max-w-2xl mx-auto"
                >
                  Click on each exhibit to dive deep into the technological milestones that shaped Filipino digital culture
                </motion.p>
              </div>

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
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* Modal for Full Exhibit (for 2000s exhibits) */}
  <AnimatePresence>
    {selectedExhibit && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedExhibit(null)}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-xl rounded-2xl border border-amber-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedExhibit(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
          >
            <span className="text-white text-xl">×</span>
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              {selectedExhibit.icon && (
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const IconComponent = selectedExhibit.icon;
                    return <IconComponent className="w-10 h-10 text-white" />;
                  })()}
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-white mb-2">{selectedExhibit.title}</h2>
                <p className="text-xl text-amber-300 font-semibold mb-1">{selectedExhibit.subtitle}</p>
                <p className="text-gray-400">{selectedExhibit.year}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-black/30 rounded-xl p-6 mb-6 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed">{selectedExhibit.description}</p>
            </div>

            {/* All Artifacts */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
                Exhibition Artifacts
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedExhibit.artifacts?.map((artifact: any, i: number) => (
                  <div key={i} className="bg-black/30 rounded-xl p-4 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">{artifact.type}</p>
                        <p className="text-white font-semibold mb-1">{artifact.name}</p>
                        <p className="text-sm text-gray-400">{artifact.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pop Culture Context */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 mb-6 border border-amber-500/30">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Pop Culture Context
              </h3>
              <p className="text-lg text-gray-300 italic leading-relaxed">"{selectedExhibit.popCulture}"</p>
            </div>

            {/* Interactive Element */}
            {selectedExhibit.interactiveElement && (
              <div className="bg-black/40 rounded-xl p-6 mb-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-amber-400" />
                  Interactive Experience
                </h3>
                <p className="text-gray-300 mb-4">{selectedExhibit.interactiveElement}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all">
                  Launch Interactive Element
                </button>
              </div>
            )}

            {/* Key Moments Timeline */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
                Historical Timeline
              </h3>
              <div className="space-y-3">
                {selectedExhibit.keyMoments?.map((moment: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-3 h-3 rounded-full bg-amber-400 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{moment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Soundscape */}
            {selectedExhibit.soundscape && (
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-purple-400" />
                  Soundscape of the Era
                </h3>
                <p className="text-gray-300">{selectedExhibit.soundscape}</p>
                <button className="mt-4 px-6 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 font-semibold hover:bg-purple-500/30 transition-all">
                  🔊 Play Sounds
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Museum Footer */}
  <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 mt-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          {selectedDecade === '2000s' && 'The Foundation Era'}
          {selectedDecade === 'present' && 'The Transformation'}
          {selectedDecade === '2030' && 'The Vision'}
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          {selectedDecade === '2000s' && 'This decade laid the groundwork for everything that followed. From text messages to Friendster, from internet cafés to Nokia phones—these weren\'t just technologies. They were the birth of Filipino digital identity.'}
          {selectedDecade === 'present' && 'We\'re living in the transformation. Social media dominates. Content creation is a career. AI assists everything. The seeds planted in the 2000s have grown into a forest of possibility.'}
          {selectedDecade === '2030' && 'The future isn\'t written yet—but the trends point toward AI companions, metaverse communities, and the Philippines as a tech powerhouse. What will we create next?'}
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
// Add Museum icon component if not imported
function Museum({ className }: { className?: string }) {
return (
<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<path d="M3 21h18M6 18V9M10 18V9M14 18V9M18 18V9M3 9l9-6 9 6M12 3v3" />
</svg>
);
}
