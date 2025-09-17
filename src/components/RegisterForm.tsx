'use client';

import * as React from 'react';

export default function RegisterForm() {
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
    <form onSubmit={handleSubmit} className='w-full max-w-md'>
      <div className='flex flex-col sm:flex-row gap-3'>
        <div className='flex-1 relative'>
          <label htmlFor='email' className='sr-only'>
            Email address
          </label>
          <input
            id='email'
            type='email'
            placeholder='jdoe@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className='w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-primary-200 rounded-xl font-spacemono text-sm text-primary-800 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:bg-white hover:border-primary-300'
            aria-describedby={message ? 'form-message' : undefined}
          />
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className='px-6 py-3 bg-primary-600 text-white font-spacemono font-bold text-sm rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25 active:scale-95 whitespace-nowrap'
        >
          {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
        </button>
      </div>
      {message && (
        <p
          id='form-message'
          className={`mt-3 text-sm font-medium ${message.includes('Thanks')
            ? 'text-green-600'
            : 'text-red-600'
            }`}
          role={message.includes('Thanks') ? 'status' : 'alert'}
        >
          {message}
        </p>
      )}
    </form>
  );
}
