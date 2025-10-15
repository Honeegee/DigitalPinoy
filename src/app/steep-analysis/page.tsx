"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  TrendingUp,
  Scale,
  Palette,
  Leaf,
  Sparkles,
  MessageCircle,
  Gamepad2,
  Heart,
  Smartphone,
  UsersRound,
  TrendingUp as ChartLine,
  Vote,
  Music2,
  LeafyGreen,
  Globe,
  Building,
  Coins,
  Users2,
  TreePine,
  Network,
  LineChart,
  Megaphone,
  Headphones,
  Recycle,
  Users as UsersModern,
  DollarSign,
  Scale as ScaleModern,
  Palette as PaletteModern,
  Leaf as LeafModern
} from "lucide-react";

const steepCategories = [
  {
    id: "social",
    title: "Social",
    subtitle: "Community & Relationships",
    description:
      "How technology transformed Filipino social interactions, from barkada gaming to online communities.",
    icon: Network,
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-900/20 to-blue-900/20",
    iconColor: "text-cyan-400",
    href: "/steep-analysis/social",
    keyEvents: [
      "Internet cafés as social hubs",
      "Friendster friendships",
      "SMS communication revolution",
      "Online gaming communities"
    ]
  },
  {
    id: "economic",
    title: "Economic",
    subtitle: "Digital Economy Growth",
    description:
      "The economic impact of technology adoption, from load cards to digital entrepreneurship.",
    icon: LineChart,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-900/20 to-emerald-900/20",
    iconColor: "text-green-400",
    href: "/steep-analysis/economic",
    keyEvents: [
      "Internet café boom",
      "Load card industry",
      "Freelancing revolution",
      "E-commerce emergence"
    ]
  },
  {
    id: "political",
    title: "Political",
    subtitle: "Digital Activism & Governance",
    description:
      "How technology influenced political discourse, mobilization, and digital rights.",
    icon: Megaphone,
    color: "from-purple-500 to-indigo-500",
    bgColor: "from-purple-900/20 to-indigo-900/20",
    iconColor: "text-purple-400",
    href: "/steep-analysis/political",
    keyEvents: [
      "EDSA II text activism",
      "Social media campaigns",
      "Digital mobilization",
      "Misinformation challenges"
    ]
  },
  {
    id: "cultural",
    title: "Cultural",
    subtitle: "Identity & Expression",
    description:
      "The cultural transformation through digital media, from OPM to meme culture.",
    icon: Headphones,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-900/20 to-red-900/20",
    iconColor: "text-orange-400",
    href: "/steep-analysis/cultural",
    keyEvents: [
      "Filipino-ized tech use",
      "Digital content creation",
      "Meme culture rise",
      "Cultural export through media"
    ]
  },
  {
    id: "environmental",
    title: "Environmental",
    subtitle: "Sustainability & Impact",
    description:
      "The environmental consequences of rapid technology adoption and emerging green solutions.",
    icon: Recycle,
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-900/20 to-cyan-900/20",
    iconColor: "text-teal-400",
    href: "/steep-analysis/environmental",
    keyEvents: [
      "E-waste from cafés",
      "Energy consumption",
      "Green tech initiatives",
      "Sustainable digital practices"
    ]
  }
];

