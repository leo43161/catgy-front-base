import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { initMercadoPago } from "@mercadopago/sdk-react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
