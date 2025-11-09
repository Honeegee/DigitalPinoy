'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, ArrowLeft, Music, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Song {
  id: number;
  title: string;
  artist: string;
  album?: string;
  year: number;
  description: string;
  duration: string;
  genre: string;
  youtubeUrl: string;
  iconic: boolean;
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
  // Use hqdefault for better quality and reliability
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

// Function to get fallback thumbnail URLs
const getThumbnailFallbacks = (url: string): string[] => {
  const videoId = getYouTubeVideoId(url);
  return [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/default.jpg`,
    `https://img.youtube.com/vi/${videoId}/1.jpg`,
    `https://img.youtube.com/vi/${videoId}/2.jpg`,
    `https://img.youtube.com/vi/${videoId}/3.jpg`,
    '/images/rivermaya.jpg' // Final fallback to local image
  ];
};

export default function OPMExhibit() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [isPlaying] = useState(false);
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: '😢', count: 1847, label: 'Hugot' },
    { emoji: '💔', count: 2134, label: 'Heartbreak' },
    { emoji: '😍', count: 992, label: 'Kilig' },
    { emoji: '🔥', count: 1543, label: 'Banger' },
    { emoji: '👏', count: 876, label: 'Galing' }
  ]);

  const songs: Song[] = [
    {
      id: 1,
      title: 'Himala',
      artist: 'Rivermaya',
      album: 'Between the Stars and Waves',
      year: 2003,
      description: 'An epic rock anthem that became the soundtrack of a generation.',
      duration: '4:32',
      genre: 'Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=2vZJo3YilV4',
      iconic: true
    },
    {
      id: 2,
      title: 'The Day You Said Goodnight',
      artist: 'Hale',
      album: 'Twilight',
      year: 2006,
      description: "A melancholic farewell song that became every broken heart's anthem.",
      duration: '3:45',
      genre: 'Alternative Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=DbIY9NSho8Y',
      iconic: true
    },
    {
      id: 3,
      title: 'Beer',
      artist: 'Itchy Worms',
      album: 'Noontime Show',
      year: 2006,
      description: 'The ultimate drinking anthem that became a staple at every Filipino gathering.',
      duration: '3:41',
      genre: 'Alternative Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=EJqa7s121rM',
      iconic: true
    },
    {
      id: 4,
      title: 'Jopay',
      artist: 'Mayonnaise',
      album: 'Pula',
      year: 2007,
      description: 'A powerful rock anthem about social injustice and the struggles of the Filipino people.',
      duration: '4:15',
      genre: 'Alternative Rock',
      youtubeUrl: 'https://youtu.be/oZmcCIXwpto',
      iconic: true
    },
    {
      id: 5,
      title: 'Magbalik',
      artist: 'Callalily',
      album: 'Flower Power',
      year: 2006,
      description: 'A heartfelt ballad about longing and the pain of separation, capturing the essence of Filipino emotional expression.',
      duration: '4:15',
      genre: 'Alternative Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=2G5s-FkqH3Y&list=RD2G5s-FkqH3Y&start_radio=1',
      iconic: true
    },
    {
      id: 6,
      title: 'Gitara',
      artist: 'Parokya ni Edgar',
      album: 'Bumuka',
      year: 2002,
      description: 'A fun and energetic song about playing guitar and enjoying life, showcasing the playful side of Filipino rock music.',
      duration: '3:45',
      genre: 'Alternative Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=LIwV5bPxVPM&list=RDLIwV5bPxVPM&start_radio=1',
      iconic: true
    },
    {
      id: 7,
      title: 'Hawak Kamay',
      artist: 'Yeng Constantino',
      album: 'Salamat',
      year: 2007,
      description: 'A romantic ballad about holding hands and the simple joys of love, capturing the sweet essence of Filipino romance.',
      duration: '4:02',
      genre: 'Pop',
      youtubeUrl: 'https://www.youtube.com/watch?v=5ULI9pXx9ag&list=RD5ULI9pXx9ag&start_radio=1',
      iconic: true
    },
    {
      id: 8,
      title: 'Huwag Ka Nang Umiyak',
      artist: 'Sugarfree',
      album: 'Dahil Sa Gusto Ko Lang Sa Yo',
      year: 2003,
      description: 'A comforting song about moving on from heartbreak, offering solace and hope to those healing from lost love.',
      duration: '4:08',
      genre: 'Alternative Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=NOzRYG91_rQ&list=RDNOzRYG91_rQ&start_radio=1',
      iconic: true
    },
    {
      id: 9,
      title: 'Huwag na Huwag Mong Sasabihin',
      artist: 'Kitchie Nadal',
      album: 'Kitchie Nadal',
      year: 2004,
      description: 'A soulful ballad about unspoken feelings and the fear of confessing love, capturing the vulnerability of young romance.',
      duration: '4:12',
      genre: 'Pop/Rock',
      youtubeUrl: 'https://www.youtube.com/watch?v=-0WBQmiwp50&list=RD-0WBQmiwp50&start_radio=1',
      iconic: true
    }
  ];

  const liveComments = [
    { user: 'OPMforever2003', comment: 'Grabe yung feels ng kanta na to!!! 😭😭😭', time: '1 min ago' },
    { user: 'RockstarPinoy', comment: 'Walang kupas ang OPM!!! Best music era ever!', time: '2 min ago' },
    { user: 'HugotQueen', comment: 'Bakit lahat ng OPM songs perfect for broken hearts? 💔', time: '3 min ago' },
    { user: 'NostalgicMillennial', comment: 'Nakakamiss yung panahong ito sa radyo 📻', time: '4 min ago' },
    { user: 'BandangPinoy', comment: 'Sana mag-reunion lahat ng bands na to!', time: '5 min ago' }
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
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-yellow-900 to-red-900">
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
                  OPM & Hugot Soundtrack
                </h1>
                <p className="text-yellow-300 text-lg">
                  The songs that defined Filipino emotions and became the soundtrack of our lives.
                </p>
              </div>

              <div className="text-right text-white">
                <div className="flex items-center gap-2 text-yellow-300">
                  <Music className="w-5 h-5" />
                  <span>Now Playing</span>
                </div>
                <div className="text-2xl font-mono">📻 FM 97.9</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Music Player Area */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black rounded-xl overflow-hidden shadow-2xl"
              >
                {/* Music Player */}
                <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                  {selectedSong ? (
                    <div className="w-full h-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedSong.youtubeUrl)}?autoplay=1&controls=1&rel=0`}
                        title={selectedSong.title}
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
                        src="https://www.youtube.com/embed/2vZJo3YilV4?autoplay=0&controls=1&rel=0"
                        title="OPM Classic - Himala by Rivermaya"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="rounded-t-xl"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                        <div className="text-center text-white">
                          <Music className="w-12 h-12 mx-auto mb-3 opacity-80" />
                          <p className="text-sm font-medium">Select a song from the playlist →</p>
                          <p className="text-xs text-gray-300 mt-1">Default: Himala by Rivermaya</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Song Info */}
                <div className="bg-gray-900 p-4">
                  {selectedSong ? (
                    <>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-bold">{selectedSong.title}</h3>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span>{selectedSong.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-300 text-sm">Now Playing: {selectedSong.artist}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 text-sm">Share:</span>
                          <button
                            onClick={() => window.open(selectedSong.youtubeUrl, '_blank')}
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
                        <h3 className="text-white font-bold">Himala</h3>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span>4:32</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-gray-300 text-sm">Now Playing: Rivermaya (Default)</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-gray-300 text-sm">Share:</span>
                          <button
                            onClick={() => window.open('https://youtu.be/2vZJo3YilV4', '_blank')}
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

              {/* Song Description */}
              {selectedSong && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{selectedSong.artist}</h3>
                      <p className="text-yellow-300">Song: "{selectedSong.title}"</p>
                      {selectedSong.album && (
                        <p className="text-gray-300 text-sm">Album: {selectedSong.album}</p>
                      )}
                      <p className="text-sm text-gray-300 mt-2">{selectedSong.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl">{selectedSong.year}</div>
                      <div className="text-sm text-gray-300">{selectedSong.genre}</div>
                      {selectedSong.iconic && (
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
              {/* Playlist */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  🎵 OPM Classics Playlist
                </h3>

                <div
                  className="max-h-96 overflow-y-auto pr-2 modern-scroll"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="grid grid-cols-1 gap-3">
                    {songs.map((song) => (
                      <motion.div
                        key={song.id}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedSong(song)}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          selectedSong?.id === song.id
                            ? 'bg-white/20 border-2 border-yellow-400'
                            : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex gap-3">
                      <Image
                        src={getYouTubeThumbnail(song.youtubeUrl)}
                        alt={song.title}
                        width={80}
                        height={56}
                        className="w-20 h-14 object-cover rounded flex-shrink-0"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          const fallbacks = getThumbnailFallbacks(song.youtubeUrl);
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
                              <h4 className="text-white font-medium text-sm truncate pr-2">{song.artist}</h4>
                              {song.iconic && <span className="text-yellow-400 text-xs flex-shrink-0">⭐</span>}
                            </div>
                            <p className="text-gray-300 text-xs mb-2 line-clamp-2">"{song.title}"</p>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400 text-xs">{song.year}</span>
                              <span className="text-gray-400 text-xs">{song.duration}</span>
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
                    placeholder="Share your hugot..."
                    className="flex-1 bg-white/10 text-white placeholder-gray-400 px-3 py-2 rounded-l outline-none text-sm"
                  />
                  <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r text-white text-sm transition-colors">
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
            <h3 className="font-serif text-xl mb-4">🎵 The Golden Age of OPM (1990-2010)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Cultural Impact</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Defined Filipino emotions and experiences</li>
                  <li>• Created the "hugot" culture in music</li>
                  <li>• United generations through shared songs</li>
                  <li>• Established Pinoy rock as mainstream</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Iconic Bands & Artists</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Eraserheads (1989-2002)</li>
                  <li>• Rivermaya (1994-present)</li>
                  <li>• Parokya ni Edgar (1993-present)</li>
                  <li>• Sugarfree (1999-2011)</li>
                  <li>• Hale (2004-present)</li>
                  <li>• Up Dharma Down (2004-present)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Musical Legacy</h4>
                <ul className="space-y-1 text-gray-300">
                  <li>• Radio hits that defined decades</li>
                  <li>• Soundtrack to Filipino life events</li>
                  <li>• Influences on modern OPM artists</li>
                  <li>• Annual music festivals and tributes</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
