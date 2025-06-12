import { useReadContract } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export default function Totalsupply() {
  const { data, isLoading, error } = useReadContract({
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'totalSupply',
    chainId: mainnet.id,
  });

  return (
    <div>
      {isLoading && <>Loading...</>}
      {error && <>Error: {String(error)}</>}
      {data && <div>Total Supply: {Number(data as bigint) / 1e6} USDT</div>}
    </div>
  );
}
