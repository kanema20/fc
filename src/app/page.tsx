'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import '@fontsource/pt-sans-narrow';

export default function AlphaFCPage() {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thanks for joining! We'll be in touch soon.");
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Head>
        <title>ALPHAFC</title>
      </Head>

      {/* Main container with background image */}
      <section
        className='min-h-screen bg-cover bg-center bg-no-repeat relative'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('/images/soccer.png')`,
        }}
      >
        {/* Header */}
        <header className='absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center'>
          <div className='text-white text-lg md:text-xl font-bold'>
            ALPHA<span className='text-green-400'>FC</span>
          </div>
        </header>

        {/* Main content */}
        <div className='flex items-center min-h-screen px-4 md:px-12 pt-[15vh] md:pt-[20vh]'>
          <div className='max-w-2xl w-full'>
            {/* Main heading */}
            <h1 className='text-white text-4xl md:text-6xl font-light leading-tight mb-6 md:mb-8'>
              Redefine club
              <br />
              ownership with
              <br />
              <span className='text-white font-normal'>
                ALPHA<span className='text-green-400'>FC</span>
              </span>
            </h1>

            {/* Subheading */}
            <div className='text-white text-lg md:text-xl mb-2'>
              Become a GM.
            </div>
            <div className='text-white text-lg md:text-xl mb-2'>
              Dictate the future of your team.
            </div>
            <div className='text-white text-lg md:text-xl mb-8 md:mb-12'>
              Create your own dynasty.
            </div>

            {/* Email input and button */}
            <form onSubmit={handleSubmit} className='mb-4'>
              <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-1'>
                <input
                  type='email'
                  placeholder='jdoe@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className='bg-gray-800 text-white px-4 md:px-6 py-3 md:py-4 rounded-none border border-gray-600 border-b-gray-400 focus:outline-none focus:border-green-400 focus:border-b-green-400 text-base md:text-lg w-full sm:w-80 disabled:opacity-50'
                />
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-green-400 text-black px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg hover:bg-green-300 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
                >
                  <span>{isSubmitting ? 'Joining...' : 'Join the team'}</span>
                  <span>→</span>
                </button>
              </div>
            </form>

            {/* Status message */}
            {message && (
              <p
                className={`text-sm ${
                  message.includes('Thanks') ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Gray divider */}
        {/* Footer with logo and social links */}
        <footer className='absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center bg-black z-40 border-t border-gray-600'>
          <div className='flex items-center space-x-4 md:space-x-8 text-white'>
            <div className='text-lg md:text-xl font-bold'>
              ALPHA<span className='text-green-400'>FC</span>
            </div>
            <span className='cursor-pointer hover:text-green-400 transition-colors text-sm md:text-base'>
              X
            </span>
            <span className='cursor-pointer hover:text-green-400 transition-colors text-sm md:text-base'>
              Telegram
            </span>
          </div>
        </footer>

        {/* Soccer field overlay pattern */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='w-full h-full opacity-10 md:opacity-20'>
            {/* Grid pattern */}
            <div
              className='w-full h-full'
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }}
            />
          </div>
        </div>

        {/* Soccer balls decoration - hidden on mobile */}
        <div className='hidden md:block absolute bottom-20 right-40 w-16 h-16 bg-white rounded-full opacity-80'></div>
        <div className='hidden md:block absolute bottom-32 right-60 w-12 h-12 bg-white rounded-full opacity-60'></div>
        <div className='hidden md:block absolute top-1/3 right-20 w-10 h-10 bg-white rounded-full opacity-40'></div>
      </section>
    </main>
  );
}
