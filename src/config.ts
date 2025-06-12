
import { http, createConfig } from 'wagmi'
import { mainnet,sepolia} from 'wagmi/chains'
import { coinbaseWallet, metaMask, walletConnect , injected} from 'wagmi/connectors'


export const config = createConfig({
  chains: [mainnet],
  connectors: [
    walletConnect({
      projectId: import.meta.env.VITE_WC_PROJECT_ID,
    }),
    injected(),
    coinbaseWallet(),
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}