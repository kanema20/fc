'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Loading...</title>
      </Head>
      <section className='bg-black min-h-screen'>
        <div className='flex min-h-screen flex-col items-center justify-center text-center'>
          {/* Logo */}
          <Logo className='w-24 h-24 mb-8 text-white' />

          {/* Green Spinning Loading Circle */}
          <div className='mb-6'>
            <div className='w-12 h-12 border-4 border-gray-700 border-t-green-500 rounded-full animate-spin'></div>
          </div>

          {/* Description Text */}
          <p className='text-white text-lg max-w-md px-4'>
            Welcome to our platform. We're getting things ready for you...
          </p>
        </div>
      </section>
    </main>
  );
}
