import '../styles/globals.css'
import { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp