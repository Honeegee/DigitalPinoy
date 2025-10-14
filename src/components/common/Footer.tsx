'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Mail, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="font-serif text-lg text-white mb-2">Digital Pinoy</div>
          <p className="text-sm mb-4">
            Virtual museum of Philippine Pop Culture 2000–2010
          </p>
          <div className="flex items-center justify-center space-x-1 text-xs">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400" fill="currentColor" />
            <span>for the Filipino digital generation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}