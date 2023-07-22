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

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [videoRef]);

  return (
    <main>
      <Head>
        <title>zk X-Border</title>
      </Head>
      <Navbar />
      <section className='bg-[#020202]'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center space-y-4 pb-12 text-center'>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className='min-w-screen absolute min-h-screen'
          >
            <source type='video/mp4' src='/particle_videos.mp4' />
          </video>
          <div className='relative z-10 flex flex-col items-center justify-center space-y-4 bg-transparent pb-12 text-center'>
            <div className='rounded-xl bg-yellow-100/40 p-10 shadow-2xl'>
              <Logo className='w-36' />
            </div>
            <h1 className='bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent'>
              zk X-Border
            </h1>
            <div className='mt-2 text-lg font-bold text-white'>
              Cross-border, zero-knowledge money transfer for cheap
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
      </section>
    </main>
  );
}
