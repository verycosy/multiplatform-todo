import { AppProps } from 'next/app';
import Head from 'next/head';
import { Ui } from '@todo/ui';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web-app!</title>
      </Head>
      <Ui />
    </>
  );
}

export default CustomApp;
