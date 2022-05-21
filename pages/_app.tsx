import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Provider, useDispatch } from 'react-redux'
import store from '../redux/store'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
