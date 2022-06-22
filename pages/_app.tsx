import Layout from "../Components/Layout";
import MantineLibProvider from "../Components/MantineLibProvider";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineLibProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineLibProvider>
  );
}

export default MyApp;
