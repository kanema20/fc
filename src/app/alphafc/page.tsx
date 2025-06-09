'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

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
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%23001122" width="1920" height="1080"/><circle cx="960" cy="540" r="300" fill="none" stroke="%23004466" stroke-width="2"/><line x1="960" y1="0" x2="960" y2="1080" stroke="%23004466" stroke-width="2"/><rect x="50" y="340" width="150" height="400" fill="none" stroke="%23004466" stroke-width="2"/><rect x="1720" y="340" width="150" height="400" fill="none" stroke="%23004466" stroke-width="2"/></svg>')`,
        }}
      >
        {/* Header */}
        <header className='absolute top-0 left-0 right-0 p-6 flex justify-between items-center'>
          <div className='text-white text-xl font-bold'>
            ALPHA<span className='text-green-400'>FC</span>
          </div>
        </header>

        {/* Main content */}
        <div className='flex items-center min-h-screen px-12 pt-[20vh]'>
          <div className='max-w-2xl'>
            {/* Main heading */}
            <h1 className='text-white text-6xl font-light leading-tight mb-8'>
              Redefine club
              <br />
              ownership with
              <br />
              <span className='text-white font-normal'>
                ALPHA<span className='text-green-400'>FC</span>
              </span>
            </h1>

            {/* Subheading */}
            <div className='text-white text-xl mb-2'>Become a GM.</div>
            <div className='text-white text-xl mb-2'>
              Dictate the future of your team.
            </div>
            <div className='text-white text-xl mb-12'>
              Create your own dynasty.
            </div>

            {/* Email input and button */}
            <form onSubmit={handleSubmit} className='mb-4'>
              <div className='flex items-center space-x-1'>
                <input
                  type='email'
                  placeholder='jdoe@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className='bg-gray-800 text-white px-6 py-4 rounded-none border border-gray-600 focus:outline-none focus:border-green-400 text-lg w-80 disabled:opacity-50'
                />
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-green-400 text-black px-8 py-4 font-semibold text-lg hover:bg-green-300 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
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
        <div className='absolute bottom-16 left-0 right-0 h-px bg-gray-600'></div>

        {/* Footer with logo and social links */}
        <footer className='absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center'>
          <div className='flex items-center space-x-8 text-white'>
            <div className='text-xl font-bold'>
              ALPHA<span className='text-green-400'>FC</span>
            </div>
            <span className='cursor-pointer hover:text-green-400 transition-colors'>
              X
            </span>
            <span className='cursor-pointer hover:text-green-400 transition-colors'>
              Telegram
            </span>
          </div>
        </footer>

        {/* Soccer field overlay pattern */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='w-full h-full opacity-20'>
            {/* Grid pattern */}
            <div
              className='w-full h-full'
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
        </div>

        {/* Soccer balls decoration */}
        <div className='absolute bottom-20 right-40 w-16 h-16 bg-white rounded-full opacity-80'></div>
        <div className='absolute bottom-32 right-60 w-12 h-12 bg-white rounded-full opacity-60'></div>
        <div className='absolute top-1/3 right-20 w-10 h-10 bg-white rounded-full opacity-40'></div>
      </section>
    </main>
  );
}
