import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const DEFAULT_INFURA_API_KEY = '82c5f2012ef5481f855420f8c6c241fc';

export const useInfuraProvider = (
  network = 'polygon-mainnet',
  infuraApiKey = DEFAULT_INFURA_API_KEY
) => {
  const [provider, setProvider] = useState<ethers.InfuraProvider | undefined>(
    undefined
  );

  useEffect(() => {
    const provider = new ethers.InfuraProvider(network, infuraApiKey);
    setProvider(provider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    provider,
  };
};
