'use client';

import React from 'react';

import Navbar from '@/components/NavBar';
import TransactionTable from '@/components/TransactionTable';

export default function StatusPage() {
  return (
    <main>
      <Navbar />
      <section className='bg-[#5d6785]'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-start py-12 text-center'>
          <div className='flex w-[80%] flex-col space-y-4'>
            <TransactionTable
              transactions={[
                {
                  id: 1,
                  date: '2023-07-20',
                  from: 'John Doe',
                  to: 'Jane Smith',
                  account: '123456789',
                  amount: 1000,
                  currency: 'USD',
                  status: 'Completed',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
