'use client';

import React, { useEffect } from 'react';

import { usePoolContracts } from '@/hooks/usePoolContracts';

import Navbar from '@/components/NavBar';
import TransactionTable, { Transaction } from '@/components/TransactionTable';

export default function StatusPage() {
  const [orders, setOrders] = React.useState<Transaction[]>([]);
  const { euroPoolContract } = usePoolContracts();

  useEffect(() => {
    const fetchOrders = async () => {
      if (euroPoolContract && orders.length === 0) {
        const numOrders = await euroPoolContract?.numOrders.staticCall();

        const tempOrders = [];

        for (let i = 1; i <= numOrders; i++) {
          const order = await euroPoolContract?.orders.staticCall(i);
          tempOrders.push({
            id: order.id,
            amount: order.amount,
            currency: 'USD',
            account: order.offChainPaymentAddress,
            status: order.claimed && order.completedAt ? 'Completed' : '--',
          });
        }

        setOrders(tempOrders);
      }
    };
    fetchOrders();
  }, [euroPoolContract, orders]);

  return (
    <main className='bg-[#020202]'>
      <Navbar />
      <section className='bg-[#020202]'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-start py-12 text-center'>
          <div className='flex w-[80%] flex-col space-y-4'>
            <TransactionTable transactions={orders} />
          </div>
        </div>
      </section>
    </main>
  );
}
