
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as ImageIcon, Shuffle, Search, Filter, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, BookOpen } from 'lucide-react';
import Link from 'next/link';

const allGalleryImages = [
  { id: 1, src: '/DigitalPinoy/gallery/2000hits.jpg', title: '2000s Music Hits', category: 'Music',
    description: 'Represents the rise of OPM bands and global pop songs that shaped the daily soundtrack of Filipino teens during the early 2000s.' },
  { id: 2, src: '/DigitalPinoy/gallery/Bamboo.png', title: 'Bamboo Band', category: 'Music',
    description: 'Bamboo became one of the most admired Filipino rock bands of the decade, known for songs that expressed social views and youth identity.' },
  { id: 3, src: '/DigitalPinoy/gallery/cabletv.jpg', title: 'Cable TV Era', category: 'Entertainment',
    description: 'Cable channels such as HBO, Star Movies, and Cartoon Network became common in Filipino households, changing how families consumed media.' },
  { id: 4, src: '/DigitalPinoy/gallery/Callalily.png', title: 'Callalily Band', category: 'Music',
    description: 'Callalily rose to popularity with heartfelt rock ballads that were widely played on FM radio and youth-oriented shows.' },
  { id: 5, src: '/DigitalPinoy/gallery/candymag1.jpg', title: 'Candy Magazine', category: 'Lifestyle',
    description: 'Candy Magazine served as a trusted guide for Filipino teens, featuring fashion, school life, and local celebrity icons of the period.' },
  { id: 6, src: '/DigitalPinoy/gallery/candymag2.gif', title: 'Candy Magazine GIF', category: 'Lifestyle',
    description: 'A digital version of Candy Magazine, reflecting the shift toward online teen culture and early social networking.' },
  { id: 7, src: '/DigitalPinoy/gallery/cartoonnetwork.jpg', title: 'Cartoon Network', category: 'Entertainment',
    description: 'Cartoon Network shows like Powerpuff Girls and Dexter’s Laboratory became daily favorites for Filipino children in the 2000s.' },
  { id: 8, src: '/DigitalPinoy/gallery/classic_pc_setup.jpg', title: 'Classic PC Setup', category: 'Technology',
    description: 'A typical computer setup in Filipino homes during the early internet era, often used for chat rooms, games, and school research.' },
  { id: 9, src: '/DigitalPinoy/gallery/collage.png', title: 'Digital Collage', category: 'Art',
    description: 'Represents the rise of digital editing and creative collages that became popular among Filipino youth on early social media platforms.' },
  { id: 10, src: '/DigitalPinoy/gallery/compshop.jpg', title: 'Computer Shop', category: 'Technology',
    description: 'Computer shops became social hubs where Filipino students played online games, printed schoolwork, and accessed the internet.' },
  { id: 11, src: '/DigitalPinoy/gallery/converse.jpg', title: 'Converse Shoes', category: 'Fashion',
    description: 'Converse sneakers were a fashion staple among Filipino teens, often paired with skinny jeans and band shirts.' },
  { id: 12, src: '/DigitalPinoy/gallery/counterstrike.jpg', title: 'Counter Strike', category: 'Gaming',
    description: 'Counter-Strike tournaments were popular in local computer shops, shaping the early gaming community in the Philippines.' },
  { id: 13, src: '/DigitalPinoy/gallery/counterstrike_tactical.jpg', title: 'Counter Strike Tactical', category: 'Gaming',
    description: 'Shows the tactical and team-based gameplay that attracted many Filipino players during the height of LAN gaming culture.' },
  { id: 14, src: '/DigitalPinoy/gallery/disney.png', title: 'Disney Era', category: 'Entertainment',
    description: 'Disney Channel shows and movies gained strong influence among Filipino kids, introducing new trends and characters.' },
  { id: 15, src: '/DigitalPinoy/gallery/dota.jpg', title: 'DOTA Gaming', category: 'Gaming',
    description: 'Defense of the Ancients became a national gaming craze, with Filipino teens spending hours mastering strategies in computer shops.' },
  { id: 16, src: '/DigitalPinoy/gallery/Dyesebel.png', title: 'Dyesebel Teleserye', category: 'Entertainment',
    description: 'A classic Filipino mermaid story revived in the 2000s, capturing family audiences with fantasy and romance themes.' },
  { id: 17, src: '/DigitalPinoy/gallery/Dyosa.png', title: 'Dyosa Series', category: 'Entertainment',
    description: 'A fantasy teleserye that reflected the Filipino love for mythical characters and dramatic storytelling.' },
  { id: 18, src: '/DigitalPinoy/gallery/early_internet_setup.jpg', title: 'Early Internet Setup', category: 'Technology',
    description: 'Shows the dial-up and early broadband era when Filipinos first explored email, forums, and basic social networks.' },
  { id: 19, src: '/DigitalPinoy/gallery/EliSoriano.png', title: 'Eli Soriano', category: 'Religion',
    description: 'Bro. Eli Soriano’s program "Ang Dating Daan" was widely viewed, becoming part of religious discussions in many households.' },

{ id: 20, src: '/DigitalPinoy/gallery/ElShaddai.png', title: 'El Shaddai', category: 'Religion',
  description: 'El Shaddai gatherings remained influential, showing the deep spiritual culture of Filipino communities during the decade.' },

{ id: 21, src: '/DigitalPinoy/gallery/fashion.jpg', title: '2000s Fashion', category: 'Fashion',
  description: 'Low-rise jeans, chunky accessories, and layered tops defined the everyday style of Filipino youth in the early 2000s.' },

{ id: 22, src: '/DigitalPinoy/gallery/gaming.jpg', title: 'Gaming Culture', category: 'Gaming',
  description: 'Shows the active gaming lifestyle of Filipino teens who spent hours playing online battles and cooperative games.' },

{ id: 23, src: '/DigitalPinoy/gallery/Hale.png', title: 'Hale Band', category: 'Music',
  description: 'Hale became a favorite OPM band with emotional songs that resonated with Filipino students and young adults.' },

{ id: 24, src: '/DigitalPinoy/gallery/handm.png', title: 'H&M Fashion', category: 'Fashion',
  description: 'Reflects the growing interest of Filipino youth in international fast fashion trends during the late 2000s.' },

{ id: 25, src: '/DigitalPinoy/gallery/harrypotter.jpg', title: 'Harry Potter', category: 'Entertainment',
  description: 'Harry Potter films had strong influence in Philippine cinemas, inspiring fan groups, book clubs, and school events.' },

{ id: 26, src: '/DigitalPinoy/gallery/ItchyWorms.png', title: 'Itchy Worms', category: 'Music',
  description: 'The Itchyworms delivered light rock and humorous hits that became popular on radio and TV music shows.' },

{ id: 27, src: '/DigitalPinoy/gallery/Jejetext.png', title: 'Jeje Text', category: 'Culture',
  description: 'Represents the unique texting style used by many Filipino teens during the peak of SMS culture.' },

{ id: 28, src: '/DigitalPinoy/gallery/levis.png', title: 'Levi\'s Fashion', category: 'Fashion',
  description: 'Levi’s jeans remained a trusted brand among Filipinos, especially with the rise of denim-based outfits in the 2000s.' },

{ id: 29, src: '/DigitalPinoy/gallery/mango.png', title: 'Mango Fashion', category: 'Fashion',
  description: 'Mango was a favorite choice for modern and polished styles among Filipino women in urban areas.' },

{ id: 30, src: '/DigitalPinoy/gallery/Marina.png', title: 'Marina Series', category: 'Entertainment',
  description: 'A fantasy teleserye that captured Filipino viewers with its mermaid storyline and dramatic character arcs.' },

{ id: 31, src: '/DigitalPinoy/gallery/Mayonnaise.png', title: 'Mayonnaise Band', category: 'Music',
  description: 'Their hit “Jopay” became widely recognized and often played during school events and gatherings.' },

{ id: 32, src: '/DigitalPinoy/gallery/meteorgarden.jpg', title: 'Meteor Garden', category: 'Entertainment',
  description: 'This Taiwanese drama had a major cultural influence in the Philippines, starting the Asian drama wave.' },

{ id: 33, src: '/DigitalPinoy/gallery/MotorolaRazr.png', title: 'Motorola Razr', category: 'Technology',
  description: 'A trendy flip phone that became a status symbol among Filipino teens and professionals.' },

{ id: 34, src: '/DigitalPinoy/gallery/Mulawin.png', title: 'Mulawin Series', category: 'Entertainment',
  description: 'Mulawin was one of the most watched fantasy series of the decade, featuring mythical bird-human characters.' },

{ id: 35, src: '/DigitalPinoy/gallery/Nazareno.png', title: 'Nazareno', category: 'Religion',
  description: 'The devotion to the Black Nazarene remained strong, drawing millions of Filipino devotees each year.' },

{ id: 36, src: '/DigitalPinoy/gallery/nick.png', title: 'Nickelodeon', category: 'Entertainment',
  description: 'Nickelodeon shows such as Drake & Josh and Avatar became part of the daily lives of Filipino children.' },

{ id: 37, src: '/DigitalPinoy/gallery/nike.jpg', title: 'Nike Fashion', category: 'Fashion',
  description: 'Nike shoes and apparel were popular among Filipino youth, especially during school sports events.' },

{ id: 38, src: '/DigitalPinoy/gallery/nokia_collection.jpg', title: 'Nokia Collection', category: 'Technology',
  description: 'Nokia phones dominated the Philippine market, known for their durability and low texting costs.' },

{ id: 39, src: '/DigitalPinoy/gallery/nokia_phones.jpg', title: 'Nokia Phones', category: 'Technology',
  description: 'Filipinos heavily relied on affordable Nokia phones for texting, which became a major part of social communication.' },

{ id: 40, src: '/DigitalPinoy/gallery/OldCellphone.png', title: 'Old Cellphone', category: 'Technology',
  description: 'Represents the pre-smartphone era where Filipinos used simple phones mainly for calls and SMS.' },

{ id: 41, src: '/DigitalPinoy/gallery/oldshowsdisney.jpg', title: 'Old Disney Shows', category: 'Entertainment',
  description: 'Disney Channel series shaped the humor and interests of Filipino children during the 2000s.' },

{ id: 42, src: '/DigitalPinoy/gallery/pacquaiodiaz.png', title: 'Pacquiao vs Diaz', category: 'Sports',
  description: 'One of Manny Pacquiao’s memorable fights watched by millions of Filipinos nationwide.' },

{ id: 43, src: '/DigitalPinoy/gallery/pacquiao.png', title: 'Manny Pacquiao', category: 'Sports',
  description: 'Manny Pacquiao became a national hero, uniting Filipinos across social classes with every match.' },

{ id: 44, src: '/DigitalPinoy/gallery/pacquiaochamp.png', title: 'Pacquiao Champion', category: 'Sports',
  description: 'Shows the pride of Filipinos as Pacquiao continued to win world titles throughout the decade.' },

{ id: 45, src: '/DigitalPinoy/gallery/pacquiaochamp2.png', title: 'Pacquiao Championship', category: 'Sports',
  description: 'Celebrates Pacquiao’s growing legacy, which was widely followed on television and public screenings.' },

{ id: 46, src: '/DigitalPinoy/gallery/pacquiaodelahoya.png', title: 'Pacquiao vs Dela Hoya', category: 'Sports',
  description: 'This match became one of the most discussed events in Philippine sports culture.' },

{ id: 47, src: '/DigitalPinoy/gallery/pacquiaomorales.png', title: 'Pacquiao vs Morales', category: 'Sports',
  description: 'A classic rivalry that Filipino fans watched closely on free TV and pay-per-view.' },

{ id: 48, src: '/DigitalPinoy/gallery/Panday.png', title: 'Panday Series', category: 'Entertainment',
  description: 'A well-known fantasy-action character that returned to Philippine television during the 2000s.' },

{ id: 49, src: '/DigitalPinoy/gallery/PangakoSa_yo.png', title: 'Pangako Sa\'yo', category: 'Entertainment',
  description: 'A romantic teleserye that gained massive viewership and captured the emotions of Filipino audiences.' },

{ id: 50, src: '/DigitalPinoy/gallery/ParokyaniEdgar.png', title: 'Parokya ni Edgar', category: 'Music',
  description: 'Known for humorous and relatable songs, Parokya ni Edgar became a major part of OPM culture.' },

{ id: 51, src: '/DigitalPinoy/gallery/pbb.jpg', title: 'Pinoy Big Brother', category: 'Entertainment',
  description: 'PBB introduced reality TV to Filipinos, influencing trends, fashion, and public discussions.' },

{ id: 52, src: '/DigitalPinoy/gallery/philippineidol.jpg', title: 'Philippine Idol', category: 'Entertainment',
  description: 'Part of the singing competition craze that encouraged many Filipinos to pursue performance careers.' },

{ id: 53, src: '/DigitalPinoy/gallery/Photoalbum.jpg', title: 'Photo Album', category: 'Lifestyle',
  description: 'Physical photo albums were common in Filipino homes before the shift to digital storage.' },

{ id: 54, src: '/DigitalPinoy/gallery/powerpuffgirls.jpg', title: 'Powerpuff Girls', category: 'Entertainment',
  description: 'One of the most beloved cartoons among Filipino children in the early 2000s.' },

{ id: 55, src: '/DigitalPinoy/gallery/sarahg.jpg', title: 'Sarah Geronimo', category: 'Music',
  description: 'Sarah Geronimo became one of the era’s top performers after winning a national singing contest.' },

{ id: 56, src: '/DigitalPinoy/gallery/seventeenmag1.jpg', title: 'Seventeen Magazine', category: 'Lifestyle',
  description: 'Seventeen inspired teenage Filipinas with fashion guides, beauty advice, and celebrity features.' },

{ id: 57, src: '/DigitalPinoy/gallery/seventeenmag2.jpg', title: 'Seventeen Magazine 2', category: 'Lifestyle',
  description: 'A continuation of the magazine’s role in shaping teenage style and pop culture interests.' },

{ id: 58, src: '/DigitalPinoy/gallery/Simbang Gabi.png', title: 'Simbang Gabi', category: 'Religion',
  description: 'A cherished Filipino Christmas tradition, with families attending dawn masses together.' },

{ id: 59, src: '/DigitalPinoy/gallery/slider_flip.jpg', title: 'Slider Flip Phone', category: 'Technology',
  description: 'Slider phones were trendy gadgets for Filipino teens before touchscreen devices became common.' },

{ id: 60, src: '/DigitalPinoy/gallery/SmartBuddyOldSim.png', title: 'Smart Buddy SIM', category: 'Technology',
  description: 'The Smart Buddy SIM was widely used during the rise of prepaid texting in the Philippines.' },

{ id: 61, src: '/DigitalPinoy/gallery/spiderman.jpg', title: 'Spider-Man', category: 'Entertainment',
  description: 'Spider-Man films were box-office hits in Philippine cinemas, inspiring merchandise and fan groups.' },

{ id: 62, src: '/DigitalPinoy/gallery/SuperTwins.png', title: 'Super Twins', category: 'Entertainment',
  description: 'A fantasy series that reflected the Filipino love for heroic characters and family-friendly drama.' },

{ id: 63, src: '/DigitalPinoy/gallery/teleserye1.jpeg', title: 'Teleserye 1', category: 'Entertainment',
  description: 'Represents the dominance of evening teleseryes in Filipino households during the 2000s.' },

{ id: 64, src: '/DigitalPinoy/gallery/teleserye2.jpg', title: 'Teleserye 2', category: 'Entertainment',
  description: 'Shows the dramatic themes and emotional storytelling that defined Philippine television.' },

{ id: 65, src: '/DigitalPinoy/gallery/teleserye3.jpg', title: 'Teleserye 3', category: 'Entertainment',
  description: 'Another example of the strong teleserye culture that kept families watching TV together.' },

{ id: 66, src: '/DigitalPinoy/gallery/twilight.jpg', title: 'Twilight', category: 'Entertainment',
  description: 'Twilight became a sensation among Filipino teens, influencing fashion and fandom culture.' },

{ id: 67, src: '/DigitalPinoy/gallery/vcd_cover.jpg', title: 'VCD Cover', category: 'Entertainment',
  description: 'VCDs were the main format for movies and concerts in Filipino households before DVDs became common.' },

{ id: 68, src: '/DigitalPinoy/gallery/vcd_karaoke.jpg', title: 'VCD Karaoke', category: 'Entertainment',
  description: 'Karaoke VCDs were widely used in Filipino gatherings, reflecting the country’s love for singing.' },

{ id: 69, src: '/DigitalPinoy/gallery/vhs.jpg', title: 'VHS Tapes', category: 'Entertainment',
  description: 'VHS tapes were still used in some Filipino homes and rental shops during the early 2000s.' },

{ id: 70, src: '/DigitalPinoy/gallery/video_rental.jpg', title: 'Video Rental', category: 'Entertainment',
  description: 'Video rental shops offered affordable entertainment for Filipino families before streaming services existed.' },

{ id: 71, src: '/DigitalPinoy/gallery/y2k2.jpg', title: 'Y2K Fashion 2', category: 'Fashion',
  description: 'Reflects the bold and colorful styles that were common among Filipino teens during the Y2K era.' },

{ id: 72, src: '/DigitalPinoy/gallery/y2k1.jpg', title: 'Y2K Fashion 1', category: 'Fashion',
  description: 'Another example of early 2000s fashion trends that influenced youth style in schools and malls.' },

{ id: 73, src: '/DigitalPinoy/gallery/zara.png', title: 'Zara Fashion', category: 'Fashion',
  description: 'Zara attracted Filipino shoppers with modern clothing styles during the late 2000s retail boom.' },

{ id: 74, src: '/DigitalPinoy/gallery/casette.jpg', title: 'Cassette Tapes', category: 'Entertainment',
  description: 'Cassette tapes were still widely used in the early 2000s for music, voice recordings, and mixtapes.' },

{ id: 75, src: '/DigitalPinoy/gallery/cd.jpg', title: 'CD Collection', category: 'Entertainment',
  description: 'Compact discs became the primary format for music, software, and games during the 2000s era.' },

{ id: 76, src: '/DigitalPinoy/gallery/dialup.jpg', title: 'Dial-up Internet', category: 'Technology',
  description: 'The iconic sound of dial-up internet connected Filipino households to the early digital world.' },

{ id: 77, src: '/DigitalPinoy/gallery/kdrama.jpg', title: 'Korean Drama Wave', category: 'Entertainment',
  description: 'Korean dramas gained massive popularity in the Philippines, influencing fashion and culture trends.' },

{ id: 78, src: '/DigitalPinoy/gallery/facebookearlyera.jpg', title: 'Facebook Early Era', category: 'Technology',
  description: 'Facebook became the dominant social media platform in the Philippines, connecting friends and family.' },

{ id: 79, src: '/DigitalPinoy/gallery/friendster.jpg', title: 'Friendster Social Network', category: 'Technology',
  description: 'Friendster was the first major social network in the Philippines, revolutionizing how Filipinos connected online.' }
];

