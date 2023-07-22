import React from 'react';

export type Transaction = {
  id: number;
  account: string;
  amount: number;
  currency: string;
  status: string;
};

export type TransactionTableProps = {
  transactions: Transaction[];
};

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  if (transactions.length === 0) {
    return (
      <div className='flex flex-col'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-2xl font-bold text-gray-700 dark:text-gray-200'>
              Loading orders...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden border border-yellow-300 shadow sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-white/20'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'
                  >
                    Account
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'
                  >
                    Amount
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'
                  >
                    Currency
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white/20'>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className='whitespace-nowrap px-6 py-4 text-left text-sm text-white'>
                      {transaction.account || '--'}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-left text-sm text-white'>
                      {transaction.amount || '--'}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-left text-sm text-white'>
                      {transaction.currency}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-left text-sm text-white'>
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
