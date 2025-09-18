'use client';

import * as React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="glass-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Section */}
          <div className="md:flex-1">
            <div className="flex items-center mb-4">
              <Image src='/cake4.png' alt="Cakeshop Logo" className="w-8 h-8 text-white mr-3" width={32} height={32} />
              <span className="text-xl font-bold text-black">Cakeshop</span>
            </div>
            <p className="text-black/70 text-sm leading-relaxed">
              {`Buy BTC, Build your Savings, and Spend it on anything you want!`}
            </p>
          </div>

          {/* Links Section - Right side on desktop */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-black/70 text-sm">
                Baked by Cakeshop Software Inc. © 2025
              </p>
              <div className="flex space-x-6">
                <a
                  href="#privacy"
                  className="text-black/70 hover:text-black text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-black/70 hover:text-black text-sm transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#cookies"
                  className="text-black/70 hover:text-black text-sm transition-colors duration-200"
                >
                  Cookie Settings
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://x.com/CakeshopApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/70 hover:text-black transition-all duration-200 hover:scale-110"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
