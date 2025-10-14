'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Headphones, Map, Coffee, Gift, Info, Shield } from 'lucide-react';

export default function VisitorInfo() {
  const visitorServices = [
    { icon: <Clock className="w-5 h-5" />, label: 'Audio Guide', description: 'Available in English & Filipino' },
    { icon: <Map className="w-5 h-5" />, label: 'Interactive Map', description: 'Navigate all exhibits' },
    { icon: <Headphones className="w-5 h-5" />, label: 'Accessibility', description: 'Screen reader compatible' },
    { icon: <Coffee className="w-5 h-5" />, label: 'Virtual Café', description: 'Internet café experience' },
    { icon: <Gift className="w-5 h-5" />, label: 'Digital Souvenirs', description: 'Downloadable memories' },
    { icon: <Shield className="w-5 h-5" />, label: 'Privacy First', description: 'No data collection' }
  ];

  const museumHours = [
    { day: 'Monday - Friday', hours: '24/7 Virtual Access' },
    { day: 'Weekends', hours: '24/7 Virtual Access' },
    { day: 'Holidays', hours: '24/7 Virtual Access' }
  ];

  return (
    <div className="museum-wall py-16 relative">
      {/* Museum lighting */}
      <div className="museum-lighting opacity-30" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Visitor Information Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="museum-plaque p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Info className="w-6 h-6 text-museum-gold" />
              <h2 className="font-serif text-2xl text-museum-gold">Visitor Information</h2>
            </div>
            <p className="text-museum-cream">
              Essential information for your digital heritage experience
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Museum Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="museum-glass p-8 rounded-xl"
          >
            <h3 className="font-serif text-xl text-museum-dark mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-museum-gold" />
              Museum Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visitorServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 bg-museum-marble rounded-lg"
                >
                  <div className="text-museum-bronze mt-1">{service.icon}</div>
                  <div>
                    <h4 className="font-medium text-museum-dark text-sm">{service.label}</h4>
                    <p className="text-museum-bronze text-xs">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Museum Hours & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Hours */}
            <div className="museum-plaque p-6">
              <h3 className="font-serif text-lg text-museum-gold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Museum Hours
              </h3>
              <div className="space-y-2">
                {museumHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-museum-cream">{schedule.day}</span>
                    <span className="text-museum-gold font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission */}
            <div className="museum-plaque p-6">
              <h3 className="font-serif text-lg text-museum-gold mb-4">Admission</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-museum-cream">General Admission</span>
                  <span className="text-museum-gold font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-museum-cream">Students</span>
                  <span className="text-museum-gold font-bold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-museum-cream">Seniors</span>
                  <span className="text-museum-gold font-bold">FREE</span>
                </div>
                <div className="mt-3 pt-3 border-t border-museum-bronze">
                  <p className="text-museum-cream text-xs">
                    This digital museum is free and accessible to all visitors worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Notice */}
            <div className="museum-glass p-4 border-l-4 border-museum-gold">
              <h4 className="font-medium text-museum-dark text-sm mb-2">📱 Mobile Experience</h4>
              <p className="text-museum-bronze text-xs leading-relaxed">
                Optimized for all devices. Best experienced with audio enabled.
                Touch-friendly interactive exhibits work on phones, tablets, and computers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Museum Code of Conduct */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="museum-plaque p-6 max-w-4xl mx-auto">
            <h3 className="font-serif text-lg text-museum-gold mb-4 text-center">
              Digital Museum Etiquette
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-museum-cream">
              <div className="text-center">
                <div className="text-2xl mb-2">🤳</div>
                <h4 className="text-museum-gold mb-1">Share Freely</h4>
                <p>Screenshots and sharing encouraged. Spread the cultural heritage!</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👂</div>
                <h4 className="text-museum-gold mb-1">Use Headphones</h4>
                <p>For the best audio experience in public spaces.</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💝</div>
                <h4 className="text-museum-gold mb-1">Respect History</h4>
                <p>These exhibits preserve real cultural memories.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}