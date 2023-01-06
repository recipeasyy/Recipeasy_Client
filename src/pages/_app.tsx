import type { AppProps, AppContext } from 'next/app';
import Layout from '../components/global/Layout';
import '../../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}