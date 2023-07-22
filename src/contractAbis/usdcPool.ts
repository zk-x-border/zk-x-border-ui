const abi = {
  _format: 'hh-sol-artifact-1',
  contractName: 'USDCPool',
  sourceName: 'contracts/USDCPool.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'contract IPool',
          name: '_euroPool',
          type: 'address',
        },
        {
          internalType: 'contract IVerifier',
          name: '_verifier',
          type: 'address',
        },
        {
          internalType: 'contract IERC20',
          name: '_usdc',
          type: 'address',
        },
        {
          internalType: 'contract ISwapRouter',
          name: '_swapRouter',
          type: 'address',
        },
        {
          internalType: 'contract IQuoterV2',
          name: '_quoter',
          type: 'address',
        },
        {
          internalType: 'uint24',
          name: 'euroUsdcPoolFee',
          type: 'uint24',
        },
        {
          internalType: 'contract IERC20',
          name: '_euro',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'approveEuroToUniswap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'bytes32',
          name: 'emailHash',
          type: 'bytes32',
        },
      ],
      name: 'claimOrder',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'claimedOrders',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256[2]',
              name: 'a',
              type: 'uint256[2]',
            },
            {
              internalType: 'uint256[2][2]',
              name: 'b',
              type: 'uint256[2][2]',
            },
            {
              internalType: 'uint256[2]',
              name: 'c',
              type: 'uint256[2]',
            },
          ],
          internalType: 'struct IPool.Proof',
          name: 'proof',
          type: 'tuple',
        },
        {
          internalType: 'uint256[8]',
          name: 'inputs',
          type: 'uint256[8]',
        },
        {
          internalType: 'string',
          name: 'xBorderRecieverAddress',
          type: 'string',
        },
      ],
      name: 'completeOrder',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
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
      inputs: [],
      name: 'euro',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'euroPool',
      outputs: [
        {
          internalType: 'contract IPool',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'getOrder',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'string',
              name: 'offChainPaymentAddress',
              type: 'string',
            },
            {
              internalType: 'bool',
              name: 'claimed',
              type: 'bool',
            },
            {
              internalType: 'uint56',
              name: 'completedAt',
              type: 'uint56',
            },
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
      inputs: [
        {
          internalType: 'uint256',
          name: 'usdcAmount',
          type: 'uint256',
        },
      ],
      name: 'matchOrder',
      outputs: [
        {
          internalType: 'uint256',
          name: 'orderId',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'offChainPaymentAddress',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'outputAmount',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'numOrders',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'orders',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'offChainPaymentAddress',
          type: 'string',
        },
        {
          internalType: 'bool',
          name: 'claimed',
          type: 'bool',
        },
        {
          internalType: 'uint56',
          name: 'completedAt',
          type: 'uint56',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'quoter',
      outputs: [
        {
          internalType: 'contract IQuoterV2',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'swapRouter',
      outputs: [
        {
          internalType: 'contract ISwapRouter',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IERC20',
          name: '_euro',
          type: 'address',
        },
      ],
      name: 'updateEuro',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IPool',
          name: '_euroPool',
          type: 'address',
        },
      ],
      name: 'updateEuroPool',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint24',
          name: '_usdcEuroPoolFee',
          type: 'uint24',
        },
      ],
      name: 'updateEuroUsdcPoolFee',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IQuoterV2',
          name: '_quoter',
          type: 'address',
        },
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
        {
          internalType: 'contract IERC20',
          name: '_usdc',
          type: 'address',
        },
      ],
      name: 'updateUSDC',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IVerifier',
          name: '_verifier',
          type: 'address',
        },
      ],
      name: 'updateVerifier',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'usdc',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'usdcEuroPoolFee',
      outputs: [
        {
          internalType: 'uint24',
          name: '',
          type: 'uint24',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'verifier',
      outputs: [
        {
          internalType: 'contract IVerifier',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  bytecode:
    '0x60806040523480156200001157600080fd5b50604051620017ad380380620017ad8339810160408190526200003491620000c8565b600280546001600160a01b03199081166001600160a01b03998a161790915560038054821697891697909717909655600480548716958816959095179094556005805486169387169390931790925560078054600680548716938816939093179092559316919093161762ffffff60a01b1916600160a01b62ffffff90931692909202919091179055600160085562000191565b600080600080600080600060e0888a031215620000e3578283fd5b8751620000f08162000178565b6020890151909750620001038162000178565b6040890151909650620001168162000178565b6060890151909550620001298162000178565b60808901519094506200013c8162000178565b60a089015190935062ffffff8116811462000155578283fd5b60c0890151909250620001688162000178565b8091505092959891949750929550565b6001600160a01b03811681146200018e57600080fd5b50565b61160c80620001a16000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806397fc007c116100c3578063c370a14b1161007c578063c370a14b146102b0578063c6bbd5a7146102b8578063d09ef241146102c0578063e416969e146102e0578063e9ca2810146102e8578063fb16a44e146102f05761014d565b806397fc007c14610236578063a85c38ef14610249578063ac0460a61461026d578063b727bc4a14610280578063b98b677f14610295578063c31c9c07146102a85761014d565b8063426172d611610115578063426172d6146101b357806345d53788146101c65780634b7484a6146101db57806380be1cf8146101ee578063887012c114610201578063910c6855146102235761014d565b80630e540b3a146101525780631348eb5b1461016757806315ddfa3e1461017a5780632b7ac3f31461018d5780633e413bee146101ab575b600080fd5b6101656101603660046110de565b610303565b005b610165610175366004610f42565b610465565b610165610188366004610f42565b610487565b6101956104a9565b6040516101a291906112b1565b60405180910390f35b6101956104b8565b6101656101c1366004610f42565b6104c7565b6101ce6104e9565b6040516101a291906112a8565b6101656101e9366004610f5e565b6104ef565b6101656101fc3660046110bd565b610753565b61021461020f36600461108d565b6107af565b6040516101a293929190611518565b610165610231366004610f42565b610954565b610165610244366004610f42565b610976565b61025c61025736600461108d565b610998565b6040516101a2959493929190611541565b6101ce61027b36600461108d565b610a5a565b610288610a6c565b6040516101a29190611508565b6101656102a3366004610f42565b610a7e565b610195610aa0565b610165610aaf565b610195610b3c565b6102d36102ce36600461108d565b610b4b565b6040516101a2919061143a565b610195610c6d565b610195610c7c565b6101656102fe36600461106a565b610c8b565b6040805160c081018252600854808252602080830186815283850186815260006060808701829052608087018290528751908101885281815280850182905280880182905260a0870152938452838352949092208351815591516001830155925180519293919261037a9260028501920190610caf565b50606082015160038083018054608086015166ffffffffffffff166101000267ffffffffffffff001994151560ff1990921691909117939093169290921790915560a08301516103cf91600484019190610d3b565b5050600480546040516323b872dd60e01b81526001600160a01b0390911692506323b872dd9161040591339130918891016111e7565b602060405180830381600087803b15801561041f57600080fd5b505af1158015610433573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104579190610f1b565b505060088054600101905550565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6003546001600160a01b031681565b6004546001600160a01b031681565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b60085481565b8151604080516060808201835260208087015183528387015181840152818701518385015260808701518451928301855260a0880151835260c08801518383015260e0880151838601526000868152918290529390206003015491929160ff166105745760405162461bcd60e51b815260040161056b906112fc565b60405180910390fd5b600084815260208190526040902060030154610100900466ffffffffffffff16156105b15760405162461bcd60e51b815260040161056b906112c5565b600354875160208901516040808b0151905163eb610a8560e01b81526001600160a01b039094169363eb610a85936105f193909290918c90600401611224565b60206040518083038186803b15801561060957600080fd5b505afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190610f1b565b506000848152602081905260409020600101548210156106735760405162461bcd60e51b815260040161056b9061134d565b6040805161010081018252600480546001600160a01b0390811683526007548082166020850152600160a01b900462ffffff168385015233606084015242608084015260a08301869052600060c0840181905260e08401819052600554945163414bf38960e01b81529394909391169163414bf389916106f5918691016113d1565b602060405180830381600087803b15801561070f57600080fd5b505af1158015610723573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074791906110a5565b50505050505050505050565b60008281526020819052604090206003015460ff16156107855760405162461bcd60e51b815260040161056b9061139a565b6000918252600160208181526040808520939093558390529120600301805460ff19169091179055565b6000606081805b8381101561088457600081815260208190526040902060010154851161087c576000818152602081815260409182902080546002918201805485516001821615610100026000190190911693909304601f8101859004850284018501909552848352909750909290918301828280156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b50505050509250610884565b6001016107b6565b506040805160a081018252600480546001600160a01b0390811683526007548082166020850152838501899052600160a01b900462ffffff1660608401526000608084018190526006549451636352813560e11b81529394909391169163c6a5026a916108f3918691016114c0565b608060405180830381600087803b15801561090d57600080fd5b505af1158015610921573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109459190611123565b50969895975090955050505050565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000602081815291815260409081902080546001808301546002808501805487519481161561010002600019011691909104601f81018890048802840188019096528583529295909491929190830182828015610a365780601f10610a0b57610100808354040283529160200191610a36565b820191906000526020600020905b815481529060010190602001808311610a1957829003601f168201915b5050506003909301549192505060ff81169066ffffffffffffff6101009091041685565b60016020526000908152604090205481565b600754600160a01b900462ffffff1681565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b031681565b60075460055460405163095ea7b360e01b81526001600160a01b039283169263095ea7b392610ae7929116906000199060040161120b565b602060405180830381600087803b158015610b0157600080fd5b505af1158015610b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b399190610f1b565b50565b6006546001600160a01b031681565b610b53610d68565b60008281526020818152604091829020825160c08101845281548152600180830154828501526002808401805487519381161561010002600019011691909104601f81018690048602830186018752808352929593949386019391929091830182828015610c025780601f10610bd757610100808354040283529160200191610c02565b820191906000526020600020905b815481529060010190602001808311610be557829003601f168201915b505050918352505060038281015460ff811615156020840152610100900466ffffffffffffff1660408084019190915280516060808201928390529093019291600485019182845b815481526020019060010190808311610c4a575050505050815250509050919050565b6002546001600160a01b031681565b6007546001600160a01b031681565b6007805462ffffff909216600160a01b0262ffffff60a01b19909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282610ce55760008555610d2b565b82601f10610cfe57805160ff1916838001178555610d2b565b82800160010185558215610d2b579182015b82811115610d2b578251825591602001919060010190610d10565b50610d37929150610dae565b5090565b8260038101928215610d2b5791602002820182811115610d2b578251825591602001919060010190610d10565b6040518060c00160405280600081526020016000815260200160608152602001600015158152602001600066ffffffffffffff168152602001610da9610dc3565b905290565b5b80821115610d375760008155600101610daf565b60405180606001604052806003906020820280368337509192915050565b600082601f830112610df1578081fd5b6040516040810181811067ffffffffffffffff82111715610e0e57fe5b8060405250808385604086011115610e24578384fd5b835b6002811015610e45578135835260209283019290910190600101610e26565b509195945050505050565b600082601f830112610e60578081fd5b60405161010080820182811067ffffffffffffffff82111715610e7f57fe5b6040528184828101871015610e92578485fd5b8492505b6008831015610e4557803582526001929092019160209182019101610e96565b600082601f830112610ec6578081fd5b813567ffffffffffffffff811115610eda57fe5b610eed601f8201601f1916602001611582565b818152846020838601011115610f01578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610f2c578081fd5b81518015158114610f3b578182fd5b9392505050565b600060208284031215610f53578081fd5b8135610f3b816115c1565b6000806000838503610220811215610f74578283fd5b61010080821215610f83578384fd5b6040915081516060810167ffffffffffffffff8282108183111715610fa457fe5b818552610fb18a8a610de1565b835289605f8a0112610fc1578687fd5b60029150610fd6610fd1836115a6565b611582565b80868b0160c08c018d811115610fea578a8bfd5b8a5b8681101561101257610ffe8f84610de1565b855260209094019391890191600101610fec565b508260208801526110238e82610de1565b898801525050505082975061103a8a858b01610e50565b9650610200890135945080851115611050578586fd5b5050505061106086828701610eb6565b9150509250925092565b60006020828403121561107b578081fd5b813562ffffff81168114610f3b578182fd5b60006020828403121561109e578081fd5b5035919050565b6000602082840312156110b6578081fd5b5051919050565b600080604083850312156110cf578182fd5b50508035926020909101359150565b600080604083850312156110f0578182fd5b82359150602083013567ffffffffffffffff81111561110d578182fd5b61111985828601610eb6565b9150509250929050565b60008060008060808587031215611138578182fd5b84519350602085015161114a816115c1565b604086015190935063ffffffff81168114611163578283fd5b6060959095015193969295505050565b8060005b6002811015611196578151845260209384019390910190600101611177565b50505050565b60008151808452815b818110156111c1576020818501810151868301820152016111a5565b818111156111d25782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b61020081016112338287611173565b60408083018660005b600281101561126357611250838351611173565b918301916020919091019060010161123c565b5050505061127460c0830185611173565b61010082018360005b600881101561129c57815183526020928301929091019060010161127d565b50505095945050505050565b90815260200190565b6001600160a01b0391909116815260200190565b6020808252601c908201527f4f72646572206d757374206e6f7420626520636f6d706c657465642e00000000604082015260600190565b60208082526031908201527f4f72646572206d75737420626520636c61696d6564206265666f72652069742060408201527031b0b71031329031b7b6b83632ba32b21760791b606082015260800190565b6020808252602d908201527f416d6f756e74206d7573742062652067726561746572207468616e207468652060408201526c37b93232b91030b6b7bab73a1760991b606082015260800190565b6020808252601f908201527f4f726465722068617320616c7265616479206265656e20636c61696d65642e00604082015260600190565b81516001600160a01b03908116825260208084015182169083015260408084015162ffffff16908301526060808401518216908301526080808401519083015260a0838101519083015260c0808401519083015260e09283015116918101919091526101000190565b600060208083528351818401528084015160408401526040840151610100606085015261146b61012085018261119c565b905060608501511515608085015266ffffffffffffff60808601511660a085015260a085015160c08501845b60038110156114b457825182529184019190840190600101611497565b50919695505050505050565b81516001600160a01b0390811682526020808401518216908301526040808401519083015260608084015162ffffff1690830152608092830151169181019190915260a00190565b62ffffff91909116815260200190565b600084825260606020830152611531606083018561119c565b9050826040830152949350505050565b600086825285602083015260a0604083015261156060a083018661119c565b93151560608301525066ffffffffffffff919091166080909101529392505050565b60405181810167ffffffffffffffff8111828210171561159e57fe5b604052919050565b600067ffffffffffffffff8211156115ba57fe5b5060200290565b6001600160a01b0381168114610b3957600080fdfea26469706673582212202813c64e1989fd6271f4c3dde2e29ac6eef09bd3fabc855ac4595f49e15d05cd64736f6c63430007060033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b506004361061014d5760003560e01c806397fc007c116100c3578063c370a14b1161007c578063c370a14b146102b0578063c6bbd5a7146102b8578063d09ef241146102c0578063e416969e146102e0578063e9ca2810146102e8578063fb16a44e146102f05761014d565b806397fc007c14610236578063a85c38ef14610249578063ac0460a61461026d578063b727bc4a14610280578063b98b677f14610295578063c31c9c07146102a85761014d565b8063426172d611610115578063426172d6146101b357806345d53788146101c65780634b7484a6146101db57806380be1cf8146101ee578063887012c114610201578063910c6855146102235761014d565b80630e540b3a146101525780631348eb5b1461016757806315ddfa3e1461017a5780632b7ac3f31461018d5780633e413bee146101ab575b600080fd5b6101656101603660046110de565b610303565b005b610165610175366004610f42565b610465565b610165610188366004610f42565b610487565b6101956104a9565b6040516101a291906112b1565b60405180910390f35b6101956104b8565b6101656101c1366004610f42565b6104c7565b6101ce6104e9565b6040516101a291906112a8565b6101656101e9366004610f5e565b6104ef565b6101656101fc3660046110bd565b610753565b61021461020f36600461108d565b6107af565b6040516101a293929190611518565b610165610231366004610f42565b610954565b610165610244366004610f42565b610976565b61025c61025736600461108d565b610998565b6040516101a2959493929190611541565b6101ce61027b36600461108d565b610a5a565b610288610a6c565b6040516101a29190611508565b6101656102a3366004610f42565b610a7e565b610195610aa0565b610165610aaf565b610195610b3c565b6102d36102ce36600461108d565b610b4b565b6040516101a2919061143a565b610195610c6d565b610195610c7c565b6101656102fe36600461106a565b610c8b565b6040805160c081018252600854808252602080830186815283850186815260006060808701829052608087018290528751908101885281815280850182905280880182905260a0870152938452838352949092208351815591516001830155925180519293919261037a9260028501920190610caf565b50606082015160038083018054608086015166ffffffffffffff166101000267ffffffffffffff001994151560ff1990921691909117939093169290921790915560a08301516103cf91600484019190610d3b565b5050600480546040516323b872dd60e01b81526001600160a01b0390911692506323b872dd9161040591339130918891016111e7565b602060405180830381600087803b15801561041f57600080fd5b505af1158015610433573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104579190610f1b565b505060088054600101905550565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6003546001600160a01b031681565b6004546001600160a01b031681565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b60085481565b8151604080516060808201835260208087015183528387015181840152818701518385015260808701518451928301855260a0880151835260c08801518383015260e0880151838601526000868152918290529390206003015491929160ff166105745760405162461bcd60e51b815260040161056b906112fc565b60405180910390fd5b600084815260208190526040902060030154610100900466ffffffffffffff16156105b15760405162461bcd60e51b815260040161056b906112c5565b600354875160208901516040808b0151905163eb610a8560e01b81526001600160a01b039094169363eb610a85936105f193909290918c90600401611224565b60206040518083038186803b15801561060957600080fd5b505afa15801561061d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106419190610f1b565b506000848152602081905260409020600101548210156106735760405162461bcd60e51b815260040161056b9061134d565b6040805161010081018252600480546001600160a01b0390811683526007548082166020850152600160a01b900462ffffff168385015233606084015242608084015260a08301869052600060c0840181905260e08401819052600554945163414bf38960e01b81529394909391169163414bf389916106f5918691016113d1565b602060405180830381600087803b15801561070f57600080fd5b505af1158015610723573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074791906110a5565b50505050505050505050565b60008281526020819052604090206003015460ff16156107855760405162461bcd60e51b815260040161056b9061139a565b6000918252600160208181526040808520939093558390529120600301805460ff19169091179055565b6000606081805b8381101561088457600081815260208190526040902060010154851161087c576000818152602081815260409182902080546002918201805485516001821615610100026000190190911693909304601f8101859004850284018501909552848352909750909290918301828280156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b50505050509250610884565b6001016107b6565b506040805160a081018252600480546001600160a01b0390811683526007548082166020850152838501899052600160a01b900462ffffff1660608401526000608084018190526006549451636352813560e11b81529394909391169163c6a5026a916108f3918691016114c0565b608060405180830381600087803b15801561090d57600080fd5b505af1158015610921573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109459190611123565b50969895975090955050505050565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000602081815291815260409081902080546001808301546002808501805487519481161561010002600019011691909104601f81018890048802840188019096528583529295909491929190830182828015610a365780601f10610a0b57610100808354040283529160200191610a36565b820191906000526020600020905b815481529060010190602001808311610a1957829003601f168201915b5050506003909301549192505060ff81169066ffffffffffffff6101009091041685565b60016020526000908152604090205481565b600754600160a01b900462ffffff1681565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b031681565b60075460055460405163095ea7b360e01b81526001600160a01b039283169263095ea7b392610ae7929116906000199060040161120b565b602060405180830381600087803b158015610b0157600080fd5b505af1158015610b15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b399190610f1b565b50565b6006546001600160a01b031681565b610b53610d68565b60008281526020818152604091829020825160c08101845281548152600180830154828501526002808401805487519381161561010002600019011691909104601f81018690048602830186018752808352929593949386019391929091830182828015610c025780601f10610bd757610100808354040283529160200191610c02565b820191906000526020600020905b815481529060010190602001808311610be557829003601f168201915b505050918352505060038281015460ff811615156020840152610100900466ffffffffffffff1660408084019190915280516060808201928390529093019291600485019182845b815481526020019060010190808311610c4a575050505050815250509050919050565b6002546001600160a01b031681565b6007546001600160a01b031681565b6007805462ffffff909216600160a01b0262ffffff60a01b19909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282610ce55760008555610d2b565b82601f10610cfe57805160ff1916838001178555610d2b565b82800160010185558215610d2b579182015b82811115610d2b578251825591602001919060010190610d10565b50610d37929150610dae565b5090565b8260038101928215610d2b5791602002820182811115610d2b578251825591602001919060010190610d10565b6040518060c00160405280600081526020016000815260200160608152602001600015158152602001600066ffffffffffffff168152602001610da9610dc3565b905290565b5b80821115610d375760008155600101610daf565b60405180606001604052806003906020820280368337509192915050565b600082601f830112610df1578081fd5b6040516040810181811067ffffffffffffffff82111715610e0e57fe5b8060405250808385604086011115610e24578384fd5b835b6002811015610e45578135835260209283019290910190600101610e26565b509195945050505050565b600082601f830112610e60578081fd5b60405161010080820182811067ffffffffffffffff82111715610e7f57fe5b6040528184828101871015610e92578485fd5b8492505b6008831015610e4557803582526001929092019160209182019101610e96565b600082601f830112610ec6578081fd5b813567ffffffffffffffff811115610eda57fe5b610eed601f8201601f1916602001611582565b818152846020838601011115610f01578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215610f2c578081fd5b81518015158114610f3b578182fd5b9392505050565b600060208284031215610f53578081fd5b8135610f3b816115c1565b6000806000838503610220811215610f74578283fd5b61010080821215610f83578384fd5b6040915081516060810167ffffffffffffffff8282108183111715610fa457fe5b818552610fb18a8a610de1565b835289605f8a0112610fc1578687fd5b60029150610fd6610fd1836115a6565b611582565b80868b0160c08c018d811115610fea578a8bfd5b8a5b8681101561101257610ffe8f84610de1565b855260209094019391890191600101610fec565b508260208801526110238e82610de1565b898801525050505082975061103a8a858b01610e50565b9650610200890135945080851115611050578586fd5b5050505061106086828701610eb6565b9150509250925092565b60006020828403121561107b578081fd5b813562ffffff81168114610f3b578182fd5b60006020828403121561109e578081fd5b5035919050565b6000602082840312156110b6578081fd5b5051919050565b600080604083850312156110cf578182fd5b50508035926020909101359150565b600080604083850312156110f0578182fd5b82359150602083013567ffffffffffffffff81111561110d578182fd5b61111985828601610eb6565b9150509250929050565b60008060008060808587031215611138578182fd5b84519350602085015161114a816115c1565b604086015190935063ffffffff81168114611163578283fd5b6060959095015193969295505050565b8060005b6002811015611196578151845260209384019390910190600101611177565b50505050565b60008151808452815b818110156111c1576020818501810151868301820152016111a5565b818111156111d25782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b61020081016112338287611173565b60408083018660005b600281101561126357611250838351611173565b918301916020919091019060010161123c565b5050505061127460c0830185611173565b61010082018360005b600881101561129c57815183526020928301929091019060010161127d565b50505095945050505050565b90815260200190565b6001600160a01b0391909116815260200190565b6020808252601c908201527f4f72646572206d757374206e6f7420626520636f6d706c657465642e00000000604082015260600190565b60208082526031908201527f4f72646572206d75737420626520636c61696d6564206265666f72652069742060408201527031b0b71031329031b7b6b83632ba32b21760791b606082015260800190565b6020808252602d908201527f416d6f756e74206d7573742062652067726561746572207468616e207468652060408201526c37b93232b91030b6b7bab73a1760991b606082015260800190565b6020808252601f908201527f4f726465722068617320616c7265616479206265656e20636c61696d65642e00604082015260600190565b81516001600160a01b03908116825260208084015182169083015260408084015162ffffff16908301526060808401518216908301526080808401519083015260a0838101519083015260c0808401519083015260e09283015116918101919091526101000190565b600060208083528351818401528084015160408401526040840151610100606085015261146b61012085018261119c565b905060608501511515608085015266ffffffffffffff60808601511660a085015260a085015160c08501845b60038110156114b457825182529184019190840190600101611497565b50919695505050505050565b81516001600160a01b0390811682526020808401518216908301526040808401519083015260608084015162ffffff1690830152608092830151169181019190915260a00190565b62ffffff91909116815260200190565b600084825260606020830152611531606083018561119c565b9050826040830152949350505050565b600086825285602083015260a0604083015261156060a083018661119c565b93151560608301525066ffffffffffffff919091166080909101529392505050565b60405181810167ffffffffffffffff8111828210171561159e57fe5b604052919050565b600067ffffffffffffffff8211156115ba57fe5b5060200290565b6001600160a01b0381168114610b3957600080fdfea26469706673582212202813c64e1989fd6271f4c3dde2e29ac6eef09bd3fabc855ac4595f49e15d05cd64736f6c63430007060033',
  linkReferences: {},
  deployedLinkReferences: {},
};

export default abi;