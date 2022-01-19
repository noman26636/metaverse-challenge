import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import Moralis from 'moralis/types'


function MyApp({ Component, pageProps }: AppProps) {

  const moralisAppID = process.env.NEXT_PUBLIC_APP_ID
const moralisServerUrl = process.env.NEXT_PUBLIC_SERVER_URL

  return (

    <MoralisProvider appId={moralisAppID} serverUrl={moralisServerUrl}>

      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
