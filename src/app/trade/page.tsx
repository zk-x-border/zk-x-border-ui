'use client';

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { Web3Button, Web3Modal } from '@web3modal/react';
import React from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';

import Navbar from '@/components/NavBar';

const chains = [polygon];
const projectId = 'ea40e123ebe08c111a2076ddbde02c2b';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function TradePage() {
  return (
    <main className='bg-[#020202]'>
      <Navbar />
      <section className='bg-[#020202]'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-start py-12 text-center'>
          <div className='flex w-[80%] flex-col space-y-4'>
            <WagmiConfig config={wagmiConfig}>
              <div className='flex flex-col items-center justify-center space-y-10'>
                <h1 className='text-4xl font-bold text-white'>Trade</h1>
                <Web3Button />
              </div>
              <div className='relative mt-8 flex flex-1 space-x-2 rounded-lg border border-yellow-300 px-6 pb-6 pt-8 shadow-md shadow-yellow-300'>
                <div className='relative w-[15%]'>
                  <select
                    id='senderType'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  >
                    <option>Type</option>
                    <option value='Venmo'>Venmo</option>
                    <option value='Revolut'>Revolut</option>
                  </select>
                </div>
                <div className='relative w-[50%]'>
                  <div className='absolute top-[-24px] text-sm text-white'>
                    Identifier
                  </div>
                  <input
                    name='senderIdentifier'
                    className='w-full rounded-md border border-gray-300 p-2'
                    type='text'
                    placeholder='(i.e. alice@gmail.com)'
                  />
                </div>
                <div className='relative w-[20%]'>
                  <div className='absolute top-[-24px] text-sm text-white'>
                    Amount
                  </div>
                  <input
                    className='w-full rounded-md border border-gray-300 p-2'
                    step='.01'
                    pattern='^\d*(\.\d{0,2})?$'
                    placeholder='i.e. 12.34'
                  />
                </div>
                <div className='w-[15%]'>
                  <select
                    id='senderCurrency'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                  >
                    <option>Currency</option>
                    <option value='USD'>USD $</option>
                    <option value='EUR'>EUR €</option>
                  </select>
                </div>
              </div>
            </WagmiConfig>
          </div>
        </div>
      </section>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </main>
  );
}
