import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY,
  {
    locale: "es-AR"
  }
);

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
