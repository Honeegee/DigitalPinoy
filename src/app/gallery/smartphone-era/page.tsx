'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon, Download, Share2, Heart, ChevronLeft, ChevronRight, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Sample images - Replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: '/DigitalPinoy/images/gallery/smartphone-era/instagram-1.jpg',
    title: 'Instagram Filters',
    description: 'Valencia, X-Pro II, and all the vintage filters',
    year: '2012',
    category: 'Social Media'
  },
  {
    id: 2,
    src: '/DigitalPinoy/images/gallery/smartphone-era/facebook-timeline-1.jpg',
    title: 'Facebook Timeline',
    description: 'When Facebook got the timeline redesign',
    year: '2013',
    category: 'Social Media'
  },
  {
    id: 3,
    src: '/DigitalPinoy/images/gallery/smartphone-era/selfie-stick-1.jpg',
    title: 'Selfie Stick Era',
    description: 'The rise of the selfie stick phenomenon',
    year: '2014',
    category: 'Photography'
  },
  {
    id: 4,
    src: '/DigitalPinoy/images/gallery/smartphone-era/twitter-1.jpg',
    title: 'Twitter Philippines',
    description: 'Twitter trends and hashtags dominate',
    year: '2013',
    category: 'Social Media'
  },
  {
    id: 5,
    src: '/DigitalPinoy/images/gallery/smartphone-era/smartphone-1.jpg',
    title: 'First Smartphones',
    description: 'Transition from feature phones to smartphones',
    year: '2011',
    category: 'Technology'
  },
  {
    id: 6,
    src: '/DigitalPinoy/images/gallery/smartphone-era/emoji-1.jpg',
    title: 'Emoji Culture',
    description: 'Emojis replace emoticons',
    year: '2015',
    category: 'Communication'
  },
  {
    id: 7,
    src: '/DigitalPinoy/images/gallery/smartphone-era/temple-run-1.jpg',
    title: 'Temple Run',
    description: 'Mobile gaming goes mainstream',
    year: '2012',
    category: 'Entertainment'
  },
  {
    id: 8,
    src: '/DigitalPinoy/images/gallery/smartphone-era/candy-crush-1.jpg',
    title: 'Candy Crush',
    description: 'Everyone asking for extra lives',
    year: '2013',
    category: 'Entertainment'
  },
  {
    id: 9,
    src: '/DigitalPinoy/images/gallery/smartphone-era/duckface-1.jpg',
    title: 'Duck Face Selfies',
    description: 'The infamous duck face pose',
    year: '2012',
    category: 'Photography'
  },
  {
    id: 10,
    src: '/DigitalPinoy/images/gallery/smartphone-era/ootd-1.jpg',
    title: '#OOTD Culture',
    description: 'Outfit of the Day posts everywhere',
    year: '2014',
    category: 'Social Media'
  },
  {
    id: 11,
    src: '/DigitalPinoy/images/gallery/smartphone-era/flappy-bird-1.jpg',
    title: 'Flappy Bird',
    description: 'The most frustrating game ever',
    year: '2014',
    category: 'Entertainment'
  },
  {
    id: 12,
    src: '/DigitalPinoy/images/gallery/smartphone-era/vine-1.jpg',
    title: 'Vine Videos',
    description: '6-second videos that launched careers',
    year: '2013',
    category: 'Social Media'
  },
  {
    id: 13,
    src: '/DigitalPinoy/images/gallery/smartphone-era/waze-1.jpg',
    title: 'Waze Navigation',
    description: 'Community-based traffic navigation',
    year: '2014',
    category: 'Technology'
  },
  {
    id: 14,
    src: '/DigitalPinoy/images/gallery/smartphone-era/snapchat-1.jpg',
    title: 'Snapchat Filters',
    description: 'Dog filters and face swaps',
    year: '2015',
    category: 'Social Media'
  },
  {
    id: 15,
    src: '/DigitalPinoy/images/gallery/smartphone-era/aldub-1.jpg',
    title: '#AlDub Phenomenon',
    description: 'The social media love team',
    year: '2015',
    category: 'Entertainment'
  },
  {
    id: 16,
    src: '/DigitalPinoy/images/gallery/smartphone-era/clash-clans-1.jpg',
    title: 'Clash of Clans',
    description: 'Building villages and raiding',
    year: '2013',
    category: 'Entertainment'
  },
  {
    id: 17,
    src: '/DigitalPinoy/images/gallery/smartphone-era/4g-1.jpg',
    title: '4G/LTE Launch',
    description: 'Faster mobile internet arrives',
    year: '2012',
    category: 'Technology'
  },
  {
    id: 18,
    src: '/DigitalPinoy/images/gallery/smartphone-era/viber-1.jpg',
    title: 'Viber Messaging',
    description: 'Free calls and messages via Viber',
    year: '2013',
    category: 'Communication'
  },
  {
    id: 19,
    src: '/DigitalPinoy/images/gallery/smartphone-era/groupfie-1.jpg',
    title: 'Groufie',
    description: 'Group selfies become a thing',
    year: '2014',
    category: 'Photography'
  },
  {
    id: 20,
    src: '/DigitalPinoy/images/gallery/smartphone-era/powerbank-1.jpg',
    title: 'Power Banks',
    description: 'Essential for heavy smartphone users',
    year: '2013',
    category: 'Technology'
  },
  {
    id: 21,
    src: '/DigitalPinoy/images/gallery/smartphone-era/netflix-1.jpg',
    title: 'Netflix Arrives',
    description: 'Streaming comes to the Philippines',
    year: '2016',
    category: 'Entertainment'
  },
  {
    id: 22,
    src: '/DigitalPinoy/images/gallery/smartphone-era/line-stickers-1.jpg',
    title: 'LINE Stickers',
    description: 'Cute stickers for messaging',
    year: '2012',
    category: 'Communication'
  }
];

