'use client';

import { motion } from 'framer-motion';
import { Heart, Users, ArrowLeft, Monitor, Gamepad2, Music, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Honey Grace Denolan',
      role: 'Museum Director & Digital Curator',
      description: 'Leading the preservation of Filipino digital culture and overseeing the museum\'s vision',
      icon: '🏛️',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Alfredo Crisostomo Malong',
      role: 'Experience Designer',
      description: 'Crafting immersive journeys and interactive exhibits that bring our digital past to life',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Dominic Gideon Abad',
      role: 'Technology Archivist',
      description: 'Preserving and documenting the technological artifacts of the early 2000s Filipino internet',
      icon: '💻',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Emmanuel Roxas',
      role: 'Content Researcher',
      description: 'Collecting and curating stories from the golden age of Filipino digital culture',
      icon: '📚',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Jan Ysis Crystalyn Doloque',
      role: 'Community Engagement Manager',
      description: 'Connecting visitors with their digital memories and fostering the museum community',
      icon: '🤝',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Digital Pinoy Museum Founded',
      description: 'Born from a collective longing to preserve the unique Filipino digital culture of the early 2000s',
      icon: '🚀'
    },
    {
      year: '2000-2010',
      title: 'The Golden Era',
      description: 'The decade we celebrate - when Filipinos first embraced digital technology and made it uniquely ours',
      icon: '✨'
    },
    {
      year: '2003',
      title: 'Friendster Revolution',
      description: 'The moment that defined a generation of Filipino digital natives',
      icon: '👥'
    },
    {
      year: '2001',
      title: 'Text Capital of the World',
      description: 'When the Philippines became the global leader in SMS messaging',
      icon: '📱'
    }
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/abouthall.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      {/* Header */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-10 h-10 text-pink-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Our Museum
              </h1>
              <Users className="w-10 h-10 text-cyan-400" />
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Preserving the Digital Barkada Experience
            </p>
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The Digital Pinoy Museum is more than just a collection of memories—it's a love letter to the decade
              that transformed how Filipinos connect, create, and express themselves in the digital world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-4xl mb-4">💾</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Preserve</h3>
                <p className="text-gray-300 leading-relaxed">
                  Safeguarding the digital artifacts, stories, and experiences that defined Filipino internet culture
                  during the transformative 2000-2010 decade.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Educate</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sharing the rich history of how Filipinos embraced, adapted, and uniquely transformed
                  digital technology to reflect our culture and values.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-pink-400 mb-4">Connect</h3>
                <p className="text-gray-300 leading-relaxed">
                  Bringing together generations to celebrate the shared digital memories that helped
                  shape modern Filipino identity and community.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-400">Key moments in preserving Filipino digital heritage</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl border-4 border-white shadow-lg"
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>

                  {/* Event Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-gradient-to-r from-white/5 to-purple-50/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-cyan-400">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Digital Barkada</h2>
            <p className="text-gray-400">The passionate team behind preserving our digital heritage</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl mb-6 mx-auto border-4 border-white/20`}
                  >
                    {member.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why This Matters Section */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Why This Era Matters</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <Monitor className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">First Internet Generation</div>
                </div>
                <div className="text-center">
                  <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Gaming Culture Born</div>
                </div>
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-pink-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Social Networks Emerged</div>
                </div>
                <div className="text-center">
                  <Music className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">Digital Media Shared</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                The 2000-2010 decade was when Filipinos didn't just adopt technology—we made it our own.
                We transformed chat rooms into digital tambayan, turned Friendster into our virtual plaza,
                and made internet cafes our modern-day sari-sari stores. This wasn't just technological progress;
                it was cultural evolution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Digital Barkada</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Have memories, stories, or artifacts from the Filipino digital golden age?
              Help us preserve these precious moments for future generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/exhibits">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                >
                  Explore Exhibits
                </motion.button>
              </Link>

              <Link href="/timeline">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(236, 72, 153, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-400 hover:to-purple-400 transition-all duration-300"
                >
                  View Timeline
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
              <blockquote className="text-xl md:text-2xl text-cyan-400 italic mb-4">
              "Ang internet cafe hindi lang lugar ng games—tambayan natin yan,
              yung lugar kung saan nagsimula ang aming digital na pagkakaibigan."
            </blockquote>
            <p className="text-gray-400">— Every Millennial Filipino, probably</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
