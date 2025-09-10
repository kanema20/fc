'use client';
import Head from 'next/head';
import Image from 'next/image';
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
        <title>Cakeshop</title>
      </Head>

      {/* Main container */}
      <section className='min-h-screen relative' style={{backgroundColor: '#1a1a1a'}}>
        {/* Header */}
        <header className='absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center'>
          <div className='text-lg md:text-xl font-bold' style={{fontFamily: 'Space Mono, monospace', fontWeight: 700, color: '#667eea'}}>
            <span style={{fontFamily: 'Press Start 2P, cursive', fontSize: '0.9em', color: '#667eea'}}>Cakeshop</span>
          </div>
        </header>

        {/* Main content */}
        <div className='flex items-center justify-between min-h-screen px-4 md:px-12 pt-[15vh] md:pt-[20vh]'>
          <div className='max-w-2xl w-full md:w-1/2'>
            {/* Main heading */}
            <h1 className='text-4xl md:text-6xl font-light leading-tight mb-6 md:mb-8' style={{fontFamily: 'Space Mono, monospace', color: '#667eea'}}>
              Buying BTC
              <br />
              should be as easy as
              <br />
              <span className='font-normal' style={{fontFamily: 'Space Mono, monospace', color: '#667eea'}}>
                <span style={{fontFamily: 'Press Start 2P, cursive', fontSize: '0.9em', color: '#ffffff'}}>Cake</span>
              </span>
            </h1>

            {/* Subheading */}
            <div className='text-xl font-bold mb-2' style={{fontFamily: 'Space Mono, monospace', fontSize: '20px', fontWeight: 700, color: '#667eea'}}>
              Buy BTC.
            </div>
            <div className='text-xl font-bold mb-2' style={{fontFamily: 'Space Mono, monospace', fontSize: '20px', fontWeight: 700, color: '#667eea'}}>
              Build your savings.
            </div>
            <div className='text-xl font-bold mb-8 md:mb-12' style={{fontFamily: 'Space Mono, monospace', fontSize: '20px', fontWeight: 700, color: '#667eea'}}>
              Spend your wealth.
            </div>

            {/* Email i nput and button */}
            <form onSubmit={handleSubmit} className='mb-4'>
              <div className=' flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-1'>
                <input
                  type='email'
                  placeholder='jdoe@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className='bg-white px-4 md:px-6 py-2.5 md:py-3 rounded-none border border-gray-300 focus:outline-none focus:border-purple-500 w-full sm:w-72 disabled:opacity-50'
                  style={{fontFamily: 'Space Mono, monospace', fontSize: '14px', fontWeight: 400, lineHeight: '20px', letterSpacing: '0.16px', color: '#667eea'}}
                />
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='text-white hover:opacity-80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex h-10 px-4 py-6 justify-center items-center gap-10'
                  style={{fontFamily: 'Space Mono, monospace', fontSize: '14px', fontWeight: 500, lineHeight: '20px', letterSpacing: '0.16px', backgroundColor: '#667eea', color: '#ffffff'}}
                >
                  <span style={{color: '#ffffff'}}>{isSubmitting ? 'Getting access...' : 'Get early access'}</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z'
                      fill='#ffffff'
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Status message */}
            {message && (
              <p
                className='text-sm'
                style={{
                  fontFamily: 'Space Mono, monospace',
                  color: message.includes('Thanks') ? '#667eea' : '#ef4444'
                }}
              >
                {message}
              </p>
            )}
          </div>

          {/* iPhone Mockup - Hidden on mobile, visible on desktop */}
          <div className='hidden md:flex w-1/2 justify-center items-center absolute right-12 top-1/2 transform -translate-y-1/2'>
            <div className='relative'>
              {/* iPhone Frame */}
              <div className='relative bg-black rounded-[3rem] p-2 shadow-2xl'>
                <div className='bg-black rounded-[2.5rem] overflow-hidden'>
                  
                  <Image 
                    src='/IMG_7374.PNG' 
                    alt='Cakeshop App Interface'
                    width={280}
                    height={600}
                    className='object-cover rounded-[2.5rem]'
                  />
                </div>
              </div>
              
              {/* iPhone Details */}
              <div className='absolute top-[1.5rem] left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-full'></div>
              <div className='absolute top-[2rem] left-1/2 transform -translate-x-1/2 w-[50px] h-[4px] bg-gray-800 rounded-full'></div>
            </div>
          </div>
        </div>

        {/* Gray divider */}
        {/* Footer with logo and social links */}
        <footer className='absolute bottom-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center bg-black z-40 border-t border-gray-600'>
          <div className='flex items-center space-x-4 md:space-x-8 text-white'>
            <div className='text-lg md:text-xl font-bold' style={{fontFamily: 'Space Mono, monospace', fontWeight: 700, color: '#667eea'}}>
              <span style={{fontFamily: 'Press Start 2P, cursive', fontSize: '0.9em', color: '#667eea'}}>Cakeshop</span>
            </div>
            <a 
              href="https://x.com/CakeshopApp" 
              target="_blank" 
              rel="noopener noreferrer"
              className='cursor-pointer transition-colors text-sm md:text-base hover:opacity-80' 
              style={{fontFamily: 'Space Mono, monospace', color: '#ffffff'}}
            >
              X
            </a>
          </div>
        </footer>

      </section>
    </main>
  );
}
