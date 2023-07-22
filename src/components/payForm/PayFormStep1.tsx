import clsx from 'clsx';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { number, object, string } from 'yup';

import { usePoolContracts } from '@/hooks/usePoolContracts';

import Arrow from '~/svg/Arrow.svg';

const transferSchema = object({
  senderType: string().oneOf(['Venmo', 'Revolut']).required(),
  receiverType: string().oneOf(['Venmo', 'Revolut']).required(),
  senderCurrency: string().oneOf(['USD', 'EUR']).required(),
  receiverCurrency: string().oneOf(['USD', 'EUR']).required(),
  senderIdentifier: string().required(),
  receiverIdentifier: string().required(),
  amount: number()
    .required()
    .typeError('Must be a number')
    .required('This field is required')
    .min(0.01, 'Must be greater than or equal to 0.01')
    .max(10000, 'Must be less than or equal to 10,000')
    .test(
      'is-float-with-2-decimal-digits',
      'Must be a numerical float with exactly two decimal digits',
      (value) => /^\d+(\.\d{1,2})?$/.test(`${value}`)
    ),
});

export type PayFormStep1Props = {
  senderType?: string;
  receiverType?: string;
  senderCurrency?: string;
  receiverCurrency?: string;
  senderIdentifier?: string;
  receiverIdentifier?: string;
  amount?: string;
  onChangeSenderType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeReceiverType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeSenderCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeReceiverCurrency: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onChangeSenderIdentifier: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onChangeReceiverIdentifier: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickNext: () => void;
  setOffRamperId: (offRamperId: string) => void;
};

const PayFormStep1: React.FC<PayFormStep1Props> = ({
  senderType,
  receiverType,
  senderCurrency,
  receiverCurrency,
  senderIdentifier,
  receiverIdentifier,
  amount,
  onChangeSenderType,
  onChangeReceiverType,
  onChangeSenderCurrency,
  onChangeReceiverCurrency,
  onChangeSenderIdentifier,
  onChangeReceiverIdentifier,
  onChangeAmount,
  onClickNext,
  setOffRamperId,
}) => {
  const [valid, setValid] = useState(false);
  const [amountEstimate, setAmountEstimate] = useState('0');
  const { usdcPoolContract } = usePoolContracts();

  useEffect(() => {
    const validate = async () => {
      const valid = await transferSchema.isValid({
        senderType,
        receiverType,
        senderCurrency,
        receiverCurrency,
        senderIdentifier,
        receiverIdentifier,
        amount,
      });

      setValid(valid);
    };
    validate();
  }, [
    senderType,
    receiverType,
    senderCurrency,
    receiverCurrency,
    senderIdentifier,
    receiverIdentifier,
    amount,
  ]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (
        senderCurrency === 'USD' &&
        receiverCurrency === 'EUR' &&
        Number(amount) &&
        Number(amount) > 0
      ) {
        const sendAmount =
          (ethers.toBigInt(
            Math.round(Number(Number(amount).toFixed(2)) * 100) || 0
          ) *
            ethers.toBigInt('1000000')) /
          ethers.toBigInt('100');

        const response = await usdcPoolContract.matchOrder.staticCall(
          sendAmount
        );

        const amountEstimate = (
          (ethers.toBigInt(response[2]) * ethers.toBigInt(100)) /
          ethers.toBigInt('1000000000000000000')
        ).toString();

        setOffRamperId(response[1]);
        setAmountEstimate((Number(amountEstimate) / 100.0).toFixed(2));
      }
    };

    fetchOrderDetails();
  }, [
    amount,
    receiverCurrency,
    senderCurrency,
    setOffRamperId,
    usdcPoolContract,
  ]);

  return (
    <div>
      <div className='relative flex flex-1 space-x-2 rounded-lg border border-yellow-300 px-6 pb-6 pt-8 shadow-md shadow-yellow-300'>
        <div className='absolute left-0 top-[-24px] text-sm font-semibold text-white'>
          Sender
        </div>
        <div className='relative w-[15%]'>
          <select
            id='senderType'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            value={senderType}
            onChange={onChangeSenderType}
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
            onChange={onChangeSenderIdentifier}
            value={senderIdentifier}
            className='w-full rounded-md border border-gray-300 p-2'
            type='text'
            placeholder='(i.e. alice@gmail.com)'
          />
        </div>
        <div className='relative w-[20%]'>
          <div className='absolute top-[-24px] text-sm text-white'>Amount</div>
          <input
            className='w-full rounded-md border border-gray-300 p-2'
            onChange={onChangeAmount}
            value={amount}
            step='.01'
            pattern='^\d*(\.\d{0,2})?$'
            placeholder='i.e. 12.34'
          />
        </div>
        <div className='w-[15%]'>
          <select
            id='senderCurrency'
            value={senderCurrency}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            onChange={onChangeSenderCurrency}
          >
            <option>Currency</option>
            <option value='USD'>USD $</option>
            <option value='EUR'>EUR €</option>
          </select>
        </div>
      </div>
      <div className='my-2 flex flex-1 justify-center'>
        <Arrow className='w-6' />
      </div>
      <div className='relative rounded-lg border border-yellow-300 bg-clip-padding px-6 pb-6 pt-8 shadow-md shadow-yellow-300'>
        <div className='absolute left-0 top-[-24px] text-sm font-semibold text-white'>
          Receiver
        </div>
        <div className='flex flex-1 space-x-2'>
          <div className='relative w-[15%]'>
            <select
              id='receiverType'
              value={receiverType}
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              onChange={onChangeReceiverType}
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
              name='receiverIdentifier'
              value={receiverIdentifier}
              onChange={onChangeReceiverIdentifier}
              className='w-full rounded-md border border-gray-300 p-2'
              type='text'
              placeholder='(i.e. bob@gmail.com)'
            />
          </div>
          <div className='relative w-[20%]'>
            <div className='absolute top-[-24px] text-sm text-white'>
              Amount (est.)
            </div>
            <input
              className='w-full rounded-md border border-gray-300 bg-slate-300 p-2'
              type='text'
              value={amountEstimate}
              disabled
            />
          </div>
          <div className='relative w-[15%]'>
            <select
              id='receiverCurrency'
              value={receiverCurrency}
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              onChange={onChangeReceiverCurrency}
            >
              <option>Currency</option>
              <option value='USD'>USD $</option>
              <option value='EUR'>EUR €</option>
            </select>
          </div>
        </div>
      </div>
      <button
        disabled={!valid}
        className={clsx(
          'mt-8 w-full rounded-md p-2 text-white',
          valid && 'bg-gradient-to-r from-yellow-400 to-yellow-500',
          !valid && 'disabled:bg-gray-400'
        )}
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};

export default PayFormStep1;
