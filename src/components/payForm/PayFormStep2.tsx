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
      <div className='relative flex flex-1 justify-center space-x-2 rounded-lg border border-gray-300 px-6 pb-6 pt-8'>
        <div className='rounded-lg bg-gray-700 px-20 py-10 text-white'>
          Please pay {amount} {senderCurrency} to MARKET_MAKER_ID on{' '}
          {senderType} and upload the {senderType} email proof in the next step
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
