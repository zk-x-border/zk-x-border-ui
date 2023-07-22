import Image from 'next/image';

import RevolutLogo from '~/svg/RevolutLogo.svg';
import VenmoLogo from '~/svg/VenmoLogo.svg';

export type PayFormStep2Props = {
  senderType?: string;
  senderCurrency?: string;
  amount?: string;
  onClickNext: () => void;
};

const PayFormStep2: React.FC<PayFormStep2Props> = ({
  senderType,
  senderCurrency,
  amount,
  onClickNext,
}) => {
  return (
    <div>
      <div className='mb-4 rounded-lg bg-gray-700 px-20 py-10 text-white'>
        Please pay {amount} {senderCurrency} to MARKET_MAKER_ID on {senderType}{' '}
        and upload the {senderType} email proof in the next step
      </div>
      <div className='relative flex flex-col items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-slate-100/40 px-6 pb-4 pt-6'>
        <div className='mb-[-40px] mt-12'>
          {senderType === 'revolut' ? (
            <RevolutLogo className='w-24' />
          ) : (
            <VenmoLogo className='w-60' />
          )}
        </div>
        <div className='mt-[-80px]'>
          <Image
            src='/images/wallet_animation.gif'
            width={400}
            height={400}
            alt='wallet animation'
          />
        </div>
      </div>
      <button
        className='mt-4 w-full rounded-md bg-gray-800 p-2 text-white'
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};

export default PayFormStep2;
