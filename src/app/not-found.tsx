'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-navy via-muted-teal to-accent flex items-center justify-center">
      <div className="text-center text-white px-4 max-w-2xl mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-warm-sand mb-4">404</div>
          <div className="text-6xl mb-4">📻</div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Exhibit Not Found
          </h1>
          <p className="text-warm-sand text-lg mb-2">
            Looks like this page got lost in the digital time machine!
          </p>
          <p className="text-muted-teal">
            The exhibit you&apos;re looking for might have been moved or doesn&apos;t exist yet.
          </p>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-warm-sand text-deep-navy px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Museum
            </motion.button>
          </Link>

          <Link href="/exhibits">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-warm-sand text-warm-sand px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-warm-sand hover:text-deep-navy transition-colors"
            >
              <Search className="w-5 h-5" />
              Browse Exhibits
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-sm text-muted-teal italic"
        >
          &quot;Hindi lahat ng webpage ay naka-save sa Multiply...&quot;
        </motion.div>
      </div>
    </div>
  );
}