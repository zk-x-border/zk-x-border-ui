'use client';

import Head from 'next/head';
import * as React from 'react';

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

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>zk X-Border</title>
      </Head>
      <Navbar />
      <section className='bg-[#5d6785]'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          {/* Next.js form with 4 test input text fields */}
          <Logo className='w-36' />
          <h1>zk X-Border</h1>
          <ButtonLink
            className='mt-6 rounded-lg border-none bg-gray-800 px-10 py-4 text-white'
            href='/pay'
            variant='dark'
          >
            Pay
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
