import Dropzone from 'react-dropzone';

export type PayFormStep3Props = {
  onClickNext: () => void;
};

const PayFormStep3: React.FC<PayFormStep3Props> = ({ onClickNext }) => {
  return (
    <div>
      <Dropzone accept={{ 'text/*': ['.eml'] }} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className='relative flex flex-1 justify-center space-x-2 rounded-lg border border-gray-300 px-6 py-40'
          >
            <input {...getInputProps()} />
            <section>
              <div>
                <p className='text-white'>
                  Drag 'n' drop .eml file here, or click to select file
                </p>
              </div>
            </section>
          </div>
        )}
      </Dropzone>
      <button
        className='mt-4 w-full rounded-md bg-gray-800 p-2 text-white'
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};

export default PayFormStep3;
