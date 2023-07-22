'use client';

import Head from 'next/head';
import * as React from 'react';
import { useEffect, useRef } from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import Navbar from '@/components/NavBar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import RevolutLogo from '~/svg/RevolutLogo.svg';
import VenmoLogo from '~/svg/VenmoLogo.svg';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [videoRef]);

  return (
    <main className='bg-[#020202]'>
      <Head>
        <title>zk X-Border</title>
      </Head>
      <Navbar />
      <section className='bg-[#020202]'>
        <div className='layout relative flex min-h-screen flex-col items-center space-y-4 py-24 text-center'>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className='min-w-screen absolute mt-[-100px] min-h-screen'
          >
            <source type='video/mp4' src='/particle_videos.mp4' />
          </video>
          <div className='relative z-10 flex flex-col items-center justify-center space-y-4 bg-transparent pb-6 text-center'>
            <div className='rounded-xl bg-yellow-100/40 p-10 shadow-2xl'>
              <Logo className='w-36' />
            </div>
            <h1 className='bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent'>
              zk X-Border
            </h1>
            <div className='mt-2 text-center text-lg font-bold text-white'>
              Cross-border, zero-knowledge money transfer for cheap.
              <br />
              No fees. No crypto wallets.
            </div>
            <ButtonLink
              className='mt-6 rounded-lg border-none bg-gradient-to-r from-yellow-400 to-yellow-500 px-10 py-4 text-white'
              href='/pay'
              variant='dark'
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-24 px-8 lg:grid-cols-2 lg:px-48'>
          <div className='flex flex-col items-center justify-center rounded-lg border border-yellow-300 bg-white/10 p-4'>
            <div className='mb-2 inline-flex min-h-[200px] items-center rounded-md bg-transparent px-2.5 py-0.5 text-xs font-medium'>
              <RevolutLogo className='w-24' />
            </div>
            <h2 className='mb-2 text-3xl font-extrabold text-white'>Revolut</h2>
            <p className='mb-4 text-lg font-normal text-gray-400'>
              Send and receive Euros
            </p>
          </div>
          <div className='flex flex-col items-center justify-center rounded-lg border border-yellow-300 bg-white/10 p-4'>
            <div className='mb-2 inline-flex min-h-[200px] items-center rounded-md bg-transparent px-2.5 py-0.5 text-xs font-medium'>
              <VenmoLogo className='w-60' />
            </div>
            <h2 className='mb-2 text-3xl font-extrabold text-white'>Venmo</h2>
            <p className='mb-4 text-lg font-normal text-gray-400'>
              Send and receive USD
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