export default function GalleryPage() {
  const [images, setImages] = useState(allGalleryImages);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const categories = ['All', ...new Set(allGalleryImages.map(img => img.category))];

  const shuffleImages = () => {
    const shuffled = [...allGalleryImages].sort(() => Math.random() - 0.5);
    setImages(shuffled);
  };

  useEffect(() => {
    let filtered = allGalleryImages;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(img => 
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setImages(filtered);
  }, [selectedCategory, searchQuery]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
      setZoomLevel(1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
      setZoomLevel(1);
    }
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/gallery.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl opacity-20"
        />
        
        {typeof window !== 'undefined' && [...Array(15)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomOffset = Math.random() * 50 - 25;
          const randomDuration = 3 + Math.random() * 4;
          const randomDelay = Math.random() * 5;
          
          return (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, randomOffset, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Gallery
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">79+</span> Digital Pinoy Memories
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            From 2000s music hits to modern fashion trends, discover the cultural moments that shaped our generation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-16"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>{images.length} Images</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span>{categories.length - 1} Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span>25 Years</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(90deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                    'linear-gradient(90deg, rgba(236, 72, 153, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
                    'linear-gradient(90deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)',
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search memories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-6 py-4 bg-black/50 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/30 w-80 transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(90deg, rgba(236, 72, 153, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
                    'linear-gradient(90deg, rgba(6, 182, 212, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)',
                    'linear-gradient(90deg, rgba(236, 72, 153, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative flex items-center gap-3 bg-black/50 backdrop-blur-xl border-2 border-pink-500/30 rounded-2xl px-6 py-4">
                <Filter className="text-pink-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-white focus:outline-none font-medium cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-900">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95, rotate: -5 }}
              onClick={shuffleImages}
              className="relative group overflow-hidden rounded-2xl"
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)',
                    'linear-gradient(135deg, #ec4899 0%, #06b6d4 50%, #a855f7 100%)',
                    'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #ec4899 100%)',
                    'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)',
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative flex items-center gap-3 px-8 py-4 text-white font-bold text-lg">
                <Shuffle className="w-5 h-5" />
                Shuffle
              </span>
            </motion.button>

            <Link href="/gallery/references">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 rounded-2xl hover:bg-purple-500/30 transition-all"
              >
                <BookOpen className="w-5 h-5" />
                <span>References</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {images.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-white mb-2">No images found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                  style={{ perspective: '1000px' }}
                >
                  {/* Glowing Border Effect */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(168, 85, 247, 0)',
                        '0 0 40px rgba(168, 85, 247, 0.4)',
                        '0 0 20px rgba(168, 85, 247, 0)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                    className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                  />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-purple-500/20 group-hover:border-purple-500/60 transition-all duration-500 shadow-2xl">
                    <div className="aspect-square relative overflow-hidden">
                      {/* Image */}
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-cyan-500/0 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-500" />
                      
                      {/* Animated Border Sweep */}
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      
                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        {/* Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="opacity-0 group-hover:opacity-100 mb-3"
                        >
                          <span className="inline-block text-xs font-bold px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg">
                            {image.category}
                          </span>
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 drop-shadow-lg"
                        >
                          {image.title}
                        </motion.h3>
                        
                        {/* View Button */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                            <span>View Details</span>
                            <motion.svg
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      
      
      
      
{/* Image-First Carousel Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/98"
          onClick={closeLightbox}
        >
          {/* Main Content - Full Screen Image */}
          <div className="relative h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            {/* Main Image Container - Takes Priority */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4"
            >
              <div className="relative max-w-[90vw] max-h-[85vh] w-full h-full">
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  fill
                  className="object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>
            </motion.div>

            {/* Minimal Top Controls - Semi-transparent */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute top-6 left-0 right-0 flex items-center justify-between px-8 pointer-events-none"
            >
              {/* Counter */}
              <div className="pointer-events-auto bg-black/60 backdrop-blur-md rounded-full px-5 py-2 border border-white/10">
                <span className="text-white text-sm font-medium">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-3 pointer-events-auto">
                {/* Zoom */}
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                    disabled={zoomLevel <= 0.5}
                    className="text-white hover:text-purple-300 disabled:opacity-30 disabled:hover:text-white"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </motion.button>
                  
                  <span className="text-white text-xs font-medium min-w-[45px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                    disabled={zoomLevel >= 3}
                    className="text-white hover:text-purple-300 disabled:opacity-30 disabled:hover:text-white"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Close */}
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeLightbox}
                  className="p-2.5 bg-black/60 backdrop-blur-md hover:bg-red-500/30 rounded-full text-white border border-white/10 hover:border-red-400/30 transition-all"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Large Side Navigation Buttons */}
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 p-4 bg-black/60 backdrop-blur-md hover:bg-white/10 rounded-full text-white border border-white/10 transition-all shadow-xl"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 p-4 bg-black/60 backdrop-blur-md hover:bg-white/10 rounded-full text-white border border-white/10 transition-all shadow-xl"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Bottom Info Bar - Compact & Description Included */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-8 pb-6 px-8"
            >
              <div className="max-w-7xl mx-auto">
                {/* Title, Category & Description */}
                <motion.div
                  key={selectedImage}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-4"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white">
                      {images[selectedImage].title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full text-white text-xs font-medium border border-purple-400/30">
                      {images[selectedImage].category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-4xl">
                    {images[selectedImage].description}
                  </p>
                </motion.div>

              </div>
            </motion.div>

            {/* Keyboard Shortcuts Hint - Minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-6 right-8 flex items-center gap-3 text-gray-500 text-xs"
            >
              <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10 font-mono">←→</kbd>
              <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10 font-mono">+/-</kbd>
              <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10 font-mono">ESC</kbd>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}