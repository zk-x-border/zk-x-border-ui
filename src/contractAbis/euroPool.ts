const abi = [
  {
    inputs: [
      { internalType: 'contract IERC20', name: '_ageuro', type: 'address' },
      {
        internalType: 'contract ISwapRouter',
        name: '_swapRouter',
        type: 'address',
      },
      { internalType: 'contract IQuoterV2', name: '_quoter', type: 'address' },
      { internalType: 'uint24', name: 'euroUsdcPoolFee', type: 'uint24' },
      { internalType: 'contract IERC20', name: '_usdc', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ageuro',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'bytes', name: 'emailHash', type: 'bytes' },
    ],
    name: 'claimOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'claimedOrders',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256[2]', name: 'a', type: 'uint256[2]' },
          { internalType: 'uint256[2][2]', name: 'b', type: 'uint256[2][2]' },
          { internalType: 'uint256[2]', name: 'c', type: 'uint256[2]' },
        ],
        internalType: 'struct IPool.ZKProof',
        name: 'proof',
        type: 'tuple',
      },
      { internalType: 'uint256[31]', name: 'inputs', type: 'uint256[31]' },
      {
        internalType: 'string',
        name: 'xBorderReceiverAddress',
        type: 'string',
      },
    ],
    name: 'completeCrossChainOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256[2]', name: 'a', type: 'uint256[2]' },
          { internalType: 'uint256[2][2]', name: 'b', type: 'uint256[2][2]' },
          { internalType: 'uint256[2]', name: 'c', type: 'uint256[2]' },
        ],
        internalType: 'struct IPool.ZKProof',
        name: 'proof',
        type: 'tuple',
      },
      { internalType: 'uint256[31]', name: 'inputs', type: 'uint256[31]' },
    ],
    name: 'completeOnRampOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256[5]', name: 'packedBytes', type: 'uint256[5]' },
      { internalType: 'uint256', name: 'maxBytes', type: 'uint256' },
    ],
    name: 'convertPackedBytesToBytes',
    outputs: [
      { internalType: 'string', name: 'extractedString', type: 'string' },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      {
        internalType: 'string',
        name: 'offChainPaymentAddress',
        type: 'string',
      },
    ],
    name: 'createOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
    name: 'getOrder',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'id', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'string',
            name: 'offChainPaymentAddress',
            type: 'string',
          },
          { internalType: 'bool', name: 'claimed', type: 'bool' },
          { internalType: 'uint56', name: 'completedAt', type: 'uint56' },
          {
            internalType: 'uint256[3]',
            name: 'takerEmailHash',
            type: 'uint256[3]',
          },
        ],
        internalType: 'struct IPool.Order',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'euroAmount', type: 'uint256' }],
    name: 'matchOrder',
    outputs: [
      { internalType: 'uint256', name: 'orderId', type: 'uint256' },
      {
        internalType: 'string',
        name: 'offChainPaymentAddress',
        type: 'string',
      },
      { internalType: 'uint256', name: 'outputAmount', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numOrders',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'orders',
    outputs: [
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      {
        internalType: 'string',
        name: 'offChainPaymentAddress',
        type: 'string',
      },
      { internalType: 'bool', name: 'claimed', type: 'bool' },
      { internalType: 'uint56', name: 'completedAt', type: 'uint56' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'quoter',
    outputs: [
      { internalType: 'contract IQuoterV2', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'revolutServerKeys',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 's', type: 'string' }],
    name: 'stringToUint256',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'swapRouter',
    outputs: [
      { internalType: 'contract ISwapRouter', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IERC20', name: '_ageuro', type: 'address' },
    ],
    name: 'updateEuro',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint24', name: '_usdcEuroPoolFee', type: 'uint24' },
    ],
    name: 'updateEuroUsdcPoolFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IQuoterV2', name: '_quoter', type: 'address' },
    ],
    name: 'updateQuoter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ISwapRouter',
        name: '_swapRouter',
        type: 'address',
      },
    ],
    name: 'updateSwapRouter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IERC20', name: '_usdc', type: 'address' },
    ],
    name: 'updateUSDC',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract IPool', name: '_usdcPool', type: 'address' },
    ],
    name: 'updateUsdcPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdc',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdcEuroPoolFee',
    outputs: [{ internalType: 'uint24', name: '', type: 'uint24' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdcPool',
    outputs: [{ internalType: 'contract IPool', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256[2]', name: 'a', type: 'uint256[2]' },
      { internalType: 'uint256[2][2]', name: 'b', type: 'uint256[2][2]' },
      { internalType: 'uint256[2]', name: 'c', type: 'uint256[2]' },
      { internalType: 'uint256[31]', name: 'input', type: 'uint256[31]' },
    ],
    name: 'verifyProof',
    outputs: [{ internalType: 'bool', name: 'r', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
];

export default abi;
