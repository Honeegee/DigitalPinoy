'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { exhibits } from '@/data/exhibits';
import { ArrowRight, Users, Gamepad2, Tv, Music, Trophy, Church } from 'lucide-react';

export default function ExhibitGrid() {
  const getExhibitIcon = (category: string) => {
    switch (category) {
      case 'social': return <Users className="w-6 h-6" />;
      case 'gaming': return <Gamepad2 className="w-6 h-6" />;
      case 'entertainment': return <Tv className="w-6 h-6" />;
      case 'music': return <Music className="w-6 h-6" />;
      case 'sports': return <Trophy className="w-6 h-6" />;
      case 'faith': return <Church className="w-6 h-6" />;
      default: return <Users className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Exhibits
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive experiences from Filipino digital culture 2000-2010
          </p>
        </motion.div>

        {/* Clean Exhibit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={exhibit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={exhibit.path}>
                <div className="bg-black rounded-lg overflow-hidden hover:bg-gray-800 transition-colors group">
                  {/* Simple Exhibit Preview */}
                  <div className="h-48 flex items-center justify-center" style={{ backgroundColor: exhibit.color + '20' }}>
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: exhibit.color }}
                    >
                      {getExhibitIcon(exhibit.category)}
                    </div>
                  </div>

                  {/* Clean Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gray-300 transition-colors">
                      {exhibit.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {exhibit.subtitle}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {exhibit.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}