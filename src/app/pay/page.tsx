'use client';

import React, { ChangeEvent, useCallback, useState } from 'react';

import Navbar from '@/components/NavBar';
import PayFormStep1 from '@/components/payForm/PayFormStep1';
import PayFormStep2 from '@/components/payForm/PayFormStep2';
import PayFormStep3 from '@/components/payForm/PayFormStep3';
import PayFormStep4 from '@/components/payForm/PayFormStep4';

export default function PayPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [senderType, setSenderType] = useState<string | undefined>(undefined);
  const [receiverType, setReceiverType] = useState<string | undefined>(
    undefined
  );
  const [senderCurrency, setSenderCurrency] = useState<string | undefined>(
    undefined
  );
  const [receiverCurrency, setReceiverCurrency] = useState<string | undefined>(
    undefined
  );
  const [senderIdentifier, setSenderIdentifier] = useState<string | undefined>(
    undefined
  );
  const [receiverIdentifier, setReceiverIdentifier] = useState<
    string | undefined
  >(undefined);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [offRamperId, setOffRamperId] = useState<string | undefined>(undefined);

  const onChangeSenderType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSenderType(event.target.value);
    },
    []
  );

  const onChangeReceiverType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setReceiverType(event.target.value);
    },
    []
  );

  const onChangeSenderCurrency = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSenderCurrency(event.target.value);
    },
    []
  );

  const onChangeReceiverCurrency = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setReceiverCurrency(event.target.value);
    },
    []
  );

  const onChangeSenderIdentifier = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSenderIdentifier(event.target.value);
    },
    []
  );

  const onChangeReceiverIdentifier = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setReceiverIdentifier(event.target.value);
    },
    []
  );

  const onChangeAmount = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  }, []);

  const renderCurrentPage = useCallback(() => {
    switch (currentPage) {
      case 1:
        return (
          <PayFormStep1
            senderType={senderType}
            receiverType={receiverType}
            senderCurrency={senderCurrency}
            receiverCurrency={receiverCurrency}
            senderIdentifier={senderIdentifier}
            receiverIdentifier={receiverIdentifier}
            amount={amount}
            onChangeSenderType={onChangeSenderType}
            onChangeReceiverType={onChangeReceiverType}
            onChangeSenderCurrency={onChangeSenderCurrency}
            onChangeReceiverCurrency={onChangeReceiverCurrency}
            onChangeSenderIdentifier={onChangeSenderIdentifier}
            onChangeReceiverIdentifier={onChangeReceiverIdentifier}
            onChangeAmount={onChangeAmount}
            setOffRamperId={setOffRamperId}
            onClickNext={() => setCurrentPage((prevPage) => prevPage + 1)}
          />
        );
      case 2:
        return (
          <PayFormStep2
            senderType={senderType}
            senderCurrency={senderCurrency}
            offRamperId={offRamperId || ''}
            amount={amount}
            onClickNext={() => setCurrentPage((prevPage) => prevPage + 1)}
          />
        );
      case 3:
        return (
          <PayFormStep3
            onClickNext={() => setCurrentPage((prevPage) => prevPage + 1)}
          />
        );
      case 4:
        return <PayFormStep4 receiverIdentifier={receiverIdentifier} />;
      default:
        return null;
    }
  }, [
    amount,
    currentPage,
    offRamperId,
    onChangeAmount,
    onChangeReceiverCurrency,
    onChangeReceiverIdentifier,
    onChangeReceiverType,
    onChangeSenderCurrency,
    onChangeSenderIdentifier,
    onChangeSenderType,
    receiverCurrency,
    receiverIdentifier,
    receiverType,
    senderCurrency,
    senderIdentifier,
    senderType,
  ]);

  return (
    <main className='bg-[#020202]'>
      <Navbar />
      <section className='bg-[#020202]'>
        <div className='layout relative flex min-h-screen flex-col items-center py-24 text-center'>
          <div className='flex w-[80%] flex-col space-y-4'>
            {renderCurrentPage()}
          </div>
        </div>
      </section>
    </main>
  );
}
