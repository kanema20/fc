'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Glass navbar background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-b border-black/10 transition-all duration-300" />

      {/* Navbar content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src='/cake4.png' alt="Cakeshop Logo" className="w-8 h-8 text-white mr-3 text-shadow-md" width={32} height={32} />
            <span className="text-xl font-bold text-gray-700" style={{ fontFamily: 'var(--font-inter)' }}>Cakeshop</span>
          </div>

          {/* Desktop Navigation */}
          {/*
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#download"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Download
              </a>
              <a
                href="#support"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Support
              </a>
            </div>
          </div>
          */}

          {/* CTA Button */}
          <div className="hidden md:block">
            <button disabled className="disabled:opacity-50 disabled:cursor-not-allowed bg-primary-800/10 hover:bg-primary-800/20 text-primary-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-primary-800/20 hover:border-primary-800/30">
              Coming Soon!
            </button>
          </div>

          {/* Mobile menu button */}
          {/* 
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white/80 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          */}
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-xl rounded-lg mt-2 border border-black/10">
              <a
                href="#features"
                className="text-primary-800/90 hover:text-primary-800 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-primary-800/90 hover:text-primary-800 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#download"
                className="text-primary-800/90 hover:text-primary-800 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="#support"
                className="text-primary-800/90 hover:text-primary-800 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </a>
              <div className="pt-2">
                <button className="w-full bg-primary-800/10 hover:bg-primary-800/20 text-primary-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-primary-800/20 hover:border-primary-800/30">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
