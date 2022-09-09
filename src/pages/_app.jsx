import 'react-datepicker/dist/react-datepicker.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import theme from 'theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Page Pressure Washing</title>
        <meta name="description" content="Page Pressure Washing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp
