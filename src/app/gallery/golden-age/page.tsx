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
    src: '/DigitalPinoy/images/gallery/golden-age/multiply-1.jpg',
    title: 'Multiply Blog',
    description: 'Personal blogs and photo albums on Multiply',
    year: '2007',
    category: 'Social Media'
  },
  {
    id: 2,
    src: '/DigitalPinoy/images/gallery/golden-age/ym-1.jpg',
    title: 'Yahoo Messenger',
    description: 'YM status messages and emoticons',
    year: '2008',
    category: 'Communication'
  },
  {
    id: 3,
    src: '/DigitalPinoy/images/gallery/golden-age/camera-phone-1.jpg',
    title: 'Camera Phone',
    description: 'First camera phone selfies and MMS',
    year: '2009',
    category: 'Photography'
  },
  {
    id: 4,
    src: '/DigitalPinoy/images/gallery/golden-age/dvd-1.jpg',
    title: 'DVD Collection',
    description: 'Pirated DVDs from Quiapo market',
    year: '2008',
    category: 'Entertainment'
  },
  {
    id: 5,
    src: '/DigitalPinoy/images/gallery/golden-age/facebook-1.jpg',
    title: 'Early Facebook',
    description: 'Facebook arrival in the Philippines',
    year: '2008',
    category: 'Social Media'
  },
  {
    id: 6,
    src: '/DigitalPinoy/images/gallery/golden-age/colored-phones-1.jpg',
    title: 'Colored Phones',
    description: 'Colorful phone designs and faceplates',
    year: '2007',
    category: 'Technology'
  },
  {
    id: 7,
    src: '/DigitalPinoy/images/gallery/golden-age/ipod-1.jpg',
    title: 'iPod Nano',
    description: 'The coolest MP3 player to have',
    year: '2008',
    category: 'Technology'
  },
  {
    id: 8,
    src: '/DigitalPinoy/images/gallery/golden-age/bluetooth-1.jpg',
    title: 'Bluetooth Sharing',
    description: 'Sharing files via Bluetooth in malls',
    year: '2007',
    category: 'Communication'
  },
  {
    id: 9,
    src: '/DigitalPinoy/images/gallery/golden-age/blog-1.jpg',
    title: 'Personal Blogs',
    description: 'Blogspot and Multiply blog posts',
    year: '2009',
    category: 'Social Media'
  },
  {
    id: 10,
    src: '/DigitalPinoy/images/gallery/golden-age/dvd-marathon-1.jpg',
    title: 'DVD Box Sets',
    description: 'Complete TV series on bootleg DVDs',
    year: '2008',
    category: 'Entertainment'
  },
  {
    id: 11,
    src: '/DigitalPinoy/images/gallery/golden-age/dota-1.jpg',
    title: 'DOTA Allstars',
    description: 'Defense of the Ancients at computer shops',
    year: '2007',
    category: 'Gaming'
  },
  {
    id: 12,
    src: '/DigitalPinoy/images/gallery/golden-age/flip-phone-1.jpg',
    title: 'Flip Phones',
    description: 'The satisfying snap of closing a flip phone',
    year: '2006',
    category: 'Technology'
  },
  {
    id: 13,
    src: '/DigitalPinoy/images/gallery/golden-age/ym-status-1.jpg',
    title: 'YM Away Messages',
    description: 'Deep philosophical status messages',
    year: '2008',
    category: 'Communication'
  },
  {
    id: 14,
    src: '/DigitalPinoy/images/gallery/golden-age/usb-1.jpg',
    title: 'USB Flash Drives',
    description: '1GB flash drives with chains',
    year: '2007',
    category: 'Technology'
  },
  {
    id: 15,
    src: '/DigitalPinoy/images/gallery/golden-age/multiply-blog-1.jpg',
    title: 'Multiply Layouts',
    description: 'Customizing your Multiply page',
    year: '2009',
    category: 'Social Media'
  },
  {
    id: 16,
    src: '/DigitalPinoy/images/gallery/golden-age/digital-camera-1.jpg',
    title: 'Point and Shoot',
    description: 'Compact digital cameras everywhere',
    year: '2008',
    category: 'Photography'
  },
  {
    id: 17,
    src: '/DigitalPinoy/images/gallery/golden-age/mms-1.jpg',
    title: 'MMS Messages',
    description: 'Sending photo messages via MMS',
    year: '2007',
    category: 'Communication'
  },
  {
    id: 18,
    src: '/DigitalPinoy/images/gallery/golden-age/torrents-1.jpg',
    title: 'Torrenting',
    description: 'Downloading via BitTorrent overnight',
    year: '2009',
    category: 'Entertainment'
  },
  {
    id: 19,
    src: '/DigitalPinoy/images/gallery/golden-age/special-force-1.jpg',
    title: 'Special Force',
    description: 'The Filipino FPS game craze',
    year: '2008',
    category: 'Gaming'
  },
  {
    id: 20,
    src: '/DigitalPinoy/images/gallery/golden-age/photobooth-1.jpg',
    title: 'Photo Booth',
    description: 'Sticker photos at malls',
    year: '2009',
    category: 'Photography'
  },
  {
    id: 21,
    src: '/DigitalPinoy/images/gallery/golden-age/psp-1.jpg',
    title: 'PlayStation Portable',
    description: 'Handheld gaming on the PSP',
    year: '2007',
    category: 'Gaming'
  },
  {
    id: 22,
    src: '/DigitalPinoy/images/gallery/golden-age/external-hdd-1.jpg',
    title: 'External Hard Drive',
    description: 'Sharing movies via external HDDs',
    year: '2009',
    category: 'Technology'
  }
];

export default function GoldenAgeGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Social Media', 'Technology', 'Communication', 'Entertainment', 'Photography'];

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
    <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-orange-950 to-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-xl py-6 border-b border-yellow-500/30 relative z-10 sticky top-0"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/gallery" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-all hover:gap-3 group">
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Back to Gallery</span>
              </Link>

              <div className="hidden md:block h-8 w-px bg-gray-700"></div>

              <div className="hidden md:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Golden Age
                </h1>
                <p className="text-gray-400 text-sm">2006-2010 • {filteredImages.length} Photos</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-yellow-500/20 border border-yellow-400/30 px-4 py-2 rounded-full text-yellow-300 text-sm font-medium backdrop-blur-sm">
                ✨ {filteredImages.length} Images
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
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
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
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-yellow-400/50 transition-all shadow-lg hover:shadow-2xl">
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 group-hover:scale-110 transition-transform duration-700" />
                      <ImageIcon className="w-20 h-20 text-white/30 relative z-10" />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{image.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="bg-yellow-500/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
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
                    <div className="absolute top-3 left-3 bg-yellow-500/70 backdrop-blur-sm px-3 py-1 rounded-full">
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
          className="mt-16 bg-gradient-to-br from-black/70 to-black/60 backdrop-blur-xl rounded-3xl p-8 border border-yellow-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">About the Golden Age (2006-2010)</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            The peak of pre-smartphone digital culture. Multiply blogs were everywhere, Yahoo Messenger status updates were an art form,
            and colored phones with camera features became the norm. This was when Facebook started taking over, DVDs replaced VCDs,
            and digital photography became accessible to everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/30">
              <h3 className="text-yellow-300 font-semibold mb-2">Popular Platforms</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Multiply</li>
                <li>• Yahoo Messenger</li>
                <li>• Early Facebook</li>
                <li>• Blogger</li>
              </ul>
            </div>
            <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/30">
              <h3 className="text-orange-300 font-semibold mb-2">Cultural Moments</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Multiply photo albums</li>
                <li>• YM away messages</li>
                <li>• DVD piracy peak</li>
                <li>• MMS photos</li>
              </ul>
            </div>
            <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30">
              <h3 className="text-amber-300 font-semibold mb-2">Tech Highlights</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Colored phones</li>
                <li>• 2MP cameras</li>
                <li>• Bluetooth sharing</li>
                <li>• MP3/MP4 players</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modern Carousel Modal - No Scroll Design */}
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
              {/* Counter - Minimal */}
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl px-4 py-2 rounded-xl border border-yellow-500/30">
                  <span className="text-white font-bold text-sm">
                    {selectedImageIndex + 1}
                  </span>
                  <span className="text-gray-400 mx-1.5 text-sm">/</span>
                  <span className="text-gray-400 font-medium text-sm">{filteredImages.length}</span>
                </div>

                {/* Progress bar - Compact */}
                <div className="hidden lg:flex items-center gap-1.5">
                  {filteredImages.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === selectedImageIndex
                          ? 'w-8 bg-gradient-to-r from-yellow-400 to-orange-400'
                          : idx < selectedImageIndex
                          ? 'w-6 bg-yellow-600/50'
                          : 'w-4 bg-gray-700'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(idx);
                        setSelectedImage(filteredImages[idx]);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Actions - Compact */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-red-500/50 group"
                >
                  <Heart className="w-4 h-4 text-white group-hover:text-red-400 transition-colors" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-blue-500/50 group"
                >
                  <Share2 className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-yellow-500/50 group"
                >
                  <Download className="w-4 h-4 text-white group-hover:text-yellow-400 transition-colors" />
                </motion.button>

                <div className="w-px h-6 bg-white/20 mx-1"></div>

                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-red-500/20 hover:to-red-600/20 flex items-center justify-center transition-all border border-white/10 hover:border-red-500/50"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Main Content Area - Maximized */}
            <div className="flex-1 flex items-center justify-center px-2 relative min-h-0">
              {/* Navigation Buttons - Minimal */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-yellow-500/90 to-orange-500/90 hover:from-yellow-400 hover:to-orange-400 backdrop-blur-xl flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl group"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-yellow-500/90 to-orange-500/90 hover:from-yellow-400 hover:to-orange-400 backdrop-blur-xl flex items-center justify-center transition-all z-20 border border-white/20 shadow-xl group"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
              </motion.button>

              {/* Image Card - Full Focus */}
              <motion.div
                key={selectedImageIndex}
                initial={{ scale: 0.95, opacity: 0, x: 100 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0.95, opacity: 0, x: -100 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  opacity: { duration: 0.25 }
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl h-[calc(100vh-180px)] max-h-[700px]"
              >
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-2xl rounded-xl overflow-hidden border border-yellow-500/30 shadow-2xl">
                  {/* Image Container with Overlay */}
                  <div className="relative w-full h-full bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex items-center justify-center overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                      }}></div>
                    </div>

                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-orange-500/20"
                    />
                    <ImageIcon className="w-32 h-32 md:w-40 md:h-40 text-white/20 relative z-10" />
                    {/* Uncomment when you have actual images */}
                    {/* <Image
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      fill
                      className="object-contain p-2"
                    /> */}

                    {/* Top Overlay - Compact Info */}
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-md p-4 md:p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl md:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent truncate">
                            {selectedImage.title}
                          </h2>
                          <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-1">
                            {selectedImage.description}
                          </p>
                        </div>

                        {/* Badges - Compact */}
                        <div className="flex gap-2 flex-shrink-0">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="bg-gradient-to-br from-yellow-500 to-orange-600 px-3 py-1 rounded-lg shadow-lg"
                          >
                            <span className="text-white font-bold text-xs">{selectedImage.year}</span>
                          </motion.div>

                          <motion.div
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="bg-gradient-to-br from-orange-500 to-red-600 px-3 py-1 rounded-lg shadow-lg hidden md:block"
                          >
                            <span className="text-white font-bold text-xs whitespace-nowrap">{selectedImage.category}</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Thumbnail Strip - Minimal */}
            <div className="relative z-20 px-2 md:px-4 py-2 bg-gradient-to-t from-black/70 to-transparent">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide">
                  {filteredImages.map((img, idx) => (
                    <motion.button
                      key={img.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(idx);
                        setSelectedImage(filteredImages[idx]);
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all border-2 ${
                        idx === selectedImageIndex
                          ? 'border-yellow-400 shadow-lg shadow-yellow-500/50 w-16 h-16 md:w-18 md:h-18'
                          : 'border-white/10 hover:border-white/30 w-12 h-12 md:w-14 md:h-14 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                        <ImageIcon className={`${idx === selectedImageIndex ? 'w-6 h-6 md:w-7 md:h-7' : 'w-4 h-4 md:w-5 md:h-5'} text-white/40 transition-all`} />
                        {/* Uncomment when you have actual images */}
                        {/* <Image
                          src={img.src}
                          alt={img.title}
                          fill
                          className="object-cover"
                        /> */}
                      </div>

                      {/* Active Indicator */}
                      {idx === selectedImageIndex && (
                        <motion.div
                          layoutId="activeThumb"
                          className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent"
                        />
                      )}

                      {/* Thumbnail Number - Only on active */}
                      {idx === selectedImageIndex && (
                        <div className="absolute bottom-0.5 right-0.5 bg-yellow-500 px-1.5 py-0.5 rounded backdrop-blur-sm">
                          <span className="text-white font-bold text-[9px] md:text-[10px]">
                            {idx + 1}
                          </span>
                        </div>
                      )}
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
