import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <main className="flex-1 p-8">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp