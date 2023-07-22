import { ethers } from 'ethers';

import { useInfuraProvider } from '@/hooks/useInfuraProvider';

import EuroPoolABI from '@/contractAbis/euroPool';
import USDCPoolABI from '@/contractAbis/usdcPool';

export const USDC_POOL_CONTRACT_ADDRESS =
  '0x07a072a1df625ccc42a779e4020521477b1cba59';
export const EURO_POOL_CONTRACT_ADDRESS =
  '0x2f33d824840f9FC9b0F06C7B79a2863E30313Fc4';

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
    usdcPoolContract,
    euroPoolContract,
    signer,
  };
};