export default function SmartphoneEraGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Social Media', 'Technology', 'Photography', 'Communication', 'Entertainment'];

  const filteredImages = galleryImages
    .filter(img => filter === 'all' || img.category === filter)
    .filter(img =>
      searchTerm === '' ||
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-950 to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-xl py-6 border-b border-blue-500/30 relative z-10 sticky top-0"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/gallery" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all hover:gap-3 group">
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Back to Gallery</span>
              </Link>

              <div className="hidden md:block h-8 w-px bg-gray-700"></div>

              <div className="hidden md:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Smartphone Era
                </h1>
                <p className="text-gray-400 text-sm">2011-2015 • {filteredImages.length} Photos</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                📱 {filteredImages.length} Images
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search images by title, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
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
              key={`${filter}-${searchTerm}`}
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
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-2xl">
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:scale-110 transition-transform duration-700" />
                      <ImageIcon className="w-20 h-20 text-white/30 relative z-10" />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{image.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="bg-blue-500/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
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
                    <div className="absolute top-3 left-3 bg-blue-500/70 backdrop-blur-sm px-3 py-1 rounded-full">
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
          className="mt-16 bg-gradient-to-br from-black/70 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About the Smartphone Era (2011-2015)</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The mobile revolution transformed Filipino digital culture. Instagram filters became a lifestyle, selfie sticks were everywhere,
            Facebook Timeline changed how we shared memories, and Twitter trends dominated conversations. This was when smartphones
            became affordable, front cameras became standard, and everyone became a photographer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/30">
              <h3 className="text-blue-300 font-semibold mb-2">Popular Platforms</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Instagram</li>
                <li>• Twitter</li>
                <li>• Facebook (Timeline)</li>
                <li>• Vine</li>
              </ul>
            </div>
            <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/30">
              <h3 className="text-cyan-300 font-semibold mb-2">Cultural Moments</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Selfie stick craze</li>
                <li>• Instagram filters</li>
                <li>• #AlDub phenomenon</li>
                <li>• Emoji takeover</li>
              </ul>
            </div>
            <div className="bg-sky-500/10 p-4 rounded-xl border border-sky-500/30">
              <h3 className="text-sky-300 font-semibold mb-2">Tech Highlights</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Affordable smartphones</li>
                <li>• Front cameras</li>
                <li>• 4G/LTE</li>
                <li>• Touch screens</li>
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
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-blue-500/30">
                  <span className="text-white font-bold text-sm">{selectedImageIndex + 1}</span>
                  <span className="text-gray-400 mx-1.5 text-sm">/</span>
                  <span className="text-gray-400 font-medium text-sm">{filteredImages.length}</span>
                </div>
                <div className="hidden lg:flex items-center gap-1.5">
                  {filteredImages.map((_, idx) => (
                    <motion.div key={idx} className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${idx === selectedImageIndex ? 'w-8 bg-gradient-to-r from-blue-400 to-cyan-400' : idx < selectedImageIndex ? 'w-6 bg-blue-600/50' : 'w-4 bg-gray-700'}`} onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(idx); setSelectedImage(filteredImages[idx]); }} />
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
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-cyan-500/50 group">
                  <Download className="w-4 h-4 text-white group-hover:text-cyan-400 transition-colors" />
                </motion.button>
                <div className="w-px h-6 bg-white/20 mx-1"></div>
                <motion.button whileHover={{ scale: 1.05, rotate: 90 }} whileTap={{ scale: 0.95 }} onClick={closeLightbox} className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-red-500/20 hover:to-red-600/20 flex items-center justify-center transition-all border border-white/10 hover:border-red-500/50">
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center px-2 relative min-h-0">
              <motion.button whileHover={{ scale: 1.1, x: -5 }} whileTap={{ scale: 0.9 }} onClick={(e) => { e.stopPropagation(); goToPrevious(); }} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500/90 to-cyan-500/90 hover:from-blue-400 hover:to-cyan-400 backdrop-blur-xl flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl group">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1, x: 5 }} whileTap={{ scale: 0.9 }} onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500/90 to-cyan-500/90 hover:from-blue-400 hover:to-cyan-400 backdrop-blur-xl flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl group">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>
              <motion.div key={selectedImageIndex} initial={{ scale: 0.95, opacity: 0, x: 100 }} animate={{ scale: 1, opacity: 1, x: 0 }} exit={{ scale: 0.95, opacity: 0, x: -100 }} transition={{ type: "spring", stiffness: 260, damping: 25, opacity: { duration: 0.25 } }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl h-[calc(100vh-180px)] max-h-[700px]">
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl rounded-xl overflow-hidden border border-blue-500/30 shadow-2xl">
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div></div>
                    <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20" />
                    <ImageIcon className="w-32 h-32 md:w-40 md:h-40 text-white/20 relative z-10" />
                    <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }} className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-md p-4 md:p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent truncate">{selectedImage.title}</h2>
                          <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-1">{selectedImage.description}</p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: "spring" }} className="bg-gradient-to-br from-blue-500 to-cyan-600 px-3 py-1 rounded-lg shadow-lg">
                            <span className="text-white font-bold text-xs">{selectedImage.year}</span>
                          </motion.div>
                          <motion.div initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.3, type: "spring" }} className="bg-gradient-to-br from-cyan-500 to-teal-600 px-3 py-1 rounded-lg shadow-lg hidden md:block">
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
                    <motion.button key={img.id} onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(idx); setSelectedImage(filteredImages[idx]); }} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all border-2 ${idx === selectedImageIndex ? 'border-blue-400 shadow-lg shadow-blue-500/50 w-16 h-16 md:w-18 md:h-18' : 'border-white/10 hover:border-white/30 w-12 h-12 md:w-14 md:h-14 opacity-60 hover:opacity-100'}`}>
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <ImageIcon className={`${idx === selectedImageIndex ? 'w-6 h-6 md:w-7 md:h-7' : 'w-4 h-4 md:w-5 md:h-5'} text-white/40 transition-all`} />
                      </div>
                      {idx === selectedImageIndex && (<motion.div layoutId="activeThumb" className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />)}
                      {idx === selectedImageIndex && (<div className="absolute bottom-0.5 right-0.5 bg-blue-500 px-1.5 py-0.5 rounded backdrop-blur-sm"><span className="text-white font-bold text-[9px] md:text-[10px]">{idx + 1}</span></div>)}
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
