'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a0f0a] border-b border-green-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-3xl">🌿</div>
          <span className="text-2xl font-semibold text-white">FloraVision</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <Link href="#" className="hover:text-white transition-colors">Home</Link>
          <Link href="#" className="hover:text-white transition-colors">Plants</Link>
          <Link href="#" className="hover:text-white transition-colors">Care Tips</Link>
          <Link href="#" className="hover:text-white transition-colors">Blog</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white">
          <button className="hover:text-green-400 transition-colors text-xl">🔍</button>
          <button className="hover:text-green-400 transition-colors text-xl relative">
            🛒
            <span className="absolute -top-1 -right-1 bg-green-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </button>
          <button className="hover:text-green-400 transition-colors text-xl">👤</button>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0f0a] border-t border-green-900">
          <div className="px-6 py-6 flex flex-col gap-4 text-white/80">
            <Link href="#" className="py-3">Home</Link>
            <Link href="#" className="py-3">Plants</Link>
            <Link href="#" className="py-3">Care Tips</Link>
            <Link href="#" className="py-3">Blog</Link>
            <Link href="#" className="py-3">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}