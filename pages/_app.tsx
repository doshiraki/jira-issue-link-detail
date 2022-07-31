import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useBridgeAction} from './api/redux/atlassian/async'
import {Provider} from 'react-redux'
import {useAppDispatch} from './api/redux/store/hooks'
import {store} from './api/redux/store/store'
import react,{ useEffect } from 'react'


const BridgeProvider = ({children}:{children:any}) => {
  const dispatch = useAppDispatch();
  const bridgeAction = useBridgeAction();
  useEffect(()=>{
    dispatch(bridgeAction);
  }, [dispatch, bridgeAction]);
  return <>{children}</>
}
function MyApp({ Component, pageProps }: AppProps) {

  return <Provider store={store}>
    <BridgeProvider>
    <Component {...pageProps} />
    </BridgeProvider>
    </Provider>
}

export default MyApp
