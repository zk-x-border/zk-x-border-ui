import ButtonLink from '@/components/links/ButtonLink';

export type PayFormStep4Props = {
  receiverIdentifier?: string;
};

const PayFormStep4: React.FC<PayFormStep4Props> = ({ receiverIdentifier }) => {
  return (
    <div>
      <div className='relative flex flex-1 justify-center space-x-2 rounded-lg border border-gray-300 px-6 pb-6 pt-8'>
        <div className='rounded-lg bg-gray-700 px-20 py-10 text-white'>
          Congrats! Your payment has been received and {receiverIdentifier} will
          receive payment soon
        </div>
      </div>
      <button
        className='mt-4 w-full rounded-md bg-gray-800 p-4 text-white'
        onClick={() => window.location.reload()}
      >
        Make another transfer
      </button>
      <ButtonLink
        className='mt-4 w-full justify-center rounded-lg border-none bg-white px-10 py-4 text-center text-gray-800'
        href='/status'
        variant='light'
      >
        View Status
      </ButtonLink>
    </div>
  );
};

export default PayFormStep4;
