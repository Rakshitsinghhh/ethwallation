import { useConnect, useDisconnect, useAccount } from 'wagmi'

export default function Wallets() {
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount()

  return (
    <div>
      {!isConnected ? (
        <>
          <h3>Select a wallet to connect:</h3>
          {connectors.map((c) => (
            <button key={c.uid} onClick={() => connect({ connector: c })}>
              {c.name}
            </button>
          ))}
        </>
      ) : (
        <>
          <p>Connected: {address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </>
      )}
    </div>
  )
}
