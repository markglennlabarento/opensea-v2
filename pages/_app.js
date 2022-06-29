import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby} 
      chainRpc={{
        [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/7aaf75dd9bec4aa39d317f09082c0bf8'
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  ) 
}

export default MyApp
