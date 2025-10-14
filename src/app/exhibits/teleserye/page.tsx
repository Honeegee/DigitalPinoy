'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, ArrowLeft, Tv, Clock, Users } from 'lucide-react';
import Link from 'next/link';

interface Episode {
  id: number;
  title: string;
  series: string;
  year: number;
  description: string;
  duration: string;
  thumbnail: string;
  iconic: boolean;
  youtubeUrl: string;
}

interface Reaction {
  emoji: string;
  count: number;
  label: string;
}

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
};

// Function to get YouTube thumbnail URL with fallbacks
const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  // Try maxresdefault first, but have fallbacks in the onError handler
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Function to get fallback thumbnail URLs
const getThumbnailFallbacks = (url: string): string[] => {
  const videoId = getYouTubeVideoId(url);
  return [
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/default.jpg`,
    '/images/mainhall.jpg' // Final fallback to local image
  ];
};

export default function TeleserveExhibit() {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: '😭', count: 1247, label: 'Crying' },
    { emoji: '😍', count: 892, label: 'Kilig' },
    { emoji: '😠', count: 543, label: 'Galit' },
    { emoji: '😱', count: 678, label: 'Shocked' },
    { emoji: '❤️', count: 2134, label: 'Love' }
  ]);

  const episodes: Episode[] = [
    {
      id: 1,
      title: 'The Wedding That Never Was',
      series: 'Pangako Sa Yo',
      year: 2000,
      description: 'Amor and Eduardo\'s tragic wedding finale that had the entire Philippines in tears.',
      duration: '45:32',
      thumbnail: '/thumbnails/pangako.jpg',
      iconic: true,
      youtubeUrl: 'https://youtu.be/Yxee5KPoK5Q'
    },
    {
      id: 2,
      title: 'Gabriel Meets Via',
      series: 'Mula sa Puso',
      year: 1997,
      description: 'The fateful meeting between cab driver Gabriel and heiress Via that started it all.',
      duration: '43:20',
      thumbnail: '/thumbnails/mula.jpg',
      iconic: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=q0N-Rnksb6E'
    },
    {
      id: 3,
      title: 'Dorina vs Lavinia Showdown',
      series: 'Bituing Walang Ningning',
      year: 2006,
      description: 'The iconic singing battle between fan-turned-star Dorina and her idol Lavinia.',
      duration: '38:45',
      thumbnail: '/thumbnails/bituing.jpg',
      iconic: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=eDGa0Cj7VCs'
    },
    {
      id: 4,
      title: 'Flavio\'s Transformation',
      series: 'Panday',
      year: 2005,
      description: 'The moment Flavio discovers his destiny and transforms into the legendary Panday.',
      duration: '38:15',
      thumbnail: '/thumbnails/panday.jpg',
      iconic: true,
      youtubeUrl: 'https://youtu.be/IfXM1jtImcQ'
    },
    {
      id: 5,
      title: 'Daoming Si\'s Declaration',
      series: 'Meteor Garden',
      year: 2003,
      description: 'The dramatic declaration that made hearts flutter across the Philippines.',
      duration: '42:18',
      thumbnail: '/thumbnails/meteor.jpg',
      iconic: false,
      youtubeUrl: 'https://www.youtube.com/watch?v=QOku14Wv19Y'
    },
    {
      id: 6,
      title: 'The Truth About Amor',
      series: 'Esperanza',
      year: 1997,
      description: 'Family secrets are revealed in this emotional confrontation scene.',
      duration: '40:25',
      thumbnail: '/thumbnails/esperanza.jpg',
      iconic: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=3ebG4BYWT2A'
    },
    {
      id: 7,
      title: 'Marina\'s Revenge',
      series: 'Marina',
      year: 2004,
      description: 'The mermaid princess seeks vengeance against those who wronged her.',
      duration: '44:10',
      thumbnail: '/thumbnails/marina.jpg',
      iconic: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=ei05iIZk3V0'
    },
    {
      id: 8,
      title: 'The Final Goodbye',
      series: 'Sana Maulit Muli',
      year: 2007,
      description: 'The heart-wrenching finale that left viewers in tears for weeks.',
      duration: '46:30',
      thumbnail: '/thumbnails/sana.jpg',
      iconic: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=GJvuyrXDDk4'
    },
    {
      id: 9,
      title: 'The Kapamilya Christmas Special',
      series: 'May Bukas Pa',
      year: 2009,
      description: 'Santino\'s Christmas miracle that brought hope to millions of Filipino families.',
      duration: '50:15',
      thumbnail: '/thumbnails/maybukas.jpg',
      iconic: true,
      youtubeUrl: 'https://www.youtube.com/watch?v=az10M68bdAc'
    }
  ];

  const liveComments = [
    { user: 'TeleserveAddict2004', comment: 'OMG!!! Hindi ko kinaya!!! 😭😭😭', time: '2 min ago' },
    { user: 'TeamAmorEduardo', comment: 'Bakit hindi nalang sila nagkatuluyan?!', time: '3 min ago' },
    { user: 'PinoyPride2000s', comment: 'Walang panama ang Korean dramas dito!', time: '5 min ago' },
    { user: 'MomWatchingToo', comment: 'Nakiiyak din ako dito with my nanay 😢', time: '6 min ago' },
    { user: 'HighSchoolMe', comment: 'Nood habang ginagawa homework HAHAHA', time: '8 min ago' }
  ];

  const addReaction = (index: number) => {
    setReactions(prev => prev.map((reaction, i) =>
      i === index ? { ...reaction, count: reaction.count + 1 } : reaction
    ));
  };

  return (
    <>
      <style jsx>{`
        .modern-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .modern-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .modern-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .modern-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%);
          transform: scale(1.1);
        }
        .modern-scroll::-webkit-scrollbar-thumb:active {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%);
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-900 to-pink-900">
      {/* Header */}
      <div className="bg-black/50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-300 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Museum
          </Link>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Teleserye Living Room
              </h1>
              <p className="text-yellow-300 text-lg">
                Relive the drama, emotions, and iconic moments that brought families together every night.
              </p>
            </div>

            <div className="text-right text-white">
              <div className="flex items-center gap-2 text-yellow-300">
                <Tv className="w-5 h-5" />
                <span>Prime Time</span>
              </div>
              <div className="text-2xl font-mono">7:30 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              {/* Video Player */}
              <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                {selectedEpisode ? (
                  <div className="w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedEpisode.youtubeUrl)}?autoplay=${isPlaying ? 1 : 0}&controls=1&rel=0`}
                      title={selectedEpisode.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-t-xl"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/3ebG4BYWT2A?autoplay=0&controls=1&rel=0"
                      title="Filipino Teleserye Nostalgia - Esperanza"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-t-xl"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                      <div className="text-center text-white">
                        <Tv className="w-12 h-12 mx-auto mb-3 opacity-80" />
                        <p className="text-sm font-medium">Select an episode from the list →</p>
                        <p className="text-xs text-gray-300 mt-1">Default: Esperanza (Classic Filipino Drama)</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="bg-gray-900 p-4">
                {selectedEpisode ? (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold">{selectedEpisode.title}</h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{selectedEpisode.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-300 text-sm">Now Playing: {selectedEpisode.series}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-300 text-sm">Share:</span>
                        <button
                          onClick={() => window.open(selectedEpisode.youtubeUrl, '_blank')}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold">The Truth About Amor</h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>40:25</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-300 text-sm">Now Playing: Esperanza (Default)</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-300 text-sm">Share:</span>
                        <button
                          onClick={() => window.open('https://www.youtube.com/watch?v=3ebG4BYWT2A', '_blank')}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Episode Description */}
            {selectedEpisode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{selectedEpisode.series}</h3>
                    <p className="text-yellow-300">Episode: &quot;{selectedEpisode.title}&quot;</p>
                    <p className="text-sm text-gray-300 mt-2">{selectedEpisode.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl">{selectedEpisode.year}</div>
                    {selectedEpisode.iconic && (
                      <div className="text-yellow-400 text-sm">⭐ Iconic</div>
                    )}
                  </div>
                </div>

                {/* Live Reactions */}
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    Live Reactions
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    {reactions.map((reaction, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addReaction(index)}
                        className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
                      >
                        <span className="text-xl">{reaction.emoji}</span>
                        <span className="text-sm">{reaction.count}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Episode List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                📺 Iconic Episodes
              </h3>

              <div
                className="max-h-96 overflow-y-auto pr-2 modern-scroll"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="grid grid-cols-1 gap-3">
                  {episodes.map((episode) => (
                    <motion.div
                      key={episode.id}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedEpisode(episode)}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        selectedEpisode?.id === episode.id
                          ? 'bg-white/20 border-2 border-yellow-400'
                          : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex gap-3">
                        <img
                          src={getYouTubeThumbnail(episode.youtubeUrl)}
                          alt={episode.title}
                          className="w-20 h-14 object-cover rounded flex-shrink-0"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            const fallbacks = getThumbnailFallbacks(episode.youtubeUrl);
                            const currentSrc = img.src;

                            // Find the next fallback URL to try
                            const currentIndex = fallbacks.findIndex(url =>
                              currentSrc.includes(url.split('/').pop() || '')
                            );

                            const nextFallback = fallbacks[currentIndex + 1] || fallbacks[0];
                            if (nextFallback && img.src !== nextFallback) {
                              img.src = nextFallback;
                            }
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="text-white font-medium text-sm truncate pr-2">{episode.series}</h4>
                            {episode.iconic && <span className="text-yellow-400 text-xs flex-shrink-0">⭐</span>}
                          </div>
                          <p className="text-gray-300 text-xs mb-2 line-clamp-2">&quot;{episode.title}&quot;</p>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-xs">{episode.year}</span>
                            <span className="text-gray-400 text-xs">{episode.duration}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Live Comments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                Live Comments
              </h3>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-2 modern-scroll"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)',
                }}
              >
                {liveComments.map((comment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 p-3 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-blue-300 text-xs font-medium">
                        {comment.user}
                      </span>
                      <span className="text-gray-400 text-xs">{comment.time}</span>
                    </div>
                    <p className="text-white text-sm">{comment.comment}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 flex">
                <input
                  type="text"
                  placeholder="Add your reaction..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 px-3 py-2 rounded-l outline-none text-sm"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r text-white text-sm transition-colors">
                  Send
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-black/50 backdrop-blur-sm rounded-xl p-6 text-white"
        >
          <h3 className="font-serif text-xl mb-4">📺 The Golden Age of Filipino Teleseryes (2000-2010)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-yellow-300 mb-2">Cultural Impact</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Brought families together every night</li>
                <li>• Created shared national experiences</li>
                <li>• Launched careers of major stars</li>
                <li>• Influenced fashion and language</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-300 mb-2">Iconic Series</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Pangako Sa &apos;Yo (2000-2002)</li>
                <li>• Mula sa Puso (1997-1999)</li>
                <li>• Bituing Walang Ningning (2006)</li>
                <li>• Marina (2004)</li>
                <li>• Sana Maulit Muli (2007)</li>
                <li>• May Bukas Pa (2009-2010)</li>
                <li>• Esperanza (1997-1999, reruns)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-300 mb-2">Social Phenomena</h4>
              <ul className="space-y-1 text-gray-300">
                <li>• Empty streets during finales</li>
                <li>• School discussions next day</li>
                <li>• Theme songs as LSS</li>
                <li>• Merchandise and fan culture</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}