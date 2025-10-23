'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon, Download, Share2, Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Sample images - Replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: '/DigitalPinoy/images/gallery/modern-digital/tiktok-1.jpg',
    title: 'TikTok Philippines',
    description: 'Dance trends and viral challenges dominate',
    year: '2020',
    category: 'Social Media'
  },
  {
    id: 2,
    src: '/DigitalPinoy/images/gallery/modern-digital/content-creator-1.jpg',
    title: 'Content Creation',
    description: 'Everyone becomes a content creator',
    year: '2021',
    category: 'Entertainment'
  },
  {
    id: 3,
    src: '/DigitalPinoy/images/gallery/modern-digital/zoom-1.jpg',
    title: 'Zoom Culture',
    description: 'Virtual meetings and online classes',
    year: '2020',
    category: 'Technology'
  },
  {
    id: 4,
    src: '/DigitalPinoy/images/gallery/modern-digital/influencer-1.jpg',
    title: 'Influencer Era',
    description: 'Social media influencers rise to prominence',
    year: '2019',
    category: 'Social Media'
  },
  {
    id: 5,
    src: '/DigitalPinoy/images/gallery/modern-digital/high-quality-1.jpg',
    title: 'Smartphone Photography',
    description: 'Professional-quality photos from phones',
    year: '2022',
    category: 'Photography'
  },
  {
    id: 6,
    src: '/DigitalPinoy/images/gallery/modern-digital/ai-1.jpg',
    title: 'AI Tools',
    description: 'AI photo editing and filters',
    year: '2023',
    category: 'Technology'
  },
  {
    id: 7,
    src: '/DigitalPinoy/images/gallery/modern-digital/reels-1.jpg',
    title: 'Instagram Reels',
    description: 'Short-form video content everywhere',
    year: '2020',
    category: 'Social Media'
  },
  {
    id: 8,
    src: '/DigitalPinoy/images/gallery/modern-digital/podcast-1.jpg',
    title: 'Podcast Culture',
    description: 'Everyone starts a podcast',
    year: '2019',
    category: 'Entertainment'
  },
  {
    id: 9,
    src: '/DigitalPinoy/images/gallery/modern-digital/vlog-1.jpg',
    title: 'Vlogging',
    description: 'Daily vlogs and lifestyle content',
    year: '2018',
    category: 'Social Media'
  },
  {
    id: 10,
    src: '/DigitalPinoy/images/gallery/modern-digital/gcash-1.jpg',
    title: 'Digital Wallets',
    description: 'GCash and PayMaya become essential',
    year: '2020',
    category: 'Technology'
  },
  {
    id: 11,
    src: '/DigitalPinoy/images/gallery/modern-digital/streaming-1.jpg',
    title: 'Game Streaming',
    description: 'Facebook Gaming and streaming culture',
    year: '2019',
    category: 'Entertainment'
  },
  {
    id: 12,
    src: '/DigitalPinoy/images/gallery/modern-digital/online-class-1.jpg',
    title: 'Online Classes',
    description: 'Education goes remote',
    year: '2020',
    category: 'Technology'
  },
  {
    id: 13,
    src: '/DigitalPinoy/images/gallery/modern-digital/foodpanda-1.jpg',
    title: 'Food Delivery Apps',
    description: 'GrabFood and Foodpanda convenience',
    year: '2019',
    category: 'Technology'
  },
  {
    id: 14,
    src: '/DigitalPinoy/images/gallery/modern-digital/amongus-1.jpg',
    title: 'Among Us',
    description: 'Mobile gaming phenomenon',
    year: '2020',
    category: 'Entertainment'
  },
  {
    id: 15,
    src: '/DigitalPinoy/images/gallery/modern-digital/messenger-rooms-1.jpg',
    title: 'Messenger Rooms',
    description: 'Virtual hangouts and celebrations',
    year: '2020',
    category: 'Communication'
  },
  {
    id: 16,
    src: '/DigitalPinoy/images/gallery/modern-digital/spotify-1.jpg',
    title: 'Music Streaming',
    description: 'Spotify playlists for every mood',
    year: '2018',
    category: 'Entertainment'
  },
  {
    id: 17,
    src: '/DigitalPinoy/images/gallery/modern-digital/esports-1.jpg',
    title: 'Esports Scene',
    description: 'Professional gaming leagues grow',
    year: '2021',
    category: 'Entertainment'
  },
  {
    id: 18,
    src: '/DigitalPinoy/images/gallery/modern-digital/wfh-1.jpg',
    title: 'Work From Home',
    description: 'Remote work becomes the norm',
    year: '2020',
    category: 'Technology'
  },
  {
    id: 19,
    src: '/DigitalPinoy/images/gallery/modern-digital/canva-1.jpg',
    title: 'DIY Design',
    description: 'Everyone becomes a designer with Canva',
    year: '2019',
    category: 'Technology'
  },
  {
    id: 20,
    src: '/DigitalPinoy/images/gallery/modern-digital/memes-1.jpg',
    title: 'Meme Culture',
    description: 'Filipino memes go viral worldwide',
    year: '2021',
    category: 'Social Media'
  },
  {
    id: 21,
    src: '/DigitalPinoy/images/gallery/modern-digital/shopee-1.jpg',
    title: 'Online Shopping',
    description: 'Shopee and Lazada become daily habits',
    year: '2020',
    category: 'Technology'
  },
  {
    id: 22,
    src: '/DigitalPinoy/images/gallery/modern-digital/nft-1.jpg',
    title: 'NFTs & Crypto',
    description: 'Digital assets and blockchain hype',
    year: '2021',
    category: 'Technology'
  },
  {
    id: 23,
    src: '/DigitalPinoy/images/gallery/modern-digital/ai-art-1.jpg',
    title: 'AI Art Generation',
    description: 'Midjourney and DALL-E creations',
    year: '2023',
    category: 'Technology'
  },
  {
    id: 24,
    src: '/DigitalPinoy/images/gallery/modern-digital/youtube-shorts-1.jpg',
    title: 'YouTube Shorts',
    description: 'Short-form video competition heats up',
    year: '2021',
    category: 'Social Media'
  }
];

