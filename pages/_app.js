import '../styles/globals.css';
import App from 'next/app';
import React from 'react';
import Page from '../components/Page';
import '../components/assets/sass/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;

// function MyApp({ Component, pageProps }) {
// return <Component {...pageProps} />
// }
