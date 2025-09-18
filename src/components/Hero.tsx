import Image from 'next/image';

import RegisterForm from '@/components/RegisterForm';

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center p-2 md:p-2 pt-20 md:pt-2'>
      <div className='border border-white/10 text-white rounded-3xl shadow-2xl w-full overflow-hidden p-2 md:p-6 transition-all duration-300' style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className='flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-16 gap-8 md:gap-12'>
          <div className='md:w-3/5 text-center md:text-left mb-8 md:mb-0'>
            <div className='flex items-center justify-center md:justify-start mb-8'>
              <Image src='/cake4.png' alt="Cakeshop Logo" className="w-8 h-8 text-white mr-3" width={32} height={32} />
              <h2 className='text-2xl md:text-3xl font-bold text-primary-300 text-shadow-sm'>Cakeshop App</h2>

            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white text-shadow'>
              Buying BTC should be <span className='text-primary-300'>as easy as</span> cake
            </h1>
            <p className='text-lg md:text-xl mb-10 text-white/90 leading-relaxed'>
              Buy Bitcoin. Earn Yield. Build Wealth.
            </p>
            <RegisterForm />
          </div>
          <div className='hidden md:flex md:w-2/5 justify-center items-end mt-auto md:mt-0 pb-2 sm:pb-4'>
            <div className='relative w-full max-w-[28rem] h-[28rem] sm:h-[28rem] md:h-[32rem] group'>
              <div className='absolute -inset-10 bg-white/10 backdrop-blur-xl rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none'></div>

              {/* Left phone - hidden on mobile */}
              <Image
                src='/screenshots/s1.png'
                alt='Wallet screen left'
                width={300}
                height={600}
                className='hidden md:block absolute border-2 border-gray-300 left-0 top-8 w-48 sm:w-56 lg:w-64 -translate-x-4 sm:-translate-x-6 rotate-[-9deg] z-10 opacity-95 drop-shadow-2xl rounded-3xl'
              />

              {/* Center phone (front) */}
              <Image
                src='/screenshots/s2.png'
                alt='Wallet screen center'
                width={320}
                height={640}
                className='border-2 border-gray-300 absolute inset-x-0 mx-auto top-4 md:top-0 w-56 sm:w-64 lg:w-72 rotate-0 z-20 drop-shadow-2xl rounded-3xl'
              />

              {/* Right phone - hidden on mobile */}
              <Image
                src='/screenshots/s3.png'
                alt='Wallet screen right'
                width={300}
                height={600}
                className='border-2 border-gray-300 hidden md:block absolute right-0 top-12 w-48 sm:w-56 lg:w-64 translate-x-4 sm:translate-x-6 rotate-[9deg] z-10 opacity-95 drop-shadow-2xl rounded-3xl'
              />
            </div>
          </div>
        </div>

        {/* Mobile: Three phones at bottom - cut off 30% */}
        <div className='md:hidden flex justify-center pt-0 pb-0 overflow-hidden'>
          <div className='relative w-full max-w-[20rem] h-[14rem] group'>
            <div className='absolute -inset-6 bg-white/10 backdrop-blur-xl rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none'></div>

            {/* Left phone */}
            <Image
              src='/screenshots/s1.png'
              alt='Wallet screen left'
              width={300}
              height={600}
              className='absolute left-0 top-4 w-32 -translate-x-2 rotate-[-9deg] z-10 opacity-95 drop-shadow-2xl rounded-3xl'
            />

            {/* Center phone (front) */}
            <Image
              src='/screenshots/s2.png'
              alt='Wallet screen center'
              width={320}
              height={640}
              className='absolute inset-x-0 mx-auto top-0 w-36 rotate-0 z-20 drop-shadow-2xl rounded-3xl'
            />

            {/* Right phone */}
            <Image
              src='/screenshots/s3.png'
              alt='Wallet screen right'
              width={300}
              height={600}
              className='absolute right-0 top-6 w-32 translate-x-2 rotate-[9deg] z-10 opacity-95 drop-shadow-2xl rounded-3xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
