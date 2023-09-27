import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeRegistry from '@/theme/ThemeRegistry'
import { Provider } from 'react-redux'
import { store } from '@/data/store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeRegistry>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeRegistry>
  )
}

export default MyApp
