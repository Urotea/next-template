import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import theme from '../theme';

// tslint:disable-next-line variable-name
const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  // const user = useSelector((state: State) => {
  //   return state.global.user
  // });
  return (
    <Provider store={store}>
      <Head>
        <title>Next-Template</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default WrappedApp;
