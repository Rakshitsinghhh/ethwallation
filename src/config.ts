
import { http, createConfig } from 'wagmi'
import { mainnet,sepolia} from 'wagmi/chains'
import { coinbaseWallet, metaMask, walletConnect , injected} from 'wagmi/connectors'


export const config = createConfig({
  chains: [sepolia],
  connectors: [
    walletConnect({
      projectId: import.meta.env.VITE_WC_PROJECT_ID,
    }),
    injected(),
    coinbaseWallet(),
    metaMask(),
  ],
  transports: {
    [sepolia.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}