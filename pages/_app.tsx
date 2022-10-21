import type { AppProps } from "next/app";
import "../styles/global.css";
import { DataContextProvider } from "../store/data-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}

export default MyApp;
