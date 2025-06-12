import { useAccount, useBalance } from 'wagmi'

export default function Balance() {
  const { address, isConnected } = useAccount()

  const { data, isLoading, isError } = useBalance({
    address,
  })

  if (!isConnected) return <p>Not connected</p>
  if (isLoading) return <p>Loading balance...</p>
  if (isError) return <p>Error fetching balance</p>

  return (
    <div>
      {/* <p>Address: {address}</p> */}
      <p>Balance: {data?.formatted} {data?.symbol}</p>
    </div>
  )
}
