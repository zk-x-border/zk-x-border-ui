import { ethers } from 'ethers';

import { useInfuraProvider } from '@/hooks/useInfuraProvider';

import EuroPoolABI from '@/contractAbis/euroPool';
import USDCPoolABI from '@/contractAbis/usdcPool';

export const USDC_POOL_CONTRACT_ADDRESS =
  '0xfbb2ae302a460730685f74f262d1e3256033d625';
export const EURO_POOL_CONTRACT_ADDRESS =
  '0x18c54cfb3bc9480e9dab7feb5d319e6460d40627';

export const usePoolContracts = () => {
  const { provider } = useInfuraProvider();

  const signer = new ethers.Wallet(
    process.env.NEXT_PUBLIC_PRIVATE_KEY || '',
    provider
  );
  const usdcPoolContract = new ethers.Contract(
    USDC_POOL_CONTRACT_ADDRESS,
    JSON.stringify(USDCPoolABI),
    signer
  );
  const euroPoolContract = new ethers.Contract(
    EURO_POOL_CONTRACT_ADDRESS,
    JSON.stringify(EuroPoolABI),
    signer
  );

  return {
    provider,
    usdcPoolContract,
    euroPoolContract,
    signer,
  };
};
