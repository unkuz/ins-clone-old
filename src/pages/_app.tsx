import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '@/layout/Layout';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
