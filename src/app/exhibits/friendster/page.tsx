'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2, VolumeX, ArrowLeft, Eye, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface FriendsterProfile {
  name: string;
  age: number;
  location: string;
  relationship: string;
  aboutMe: string;
  shoutout: string;
  song: string;
  profileViews: number;
  friendsCount: number;
}

export default function FriendsterExhibit() {
  const [currentProfile] = useState<FriendsterProfile>({
    name: 'angelica santos',
    age: 16,
    location: 'Makati City, Philippines',
    relationship: 'It&apos;s complicated',
    aboutMe: 'i love music especially OPM and RnB... i hang out with my friends at the mall... text me at 09171234567 or add me on YM: angel_ica16@yahoo.com... barkada for life!!!',
    shoutout: 'thanks to all my amazing friends for always being there for me!!! love you guys so much!!! best friends for life!!! miss you all!!!',
    song: 'Hale - The Day You Said Goodnight',
    profileViews: 2847,
    friendsCount: 156
  });

  const [isPlaying] = useState(true);

  const profilePhoto = { src: '/images/emogirl.jpg', caption: 'the best version of me 2003' };

  const friendPhotos = [
    { src: '/images/friend1.jpg', caption: 'hanging out with friends' },
    { src: '/images/friend2.jpg', caption: 'hanging out with friends' },
    { src: '/images/friend3.jpg', caption: 'good times with my squad' },
    { src: '/images/friend4.jpg', caption: 'bestfriends forever' }
  ];

  const testimonials = [
    {
      author: 'super_bff_4eva',
      message: 'angie!!! ur so pretty and sweet!!! best fren 4 lyf!!! miss u so much!!! text me na!!!',
      date: '3 days ago',
      photo: '/images/friend1.jpg'
    },
    {
      author: 'emo_boy_21',
      message: 'hey angel... ur so cute!!! hope we can chat soon!!! add me sa YM!!!',
      date: '1 week ago',
      photo: '/images/friend2.jpg'
    },
    {
      author: 'barkada_gang',
      message: 'yo angie!!! gimik tayo sa mall next week!!! shopping and sing k then!!! miss u na!!!',
      date: '2 weeks ago',
      photo: '/images/friend3.jpg'
    }
  ];

  const recentViewers = [
    'cutie_boy_23', 'sweet_girl_19', 'rockstar_dude', 'princess_baby', 'cool_guy_18'
  ];



  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/friendsterBackground.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Light overlay to ensure content readability */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none z-0"></div>

      {/* Friendster Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 border-b-2 border-orange-600">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-orange-100">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold">Back to Museum</span>
            </Link>

            {/* Friendster Logo */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                friendster
              </h1>
              <div className="text-xs text-orange-100">connect with friends</div>
            </div>

            {/* Music Player */}
            <div className="flex items-center gap-2 bg-white/20 rounded px-3 py-1">
              <Music className="w-4 h-4 text-white" />
              <span className="text-xs text-white">♪ {currentProfile.song}</span>
              <div className="text-white">
                {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 relative z-10">
        {/* Big Friendster Profile Logo - Full Width */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            <div
              className="rounded-lg py-2 px-4 shadow-2xl border border-white relative overflow-hidden w-full"
              style={{
                background: 'linear-gradient(45deg, #e6e6fa, #dda0dd, #ff69b4, #dda0dd, #e6e6fa)',
                boxShadow: '0 0 50px rgba(221,160,221,0.8), inset 0 0 30px rgba(255,255,255,0.3)'
              }}
            >
              {/* Static Glitter overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255,20,147,0.15) 0%, transparent 60%),
                    radial-gradient(circle at 70% 70%, rgba(255,105,180,0.1) 0%, transparent 60%)
                  `
                }}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{
                    filter: [
                      'drop-shadow(0 0 20px rgba(255,20,147,1))',
                      'drop-shadow(0 0 40px rgba(255,20,147,1.2))',
                      'drop-shadow(0 0 60px rgba(255,20,147,1))',
                      'drop-shadow(0 0 40px rgba(255,20,147,1.2))',
                      'drop-shadow(0 0 20px rgba(255,20,147,1))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-20 md:h-24 lg:h-28 xl:h-32 mx-auto relative"
                  style={{
                    filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 25px rgba(255,20,147,1))',
                    maxWidth: '100%',
                    width: 'auto'
                  }}
                >
                  <Image
                    src="/images/Friendster-Logo.png"
                    alt="Friendster Logo"
                    width={400}
                    height={128}
                    className="object-contain h-full w-auto mx-auto"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    textShadow: [
                      '0 0 15px #ff1493',
                      '0 0 25px #ff1493',
                      '0 0 35px #ff1493',
                      '0 0 25px #ff1493',
                      '0 0 15px #ff1493'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-lg md:text-xl text-purple-700 mt-6 font-bold"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  ♥ ★彡 angelica&apos;s glittery profile 彡★ ♥
                </motion.div>
              </div>

              {/* Multiple floating sparkles around the whole area */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 text-3xl"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 left-4 text-2xl"
              >
                ⭐
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 left-4 text-2xl"
              >
                💫
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-4 right-4 text-3xl"
              >
                🌟
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Sidebar */}
          <div className="space-y-4">
            {/* Profile Photo */}
            <div
              className="bg-white rounded p-4 relative overflow-hidden"
              style={{
                border: '3px solid #ff1493',
                boxShadow: '0 0 20px rgba(255,20,147,0.8), 0 0 40px rgba(255,105,180,0.4), inset 0 0 15px rgba(255,20,147,0.1)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,20,147,0.05))'
              }}
            >
              {/* Static glitter overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 20% 20%, rgba(255,20,147,0.1) 0%, transparent 40%),
                    radial-gradient(circle at 80% 80%, rgba(255,105,180,0.08) 0%, transparent 40%)
                  `
                }}
              />
              <div className="text-center relative z-10">
                <div className="relative inline-block mb-3">
                  <motion.div
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                  <Image
                    src={profilePhoto.src}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded"
                    style={{
                      border: '4px solid #ff1493',
                      boxShadow: '0 0 25px rgba(255,20,147,1), 0 0 50px rgba(255,105,180,0.6), inset 0 0 10px rgba(255,255,255,0.3)',
                      filter: 'brightness(1.2) contrast(1.3) saturate(1.4) drop-shadow(0 0 10px rgba(255,20,147,0.8))'
                    }}
                  />
                    {/* Static photo overlay */}
                    <div
                      className="absolute inset-0 rounded pointer-events-none"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)'
                      }}
                    />
                  </motion.div>
                  <div className="text-xs text-gray-600 mt-1 italic" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    ♥ {profilePhoto.caption} ♥
                  </div>
                </div>
                <h2 className="text-lg font-bold text-gray-800">{currentProfile.name}</h2>
                <div className="text-sm text-gray-600">
                  {currentProfile.age}, {currentProfile.location}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {currentProfile.relationship}
                </div>
              </div>
            </div>

            {/* Profile Stats */}
            <div
              className="bg-white rounded p-4 relative overflow-hidden"
              style={{
                border: '2px solid #ff69b4',
                boxShadow: '0 0 15px rgba(255,105,180,0.6), inset 0 0 10px rgba(255,20,147,0.05)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,105,180,0.05))'
              }}
            >
              <h3 className="font-bold text-gray-800 mb-2">profile views</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Eye className="w-4 h-4" />
                {currentProfile.profileViews.toLocaleString()} views
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Users className="w-4 h-4" />
                {currentProfile.friendsCount} friends
              </div>
            </div>

            {/* Who Viewed Me */}
            <div
              className="bg-white rounded p-4 relative overflow-hidden"
              style={{
                border: '2px solid #ff1493',
                boxShadow: '0 0 18px rgba(255,20,147,0.7), inset 0 0 8px rgba(255,105,180,0.1)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,20,147,0.03))'
              }}
            >
              <h3 className="font-bold text-gray-800 mb-2">who&apos;s viewed me?</h3>
              <div className="space-y-1">
                {recentViewers.slice(0, 3).map((viewer, index) => (
                  <div key={index} className="text-sm text-blue-600 hover:underline cursor-pointer">
                    {viewer}
                  </div>
                ))}
                <div className="text-xs text-gray-500 mt-2">
                  + {recentViewers.length - 3} more
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-4">

            {/* About Me */}
            <div
              className="bg-white rounded relative overflow-hidden"
              style={{
                border: '3px solid #ff1493',
                boxShadow: '0 0 25px rgba(255,20,147,0.8), 0 0 50px rgba(255,105,180,0.3), inset 0 0 15px rgba(255,20,147,0.05)'
              }}
            >
              <div
                className="px-4 py-2 border-b relative"
                style={{
                  background: 'linear-gradient(90deg, #ff1493, #ff69b4, #ff1493)',
                  borderBottom: '2px solid #ff1493',
                  boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)'
                }}
              >
                <h3 className="font-bold text-white" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>about {currentProfile.name.split(' ')[0]}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700 leading-relaxed">
                  {currentProfile.aboutMe}
                </p>
              </div>
            </div>

            {/* Shoutout */}
            <div
              className="bg-white rounded relative overflow-hidden"
              style={{
                border: '3px solid #ff69b4',
                boxShadow: '0 0 30px rgba(255,105,180,0.9), inset 0 0 20px rgba(255,20,147,0.08)'
              }}
            >
              <div
                className="px-4 py-2 border-b relative"
                style={{
                  background: 'linear-gradient(90deg, #ff69b4, #da70d6, #ff69b4)',
                  borderBottom: '2px solid #ff69b4',
                  boxShadow: 'inset 0 0 15px rgba(255,255,255,0.4)'
                }}
              >
                <h3 className="font-bold text-white" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>shoutout!</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700 italic">
                  &quot;{currentProfile.shoutout}&quot;
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div
              className="bg-white rounded relative overflow-hidden"
              style={{
                border: '3px solid #da70d6',
                boxShadow: '0 0 35px rgba(218,112,214,0.8), 0 0 70px rgba(255,20,147,0.2), inset 0 0 25px rgba(218,112,214,0.05)'
              }}
            >
              <div
                className="px-4 py-2 border-b flex items-center justify-between relative"
                style={{
                  background: 'linear-gradient(90deg, #da70d6, #ff1493, #da70d6)',
                  borderBottom: '2px solid #da70d6',
                  boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)'
                }}
              >
                <h3 className="font-bold text-white" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>testimonials</h3>
                <span className="text-sm text-white/90">({testimonials.length})</span>
              </div>
              <div className="divide-y divide-gray-200">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-start gap-3">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.author}
                        width={32}
                        height={32}
                        className="w-8 h-8 object-cover rounded border border-pink-300"
                        style={{
                          boxShadow: '0 0 8px rgba(255,20,147,0.4)'
                        }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-blue-600 hover:underline cursor-pointer">
                            {testimonial.author}
                          </span>
                          <span className="text-xs text-gray-500">{testimonial.date}</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {testimonial.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                <button className="text-blue-600 hover:underline text-sm">
                  write testimonial for {currentProfile.name.split(' ')[0]}
                </button>
              </div>
            </div>

            {/* Friends Preview */}
            <div
              className="bg-white rounded relative overflow-hidden"
              style={{
                border: '3px solid #ff1493',
                boxShadow: '0 0 40px rgba(255,20,147,0.7), inset 0 0 30px rgba(255,105,180,0.05)'
              }}
            >
              <div
                className="px-4 py-2 border-b flex items-center justify-between relative"
                style={{
                  background: 'linear-gradient(90deg, #ff1493, #ff69b4, #ff1493)',
                  borderBottom: '2px solid #ff1493',
                  boxShadow: 'inset 0 0 25px rgba(255,255,255,0.3)'
                }}
              >
                <h3 className="font-bold text-white" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>{currentProfile.name.split(' ')[0]}&apos;s friends</h3>
                <span className="text-sm text-white/90">({currentProfile.friendsCount} friends)</span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-3">
                  {friendPhotos.map((photo, i) => (
                    <div key={i} className="text-center">
                      <Image
                        src={photo.src}
                        alt={`Friend ${i + 1}`}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded border-2 border-pink-400"
                        style={{
                          boxShadow: '0 0 10px rgba(255,20,147,0.5)'
                        }}
                      />
                      <div className="text-xs text-blue-600 hover:underline cursor-pointer mt-1">
                        friend_{i + 1}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    view all friends
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Friendster Timeline */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg relative overflow-hidden"
            style={{
              border: '3px solid #ff1493',
              boxShadow: '0 0 30px rgba(255,20,147,0.8), inset 0 0 20px rgba(255,105,180,0.05)'
            }}
          >
            <div
              className="px-6 py-4 border-b relative"
              style={{
                background: 'linear-gradient(90deg, #ff1493, #ff69b4, #ff1493)',
                borderBottom: '2px solid #ff1493',
                boxShadow: 'inset 0 0 20px rgba(255,255,255,0.3)'
              }}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-white" />
                <h3 className="font-bold text-white text-xl" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
                  Friendster Timeline: The Rise and Fall of the Philippines' First Social Network
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 rounded-full shadow-lg"></div>

                {/* Timeline Events */}
                <div className="space-y-8">
                  {[
                    {
                      year: "2002",
                      title: "Friendster is Born",
                      description: "Jonathan Abrams launches Friendster in Mountain View, California. The platform pioneers the concept of social networking.",
                      icon: "🚀",
                      color: "from-blue-400 to-blue-600"
                    },
                    {
                      year: "2003",
                      title: "Philippine Invasion Begins",
                      description: "Friendster gains massive popularity in the Philippines through word-of-mouth and internet cafes. Filipinos embrace the platform like no other country.",
                      icon: "🇵🇭",
                      color: "from-yellow-400 to-yellow-600"
                    },
                    {
                      year: "2004-2005",
                      title: "Peak Filipino Culture",
                      description: "Friendster becomes synonymous with Filipino internet culture. Profile customization, testimonials, and 'pakikipagkaibigan' define the experience.",
                      icon: "⭐",
                      color: "from-pink-400 to-pink-600"
                    },
                    {
                      year: "2006",
                      title: "The Golden Age",
                      description: "Millions of Filipinos use Friendster daily. Internet cafes are packed with users updating profiles, writing testimonials, and finding old friends.",
                      icon: "👥",
                      color: "from-purple-400 to-purple-600"
                    },
                    {
                      year: "2007-2008",
                      title: "Facebook Arrives",
                      description: "Facebook launches and slowly gains traction. Friendster's technical issues and slower loading times become apparent.",
                      icon: "📘",
                      color: "from-blue-400 to-blue-600"
                    },
                    {
                      year: "2009-2010",
                      title: "The Great Migration",
                      description: "Filipinos begin migrating to Facebook en masse. Friendster attempts various redesigns but loses momentum.",
                      icon: "🏃‍♂️",
                      color: "from-red-400 to-red-600"
                    },
                    {
                      year: "2011",
                      title: "Gaming Pivot",
                      description: "Friendster pivots to become a gaming platform, abandoning its social networking roots. Most Filipino users have moved on.",
                      icon: "🎮",
                      color: "from-green-400 to-green-600"
                    },
                    {
                      year: "2015",
                      title: "The End of an Era",
                      description: "Friendster officially shuts down. A generation of Filipinos loses their first digital social space and countless memories.",
                      icon: "💔",
                      color: "from-gray-400 to-gray-600"
                    },
                    {
                      year: "2024",
                      title: "Digital Nostalgia",
                      description: "Friendster lives on in Filipino hearts and memes. The Digital Pinoy Museum preserves this important chapter of Philippine internet history.",
                      icon: "🏛️",
                      color: "from-amber-400 to-amber-600"
                    }
                  ].map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      className="relative flex items-start gap-6"
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-2xl shadow-lg border-4 border-white`}
                          style={{
                            boxShadow: '0 0 20px rgba(255,20,147,0.5)'
                          }}
                        >
                          {event.icon}
                        </motion.div>
                      </div>

                      {/* Event Content */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 bg-gradient-to-r from-white to-pink-50 rounded-lg p-6 shadow-lg border border-pink-200"
                        style={{
                          boxShadow: '0 4px 15px rgba(255,20,147,0.1)'
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.span
                            animate={{
                              textShadow: [
                                '0 0 5px #ff1493',
                                '0 0 10px #ff1493',
                                '0 0 5px #ff1493'
                              ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className={`text-2xl font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}
                          >
                            {event.year}
                          </motion.span>
                          <h4 className="text-xl font-bold text-gray-800">{event.title}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Museum Info */}
        <div className="mt-8 text-center text-sm text-gray-500 bg-gray-50 rounded p-4">
          <p>This is a recreation of a typical Friendster profile from 2005-2006, during the golden age of social networking in the Philippines.</p>
        </div>
      </div>
    </div>
  );
}