export default function EnhancedSteepAnalysis() {
  const [hovered, setHovered] = useState<string | null>(null);

  const isHovered = (id: string) => hovered === id;

  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        backgroundImage: "url('/DigitalPinoy/images/thenandnow.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      <div className="relative z-10 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h1
              className="font-extrabold mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                background: "linear-gradient(90deg, #60A5FA, #22D3EE, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Then and Now
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
              Comprehensive analysis of Philippine digital culture across five analytical dimensions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="relative min-h-[560px] bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40 rounded-3xl p-8 border border-gray-700/30 museum-glass overflow-hidden">

          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0.08) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0.08) 76%, transparent 77%, transparent)",
                backgroundSize: "50px 50px",
                animation: "gridMove 25s linear infinite"
              }}
            />
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {[
              { left: 10, top: 15, icon: <MessageCircle size={30} /> },
              { left: 25, top: 80, icon: <Users size={30} /> },
              { left: 40, top: 35, icon: <Heart size={30} /> },
              { left: 60, top: 70, icon: <Gamepad2 size={30} /> },
              { left: 75, top: 20, icon: <Smartphone size={30} /> },
              { left: 90, top: 60, icon: <MessageCircle size={30} /> },
              { left: 15, top: 85, icon: <Users size={30} /> },
              { left: 35, top: 45, icon: <Heart size={30} /> },
              { left: 55, top: 25, icon: <Gamepad2 size={30} /> },
              { left: 80, top: 75, icon: <Smartphone size={30} /> },
              { left: 20, top: 30, icon: <MessageCircle size={30} /> },
              { left: 45, top: 65, icon: <Users size={30} /> },
              { left: 65, top: 40, icon: <Heart size={30} /> },
              { left: 85, top: 55, icon: <Gamepad2 size={30} /> },
              { left: 30, top: 90, icon: <Smartphone size={30} /> },
              { left: 70, top: 10, icon: <MessageCircle size={30} /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-cyan-400/12"
                style={{ left: `${item.left}%`, top: `${item.top}%` }}
                animate={{ 
                  y: [0, -20 - (i % 3) * 10, 0], 
                  x: [0, (i % 2 === 0 ? 1 : -1) * 15, 0], 
                  rotate: [0, 180, 360], 
                  scale: [0.5, 0.9, 0.5] 
                }}
                transition={{ 
                  duration: 12 + (i % 4) * 2, 
                  repeat: Infinity, 
                  delay: (i % 8) * 0.5 
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-12 place-items-center">
            {steepCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative flex flex-col items-center w-full"
                >
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: isHovered(category.id) ? 1 : 0.9, y: isHovered(category.id) ? -10 : 0 }} className="mb-4 text-center">
                    <div
                      className="text-2xl font-semibold mb-1"
                      style={{
                        background: category.color === "from-cyan-500 to-blue-500" ? "linear-gradient(90deg,#22d3ee,#06b6d4)" :
                                   category.color === "from-green-500 to-emerald-500" ? "linear-gradient(90deg,#22c55e,#16a34a)" :
                                   category.color === "from-purple-500 to-indigo-500" ? "linear-gradient(90deg,#a855f7,#9333ea)" :
                                   category.color === "from-orange-500 to-red-500" ? "linear-gradient(90deg,#fb923c,#ea580c)" :
                                   "linear-gradient(90deg,#14b8a6,#0f766e)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {category.title}
                    </div>
                    <div className="text-xs text-gray-300 max-w-[140px] text-center">{category.keyEvents[0]}</div>
                  </motion.div>

                  <Link href={category.href} className="w-full">
                    <motion.div
                      whileHover={{ y: -18, scale: 1.06 }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setHovered(category.id)}
                      onHoverEnd={() => setHovered(null)}
                      className="relative cursor-pointer group flex flex-col items-center"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div
                        animate={{ boxShadow: isHovered(category.id) ? `0 0 34px ${category.color === "from-cyan-500 to-blue-500" ? "rgba(34,211,238,0.8)" : category.color === "from-green-500 to-emerald-500" ? "rgba(34,197,94,0.8)" : category.color === "from-purple-500 to-indigo-500" ? "rgba(168,85,247,0.8)" : category.color === "from-orange-500 to-red-500" ? "rgba(249,115,22,0.8)" : "rgba(20,184,166,0.8)"}` : "0 0 0px rgba(0,0,0,0)" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                      />

                      <div className="relative">
                        <motion.div
                          animate={{ rotateX: isHovered(category.id) ? 0 : 8 }}
                          whileHover={{ rotateX: -6, rotateY: 6 }}
                          transition={{ type: "spring", stiffness: 120, damping: 14 }}
                          className={`w-36 h-36 rounded-2xl bg-gradient-to-br ${category.bgColor} border-2 border-white/20 backdrop-blur-md flex items-center justify-center relative overflow-hidden exhibit-frame glow-animate`}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <motion.div animate={{ scale: isHovered(category.id) ? [1, 1.25, 1] : 1, rotateY: isHovered(category.id) ? 360 : 0 }} transition={{ duration: 1.2 }} className="z-10">
                            <Icon className={`w-20 h-20 ${category.iconColor}`} />
                          </motion.div>

                          {isHovered(category.id) && (
                            <>
                              {[...Array(8)].map((_, i) => (
                                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 1, 0], scale: [0, 1.1, 0], x: [0, Math.cos((i * 45 * Math.PI) / 180) * 48], y: [0, Math.sin((i * 45 * Math.PI) / 180) * 48] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.08 }} className="absolute">
                                  <Sparkles className="w-4 h-4 text-cyan-300" />
                                </motion.div>
                              ))}
                            </>
                          )}

                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-30 pointer-events-none" />
                        </motion.div>

                        <motion.div animate={{ scaleY: isHovered(category.id) ? 1.08 : 1 }} className={`w-20 h-20 mx-auto mt-2 bg-gradient-to-b ${category.bgColor} border-x-2 border-white/25`} style={{ transformOrigin: "top" }} />

                        <div className={`w-28 h-4 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-white/20 rounded-sm mt-1`} />
                      </div>
                    </motion.div>
                  </Link>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {isHovered(category.id) && (
                      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} className="absolute -bottom-10 bg-black/70 text-white text-xs px-3 py-1 rounded-lg border border-white/10">
                        View {category.title}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-black/60 backdrop-blur-lg border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">Key Events & Highlights (2000 - 2010)</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">Important moments that shaped Philippine digital culture across these years.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: "2000", event: "Internet Café Boom", description: "Gaming centers become social hubs", category: "Social/Economic" },
              { year: "2001", event: "Friendster Launch", description: "Early social network adoption", category: "Social/Cultural" },
              { year: "2002", event: "SMS Revolution", description: "Texting becomes primary communication", category: "Social/Cultural" },
              { year: "2003", event: "EDSA II Text Activism", description: "Digital mobilization for political change", category: "Political" },
              { year: "2004", event: "Load Card Industry", description: "Prepaid internet economy grows", category: "Economic" },
              { year: "2005", event: "YouTube Philippines", description: "Video sharing transforms content creation", category: "Cultural" },
              { year: "2006", event: "Facebook Philippines", description: "Mass migration from Friendster", category: "Social" },
              { year: "2007", event: "Mobile Broadband", description: "3G networks enable mobile internet", category: "Economic" },
              { year: "2008", event: "Twitter Launch", description: "Real-time social media arrives", category: "Social/Political" },
              { year: "2009", event: "Smart Phones", description: "Touchscreen devices change access", category: "Economic/Social" },
              { year: "2010", event: "Social Media Elections", description: "Digital campaigns influence politics", category: "Political" }
            ].map((h, i) => (
              <motion.div key={h.year} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: i * 0.06 }} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-white/8 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-lg font-bold text-cyan-400">{h.year}</div>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold">{h.event}</h3>
                <p className="text-gray-400 text-sm mt-2">{h.description}</p>
                <div className="text-xs text-cyan-300 font-medium mt-3">{h.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gridMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }

        .museum-glass {
          background: rgba(15, 23, 42, 0.55);
          box-shadow: 0 6px 40px rgba(0,0,0,0.45);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .glow-animate {
          background: linear-gradient(120deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 100%);
          background-size: 200% 200%;
          animation: ambientGlow 8s ease-in-out infinite;
        }

        @keyframes ambientGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* small responsive tweaks */
        @media (max-width: 640px) {
          .exhibit-frame { width: 96px; height: 96px; }
        }

      `}</style>
    </div>
  );
}
