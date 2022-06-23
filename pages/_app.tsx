import Layout from "../Components/Layout";
import MantineLibProvider from "../Components/MantineLibProvider";
import gqlclient from "../graphql/gqlclient";
import ContextProvider from "../Components/Context";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ApolloProvider client={gqlclient}>
        <MantineLibProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineLibProvider>
      </ApolloProvider>
    </ContextProvider>
  );
}

export default MyApp;
