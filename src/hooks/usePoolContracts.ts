import { ethers } from 'ethers';

import { useInfuraProvider } from '@/hooks/useInfuraProvider';

import EuroPoolABI from '@/contractAbis/usdcPool';
import USDCPoolABI from '@/contractAbis/usdcPool';

export const USDC_POOL_CONTRACT_ADDRESS =
  '0x7aBcBc8B3e5B47BcAa890fBc9D3A9F9fD5Bb9e1e';
export const EURO_POOL_CONTRACT_ADDRESS =
  '0x7aBcBc8B3e5B47BcAa890fBc9D3A9F9fD5Bb9e1e';

export const usePoolContracts = () => {
  const { provider } = useInfuraProvider();

  const usdcPoolContract = new ethers.Contract(
    USDC_POOL_CONTRACT_ADDRESS,
    JSON.stringify(USDCPoolABI.abi),
    provider
  );
  const euroPoolContract = new ethers.Contract(
    EURO_POOL_CONTRACT_ADDRESS,
    JSON.stringify(EuroPoolABI.abi),
    provider
  );

  return {
    usdcPoolContract,
    euroPoolContract,
  };
};
