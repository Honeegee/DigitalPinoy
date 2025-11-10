'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Camera, 
  Music, 
  ArrowLeft,
  Calendar,
  TrendingUp,
  Zap,
  Clock,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function FriendsterEraPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/DigitalPinoy/images/technology.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/grid-pattern.png')] opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/50"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            The Friendster Era
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            Digital Identity v1.0: Where Profiles Became Personalities
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-purple-900/30 backdrop-blur-sm border border-purple-500/50 rounded-full"
          >
            <p className="text-sm text-purple-300 font-semibold">
              2003-2009: The Original Social Network
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12"
          >
            <p className="text-gray-500 text-sm mb-3">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-5 h-8 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-purple-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section 1 */}
      <section className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold text-sm">Year 2003</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-purple-400">Profile</span> That Started It All
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Before Facebook, before Instagram—there was Friendster. 
                  The platform where Filipinos first learned to craft their digital identities.
                </p>
                <p>
                  Your profile wasn't just a page—it was your digital personality. 
                  The background music, the "About Me" section, the testimonials, 
                  the profile picture that took hours to choose.
                </p>
                <div className="bg-purple-900/20 border-l-4 border-purple-500 rounded p-4 mt-4">
                  <p className="text-purple-300 font-semibold">
                    "The first time we could be anyone we wanted online."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/friendster.jpg"
                  alt="Classic Friendster profile"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">The iconic blue interface that defined early social networking.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  The evolution of social media: A timeline of how it started and where it's heading. (n.d.). Buro 24/7. https://www.buro247.my/lifestyle/technology/the-evolution-of-social-media-a-timeline-of-how-it-started-and-where-its-heading.html
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Customization Section */}
      <section className="relative z-10 py-16 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              The Art of <span className="text-purple-400">Profile Crafting</span>
            </h2>
            <p className="text-gray-400">Every element told a story</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Profile Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/40 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-black/50 rounded-xl border border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/DigitalPinoy/technology/friendster2.jpg')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                      🎵 Animated Friendster Profile
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Friendster Profile Interface. (n.d.). DeviantArt. https://www.deviantart.com/dsoulanna/art/Friendster-Profile-Interface-78277578
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                Custom HTML!
              </motion.div>
            </motion.div>

            {/* Profile Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Profile Essentials</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '🎵', title: 'Profile Music', desc: 'Rivermaya, Parokya ni Edgar, or your favorite OPM' },
                  { icon: '📸', title: 'Profile Pic', desc: 'The perfect angle, the right filter, the best lighting' },
                  { icon: '💬', title: 'Testimonials', desc: '"Add me as friend! Testi for testi!"' },
                  { icon: '🎨', title: 'Custom HTML', desc: 'Animated backgrounds, glitter text, scrolling marquees' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-purple-900/20 border border-purple-500/20 rounded-lg p-3 hover:border-purple-500/40 transition-colors"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Friendster Culture */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              The <span className="text-pink-400">Culture</span> We Created
            </h2>
            <p className="text-gray-400">Every feature had its own language</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The Friend Race',
                emoji: '🏃‍♂️',
                message: 'Who has more friends?',
                description: 'The original social currency. 500 friends? 1000? The numbers mattered.',
                color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
              },
              {
                title: 'Testi Wars',
                emoji: '💬',
                message: 'Testi for testi!',
                description: 'The art of writing testimonials. Long, poetic, heartfelt messages.',
                color: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
              },
              {
                title: 'Profile Stalking',
                emoji: '👀',
                message: 'Who viewed my profile?',
                description: 'The original digital curiosity. Checking who visited your page.',
                color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
              },
              {
                title: 'Music Identity',
                emoji: '🎵',
                message: 'My profile song is...',
                description: 'Your music taste defined your personality. OPM or international?',
                color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
              },
              {
                title: 'The Crush List',
                emoji: '💕',
                message: 'Top 8 Friends',
                description: 'Carefully curated. Who made the cut? Who got bumped?',
                color: 'from-red-500/20 to-pink-500/20 border-red-500/30'
              },
              {
                title: 'HTML Masters',
                emoji: '💻',
                message: 'Custom backgrounds!',
                description: 'Learning HTML just to make your profile stand out.',
                color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`bg-gradient-to-br ${story.color} backdrop-blur-sm rounded-xl border p-5 hover:shadow-xl transition-all`}
              >
                <div className="text-3xl mb-3">{story.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{story.title}</h3>
                <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-purple-400 text-center text-sm">
                  "{story.message}"
                </div>
                <p className="text-gray-300 text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-xl border border-pink-500/30 overflow-hidden relative">
                <img
                  src="/DigitalPinoy/technology/frienster3.jpg"
                  alt="Friendster social connections"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Where high school friends became digital connections.</p>
                </div>
              </div>
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-400 italic">
                  Friendster Was the Best Social Media Site Ever. (n.d.). Vice. https://www.vice.com/en/article/friendster-was-the-best-social-media-site-ever-1
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-pink-400" />
                <span className="text-pink-400 font-semibold text-sm">Social Revolution</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                More Than Just <span className="text-pink-400">Friends</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Friendster wasn't just a website—it was a social revolution. 
                  It taught Filipinos how to connect digitally, how to present themselves online, 
                  and how to maintain relationships across distances.
                </p>
                <p>
                  From reconnecting with elementary classmates to meeting new people, 
                  Friendster created the blueprint for modern Filipino digital socializing.
                </p>
                <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded-lg p-4 mt-4">
                  <p className="text-pink-300 font-semibold italic">
                    "We didn't just make friends. We created digital communities."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              By the <span className="text-purple-400">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '90%', label: 'PH Market Share', icon: Users, color: 'purple' },
              { number: '500+', label: 'Average Friends', icon: Heart, color: 'pink' },
              { number: '2003', label: 'Launch Year', icon: Calendar, color: 'blue' },
              { number: '#1', label: 'Social Network', icon: TrendingUp, color: 'green' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-500/60 transition-all"
              >
                {(() => {
                  const IconComponent = stat.icon;
                  return <IconComponent className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3`} />;
                })()}
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, we have Facebook, Instagram, TikTok, and a dozen other social platforms. 
                But none of them captured the magic of Friendster's simplicity and creativity.
              </p>
              <p>
                Friendster taught us that <span className="text-purple-400 font-semibold">digital identity matters</span>. That profiles could be art. 
                That testimonials could be poetry. That 500 friends wasn't just a number—it was a community.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-purple-300 font-semibold italic">
                  "We didn't just make profiles. We created digital identities. We built communities. 
                  We learned to connect—one friend request at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative z-10 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/timeline/technology">
              <motion.button
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/internet-cafe">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-amber-900/30 border border-amber-500/30 rounded-lg text-amber-300 text-sm hover:bg-amber-900/50 transition-all"
                >
                  ← Previous: Internet Café
                </motion.button>
              </Link>
              <Link href="/timeline/technology/dial-up">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-blue-900/30 border border-blue-500/30 rounded-lg text-blue-300 text-sm hover:bg-blue-900/50 transition-all"
                >
                  Next: Dial-Up Era →
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