export default function ModernDigitalGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social Media', 'Technology', 'Entertainment', 'Photography', 'Communication'];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const goToNext = () => {
    const nextIndex = (selectedImageIndex + 1) % filteredImages.length;
    setSelectedImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (selectedImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-purple-950 to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-xl py-6 border-b border-pink-500/30 relative z-10 sticky top-0"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/gallery" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-all hover:gap-3 group">
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Back to Gallery</span>
              </Link>

              <div className="hidden md:block h-8 w-px bg-gray-700"></div>

              <div className="hidden md:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Modern Digital
                </h1>
                <p className="text-gray-400 text-sm">2016-2024 • {filteredImages.length} Photos</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-pink-500/20 border border-pink-400/30 px-4 py-2 rounded-full text-pink-300 text-sm font-medium backdrop-blur-sm">
                🚀 {filteredImages.length} Images
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(image, index)}
                  className="group relative break-inside-avoid cursor-pointer mb-6"
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-pink-400/50 transition-all shadow-lg hover:shadow-2xl">
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 group-hover:scale-110 transition-transform duration-700" />
                      <ImageIcon className="w-20 h-20 text-white/30 relative z-10" />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{image.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="bg-pink-500/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                          {image.year}
                        </span>
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Heart className="w-4 h-4 text-white" />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Share2 className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-bold">{image.year}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-pink-500/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-semibold">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Era Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-black/70 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About Modern Digital (2016-2024)</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The age of content creators and influencers. TikTok dances became a daily ritual, everyone had a Ring Light,
            Zoom calls replaced face-to-face meetings, and smartphones produced photos rivaling professional cameras.
            This era saw the democratization of content creation and the rise of the creator economy in the Philippines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-500/10 p-4 rounded-xl border border-pink-500/30">
              <h3 className="text-pink-300 font-semibold mb-2">Popular Platforms</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• TikTok</li>
                <li>• Instagram Reels</li>
                <li>• YouTube Shorts</li>
                <li>• Zoom/Teams</li>
              </ul>
            </div>
            <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/30">
              <h3 className="text-purple-300 font-semibold mb-2">Cultural Moments</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• TikTok dances</li>
                <li>• Virtual everything</li>
                <li>• Influencer culture</li>
                <li>• NFTs & Web3</li>
              </ul>
            </div>
            <div className="bg-fuchsia-500/10 p-4 rounded-xl border border-fuchsia-500/30">
              <h3 className="text-fuchsia-300 font-semibold mb-2">Tech Highlights</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• 100MP cameras</li>
                <li>• AI photo editing</li>
                <li>• 5G internet</li>
                <li>• Ring lights everywhere</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-50 flex flex-col"
          >
            {/* Top Bar - Compact */}
            <div className="relative z-20 flex items-center justify-between px-4 md:px-6 py-3 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-pink-500/30">
                  <span className="text-white font-bold text-sm">{selectedImageIndex + 1}</span>
                  <span className="text-gray-400 mx-1.5 text-sm">/</span>
                  <span className="text-gray-400 font-medium text-sm">{filteredImages.length}</span>
                </div>
                <div className="hidden lg:flex items-center gap-1.5">
                  {filteredImages.map((_, idx) => (
                    <motion.div key={idx} className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${idx === selectedImageIndex ? 'w-8 bg-gradient-to-r from-pink-400 to-purple-400' : idx < selectedImageIndex ? 'w-6 bg-pink-600/50' : 'w-4 bg-gray-700'}`} onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(idx); setSelectedImage(filteredImages[idx]); }} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-red-500/50 group">
                  <Heart className="w-4 h-4 text-white group-hover:text-red-400 transition-colors" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-blue-500/50 group">
                  <Share2 className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-pink-500/50 group">
                  <Download className="w-4 h-4 text-white group-hover:text-pink-400 transition-colors" />
                </motion.button>
                <div className="w-px h-6 bg-white/20 mx-1"></div>
                <motion.button whileHover={{ scale: 1.05, rotate: 90 }} whileTap={{ scale: 0.95 }} onClick={closeLightbox} className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-red-500/20 hover:to-red-600/20 flex items-center justify-center transition-all border border-white/10 hover:border-red-500/50">
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center px-2 relative min-h-0">
              <motion.button whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.9 }} onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-pink-500/90 to-purple-500/90 hover:from-pink-400 hover:to-purple-400 backdrop-blur-xl flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl group">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.9 }} onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-pink-500/90 to-purple-500/90 hover:from-pink-400 hover:to-purple-400 backdrop-blur-xl flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl group">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
              <motion.div key={selectedImageIndex} initial={{ scale: 0.95, opacity: 0, x: 100 }} animate={{ scale: 1, opacity: 1, x: 0 }} exit={{ scale: 0.95, opacity: 0, x: -100 }} transition={{ type: "spring", stiffness: 260, damping: 25, opacity: { duration: 0.25 } }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl h-[calc(100vh-180px)] max-h-[700px]">
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl rounded-xl overflow-hidden border border-pink-500/30 shadow-2xl">
                  <div className="relative w-full h-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div></div>
                    <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20" />
                    <ImageIcon className="w-32 h-32 md:w-40 md:h-40 text-white/20 relative z-10" />
                    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }} className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-md p-4 md:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent truncate">{selectedImage.title}</h2>
                          <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-1">{selectedImage.description}</p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring" }} className="bg-gradient-to-br from-pink-500 to-purple-600 px-3 py-1 rounded-lg shadow-lg">
                            <span className="text-white font-bold text-xs">{selectedImage.year}</span>
                          </motion.div>
                          <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} className="bg-gradient-to-br from-purple-500 to-indigo-600 px-3 py-1 rounded-lg shadow-lg hidden md:block">
                            <span className="text-white font-bold text-xs whitespace-nowrap">{selectedImage.category}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Thumbnails */}
            <div className="relative z-20 px-2 md:px-4 py-2 bg-gradient-to-t from-black/70 to-transparent">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide">
                  {filteredImages.map((img, idx) => (
                    <motion.button key={img.id} onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(idx); setSelectedImage(filteredImages[idx]); }} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all border-2 ${idx === selectedImageIndex ? 'border-pink-400 shadow-lg shadow-pink-500/50 w-16 h-16 md:w-18 md:h-18' : 'border-white/10 hover:border-white/30 w-12 h-12 md:w-14 md:h-14 opacity-60 hover:opacity-100'}`}>
                      <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                        <ImageIcon className={`${idx === selectedImageIndex ? 'w-6 h-6 md:w-7 md:h-7' : 'w-4 h-4 md:w-5 md:h-5'} text-white/40 transition-all`} />
                      </div>
                      {idx === selectedImageIndex && (<motion.div layoutId="activeThumb" className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />)}
                      {idx === selectedImageIndex && (<div className="absolute bottom-0.5 right-0.5 bg-pink-500 px-1.5 py-0.5 rounded backdrop-blur-sm"><span className="text-white font-bold text-[9px] md:text-[10px]">{idx + 1}</span></div>)}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
