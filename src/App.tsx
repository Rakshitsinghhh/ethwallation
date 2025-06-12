import './App.css'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Wallets from "./Wallets"
import Balance from "./Balance"

const queryClient = new QueryClient()

function App() {



  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Wallets/>
          <Balance/>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
