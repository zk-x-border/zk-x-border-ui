import clsx from 'clsx';
import { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { GrCloudUpload, GrDocument } from 'react-icons/gr';

export type PayFormStep3Props = {
  onClickNext: () => void;
};

const PayFormStep3: React.FC<PayFormStep3Props> = ({ onClickNext }) => {
  const [acceptedFileNames, setAcceptedFileNames] = useState<string[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setAcceptedFileNames(acceptedFiles.map((file) => file.name));
  }, []);

  return (
    <div>
      <div className='mb-4 rounded-lg bg-gray-700 px-20 py-6 text-white'>
        Please upload the email to demonstrate proof of payment
      </div>
      <Dropzone
        onDropAccepted={onDrop}
        accept={{ '*': ['.eml'] }}
        multiple={false}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className='relative flex flex-1 justify-center space-x-2 rounded-lg border border-yellow-300 bg-gray-500/50 px-6 py-40'
          >
            <input {...getInputProps()} />
            <section>
              <div>
                {acceptedFileNames?.length ? (
                  <div className='flex flex-1 items-center justify-center space-x-4'>
                    <GrDocument size={32} />{' '}
                    <p className='text-white'>{acceptedFileNames[0]}</p>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center space-y-2'>
                    <GrCloudUpload size={48} />
                    <p className='text-white'>
                      Drag 'n' drop .eml file here, or click to select file
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </Dropzone>
      <button
        className={clsx(
          'mt-8 w-full rounded-md p-2 text-white',
          Boolean(acceptedFileNames?.length) &&
            'bg-gradient-to-r from-yellow-400 to-yellow-500',
          Boolean(!acceptedFileNames?.length) && 'disabled:bg-gray-400'
        )}
        disabled={Boolean(!acceptedFileNames?.length)}
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};

export default PayFormStep3;
