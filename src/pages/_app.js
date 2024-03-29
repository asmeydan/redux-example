import { store } from '@/redux/app/store'
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <Component {...pageProps} />
    </Provider>
  )
}
