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
  // Add more images here...
];

export default function SmartphoneEraGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social Media', 'Technology', 'Photography', 'Communication', 'Entertainment'];

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
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            {/* Close Button - Top Right */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-6 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm font-semibold">
                {selectedImageIndex + 1} / {filteredImages.length}
              </span>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-4xl w-full border border-blue-500/30 shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center relative">
                <ImageIcon className="w-32 h-32 text-white/30" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex items-center gap-3">
                  <span className="bg-blue-500/30 px-3 py-1 rounded-lg text-blue-300 font-semibold text-sm">
                    {selectedImage.year}
                  </span>
                  <span className="bg-cyan-500/30 px-3 py-1 rounded-lg text-cyan-300 font-semibold text-sm">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
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
