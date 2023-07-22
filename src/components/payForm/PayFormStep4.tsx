import ButtonLink from '@/components/links/ButtonLink';

export type PayFormStep4Props = {
  receiverIdentifier?: string;
};

const PayFormStep4: React.FC<PayFormStep4Props> = ({ receiverIdentifier }) => {
  return (
    <div>
      <div className='relative flex flex-1 justify-center space-x-2 rounded-lg border border-yellow-300 px-6 pb-6 pt-8'>
        <div className='rounded-lg bg-gray-700 px-20 py-10 text-white'>
          Congrats! Your payment has been received and {receiverIdentifier} will
          receive payment soon
        </div>
      </div>
      <button
        className='mt-4 w-full rounded-md bg-white p-4 text-gray-800'
        onClick={() => window.location.reload()}
      >
        Make another transfer
      </button>
      <ButtonLink
        className='mt-4 w-full justify-center rounded-lg border-none bg-gradient-to-r from-yellow-400 to-yellow-500 px-10 py-4 text-center text-white'
        href='/status'
        variant='dark'
      >
        View Status
      </ButtonLink>
    </div>
  );
};

export default PayFormStep4;
