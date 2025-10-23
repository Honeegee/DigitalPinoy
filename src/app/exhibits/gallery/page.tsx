'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon, Calendar, Grid3x3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Gallery images organized by era
const galleryImages = {
  'early-digital': [
    {
      id: 1,
      src: '/DigitalPinoy/images/gallery/early-1.jpg',
      title: 'Friendster Profile',
      year: '2003',
      description: 'Classic Friendster profile with glitter graphics'
    },
    {
      id: 2,
      src: '/DigitalPinoy/images/gallery/early-2.jpg',
      title: 'Internet Café',
      year: '2004',
      description: 'Computer shop gaming sessions'
    },
    {
      id: 3,
      src: '/DigitalPinoy/images/gallery/early-3.jpg',
      title: 'Nokia 3310',
      year: '2002',
      description: 'The legendary Nokia phone'
    },
    // Add more images here
  ],
  'golden-age': [
    {
      id: 4,
      src: '/DigitalPinoy/images/gallery/golden-1.jpg',
      title: 'Multiply Blog',
      year: '2007',
      description: 'Multiply was the place for bloggers'
    },
    {
      id: 5,
      src: '/DigitalPinoy/images/gallery/golden-2.jpg',
      title: 'YM Status',
      year: '2008',
      description: 'Yahoo Messenger golden era'
    },
    {
      id: 6,
      src: '/DigitalPinoy/images/gallery/golden-3.jpg',
      title: 'Camera Phone',
      year: '2009',
      description: 'First camera phone selfies'
    },
    // Add more images here
  ],
  'smartphone': [
    {
      id: 7,
      src: '/DigitalPinoy/images/gallery/smartphone-1.jpg',
      title: 'Instagram Filter',
      year: '2012',
      description: 'Instagram filters everywhere'
    },
    {
      id: 8,
      src: '/DigitalPinoy/images/gallery/smartphone-2.jpg',
      title: 'Facebook Timeline',
      year: '2013',
      description: 'When Facebook timeline launched'
    },
    {
      id: 9,
      src: '/DigitalPinoy/images/gallery/smartphone-3.jpg',
      title: 'Selfie Stick Era',
      year: '2014',
      description: 'The rise of the selfie stick'
    },
    // Add more images here
  ],
  'modern': [
    {
      id: 10,
      src: '/DigitalPinoy/images/gallery/modern-1.jpg',
      title: 'TikTok Dance',
      year: '2020',
      description: 'TikTok takes over'
    },
    {
      id: 11,
      src: '/DigitalPinoy/images/gallery/modern-2.jpg',
      title: 'Zoom Culture',
      year: '2021',
      description: 'Virtual everything'
    },
    {
      id: 12,
      src: '/DigitalPinoy/images/gallery/modern-3.jpg',
      title: 'Content Creation',
      year: '2023',
      description: 'Everyone is a content creator'
    },
    // Add more images here
  ]
};

const eras = [
  {
    id: 'all',
    name: 'All Eras',
    years: '2000-2024',
    color: 'from-purple-500 to-pink-500',
    icon: '🎨'
  },
  {
    id: 'early-digital',
    name: 'Early Digital',
    years: '2000-2005',
    color: 'from-green-500 to-emerald-500',
    icon: '💾'
  },
  {
    id: 'golden-age',
    name: 'Golden Age',
    years: '2006-2010',
    color: 'from-yellow-500 to-orange-500',
    icon: '✨'
  },
  {
    id: 'smartphone',
    name: 'Smartphone Era',
    years: '2011-2015',
    color: 'from-blue-500 to-cyan-500',
    icon: '📱'
  },
  {
    id: 'modern',
    name: 'Modern Digital',
    years: '2016-2024',
    color: 'from-pink-500 to-purple-500',
    icon: '🚀'
  }
];

export default function GalleryPage() {
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Get images based on selected era
  const getFilteredImages = () => {
    if (selectedEra === 'all') {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[selectedEra as keyof typeof galleryImages] || [];
  };

  const filteredImages = getFilteredImages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-xl py-8 border-b border-purple-500/30 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-all hover:gap-3 group">
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Back to Museum</span>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-4 leading-tight"
              >
                Digital Pinoy Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-purple-200 text-lg max-w-2xl leading-relaxed"
              >
                A visual journey through Filipino digital culture. Explore nostalgic moments from the early 2000s to today.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex gap-4 flex-wrap"
              >
                <div className="bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                  🎨 {filteredImages.length} Images
                </div>
                <div className="bg-pink-500/20 border border-pink-400/30 px-4 py-2 rounded-full text-pink-300 text-sm font-medium backdrop-blur-sm">
                  📅 25 Years of History
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-right text-white bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-400/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 text-purple-300 mb-3">
                <ImageIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">Nostalgic Collection</span>
              </div>
              <div className="text-3xl font-mono bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">
                2000-2024
              </div>
              <div className="text-sm text-gray-300 mt-2">Filipino Digital History</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Era Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Filter by Era
              </span>
            </h2>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {eras.map((era) => (
                <motion.button
                  key={era.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedEra(era.id)}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedEra === era.id
                      ? `bg-gradient-to-r ${era.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{era.icon}</span>
                    <div className="text-left">
                      <div className="text-sm font-bold">{era.name}</div>
                      <div className="text-xs opacity-80">{era.years}</div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEra}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedImage(image)}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all cursor-pointer shadow-lg hover:shadow-2xl"
                >
                  {/* Image Placeholder - Replace with actual images */}
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-500" />
                    <ImageIcon className="w-16 h-16 text-white/30" />
                    {/* Uncomment when you have actual images */}
                    {/* <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>

                  {/* Image Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{image.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-purple-500/50 px-2 py-1 rounded text-white text-xs font-semibold">
                        {image.year}
                      </span>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                    {image.year}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
                <ImageIcon className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-bold mb-2">No Images Yet</h3>
                <p className="text-gray-400">Images for this era will be added soon!</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-xl rounded-3xl p-8 text-white border border-purple-500/30 shadow-2xl"
        >
          <h3 className="font-serif text-2xl mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent flex items-center gap-3">
            <Grid3x3 className="w-6 h-6 text-purple-400" />
            Gallery Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-6 rounded-2xl border border-purple-400/30">
              <div className="text-3xl mb-2">📸</div>
              <div className="text-2xl font-bold text-purple-300 mb-1">
                {Object.values(galleryImages).flat().length}
              </div>
              <div className="text-gray-300 text-sm">Total Images</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-6 rounded-2xl border border-blue-400/30">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-2xl font-bold text-blue-300 mb-1">
                {eras.length - 1}
              </div>
              <div className="text-gray-300 text-sm">Different Eras</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/10 p-6 rounded-2xl border border-pink-400/30">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-2xl font-bold text-pink-300 mb-1">
                25 Years
              </div>
              <div className="text-gray-300 text-sm">Of Digital History</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full border border-purple-500/30 shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <ImageIcon className="w-32 h-32 text-white/30" />
                {/* Uncomment when you have actual images */}
                {/* <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="object-contain"
                /> */}
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                <div className="flex items-center gap-4">
                  <span className="bg-purple-500/30 px-4 py-2 rounded-lg text-purple-300 font-semibold">
                    Year: {selectedImage.year}
                  </span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-2 rounded-lg text-white font-semibold transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
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
