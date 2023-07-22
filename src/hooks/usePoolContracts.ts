import { ethers } from 'ethers';

import { useInfuraProvider } from '@/hooks/useInfuraProvider';

import EuroPoolABI from '@/contractAbis/euroPool';
import USDCPoolABI from '@/contractAbis/usdcPool';

export const EURO_POOL_CONTRACT_ADDRESS =
  '0x5EAF88cB9C620A14Cc923eDf60fD218717451D46';
export const USDC_POOL_CONTRACT_ADDRESS =
  '0xcB540EbC04fF963d5F187219748895D1045E4Cc1';

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
