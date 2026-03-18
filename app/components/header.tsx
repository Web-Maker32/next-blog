"use client";

import { useState } from 'react';
import Navbar from './navbar';
import Link from 'next/link';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className='flex justify-between items-center py-6 px-4 md:px-8 border-b border-gray-200 transition-colors duration-300 relative'>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden p-2 hover:bg-gray-500 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Sidebar Overlay (Mobile Only) */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`fixed top-2 bottom-2 left-2 w-72 bg-gray-900 backdrop-blur-xl shadow-2xl p-8 transform transition-transform duration-500 ease-in-out border border-gray-600 rounded-2xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[110%]'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className='text-xl font-black tracking-tighter' onClick={() => setIsSidebarOpen(false)}>
              Next Blog
            </Link>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-500 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Navbar isMobile={true} closeMenu={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      {/* Branding - Hidden on mobile if sidebar button is on it, or positioned center/right */}
      <div className="flex items-center gap-8">
        <Link href="/" className='text-xl md:text-2xl font-black tracking-tighter hover:text-blue-600 transition-colors shrink-0 hidden md:block'>
          Next Blog
        </Link>
        <div className="hidden md:block">
          <Navbar isMobile={false} closeMenu={() => { }} />
        </div>
      </div>

      {/* Brand logo for mobile (always visible) */}
      <Link href="/" className='md:hidden absolute left-1/2 -translate-x-1/2 text-xl font-black tracking-tighter'>
        Next Blog
      </Link>
      <div className="flex items-center space-x-4">
        dark mode
      </div>
    </header>
  );
}

