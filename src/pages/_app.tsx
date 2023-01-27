import type { AppProps, AppContext } from 'next/app';
import Layout from '../components/global/Layout';
import '../../styles/globals.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { removeCookie } from '../util/cookie';
import { useEffect } from 'react';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});

const logout = () => {
  removeCookie('accessToken');
  removeCookie('refreshToken');
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.addEventListener('beforeunload', logout);
  }, []);

  return (
    <QueryClientProvider client={client}>
      {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
