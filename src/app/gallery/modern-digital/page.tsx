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
  // Add more images here...
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
              className="absolute left-6 z-50 w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 z-50 w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center transition-all"
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
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-4xl w-full border border-pink-500/30 shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center relative">
                <ImageIcon className="w-32 h-32 text-white/30" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex items-center gap-3">
                  <span className="bg-pink-500/30 px-3 py-1 rounded-lg text-pink-300 font-semibold text-sm">
                    {selectedImage.year}
                  </span>
                  <span className="bg-purple-500/30 px-3 py-1 rounded-lg text-purple-300 font-semibold text-sm">
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
