import Head from "next/head";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import "../styles/global.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com"
            as="style"
          ></link>
          <link
            rel="preload"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://cdn.jsdelivr.net/gh/zpfz/RVerify.js@master/dist/RVerify.js"></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/zpfz/RVerify.js@master/dist/RVerify.css"
          />

          <meta
            name="viewport"
            content="initial-scale=1, width=device-width"
          />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(MyApp);