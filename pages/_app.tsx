import type { AppProps } from "next/app";
import "../styles/global.css";
import { DataContextProvider } from "../store/data-context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </>
  );
}

export default MyApp;
