'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { timelineEvents } from '@/data/timeline';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  const categoryColors = {
    technology: 'bg-blue-500',
    culture: 'bg-purple-500',
    entertainment: 'bg-red-500',
    global: 'bg-green-500',
    emotions: 'bg-pink-500',
    globalization: 'bg-teal-500'
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'technology': return '💻';
      case 'culture': return '🏛️';
      case 'entertainment': return '🎭';
      case 'global': return '🌏';
      case 'emotions': return '💖';
      case 'globalization': return '🌐';
      default: return '📅';
    }
  };

  return (
    <div className="bg-card-bg py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl holographic mb-4">
            Neural Timeline
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Navigate through <span className="neon-text">digital memories</span> that shaped Filipino cyber-culture from 2000 to 2010
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted-teal transform -translate-y-1/2 z-0" />

          {/* Scrollable Timeline */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 py-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`timeline-dot w-6 h-6 rounded-full relative z-10 mx-auto mb-4 cursor-pointer ${
                    selectedYear === event.year ? 'scale-125' : ''
                  }`}
                  onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                />

                {/* Event Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`bg-white rounded-lg shadow-lg p-6 w-80 card-hover cursor-pointer border-l-4 ${
                    categoryColors[event.category]
                  }`}
                  onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{getCategoryIcon(event.category)}</span>
                    <span className="font-bold text-2xl text-accent">{event.year}</span>
                  </div>

                  <h3 className="font-semibold text-lg text-deep-navy mb-2">
                    {event.title}
                  </h3>

                  <p className="text-muted-teal text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      categoryColors[event.category]
                    }`}>
                      {event.category}
                    </span>

                    {selectedYear === event.year && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-accent"
                      >
                        <Clock className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => containerRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 bg-muted-teal text-white rounded-lg hover:bg-deep-navy transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <button
              onClick={() => containerRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 bg-muted-teal text-white rounded-lg hover:bg-deep-navy transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Selected Event Details */}
        {selectedYear && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-12 bg-deep-navy text-white rounded-xl p-8"
          >
            {(() => {
              const event = timelineEvents.find(e => e.year === selectedYear);
              return event ? (
                <div className="text-center">
                  <h3 className="font-serif text-2xl mb-4">{event.title}</h3>
                  <p className="text-warm-sand text-lg mb-4">{event.description}</p>
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-3xl">{getCategoryIcon(event.category)}</span>
                    <span className="text-accent font-bold text-xl">{event.year}</span>
                  </div>
                </div>
              ) : null;
            })()}
          </motion.div>
        )}
      </div>
    </div>
  );
}
