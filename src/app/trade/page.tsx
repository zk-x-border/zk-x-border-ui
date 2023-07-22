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
            </WagmiConfig>
          </div>
        </div>
      </section>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </main>
  );
}
