import Layout from "../Components/Layout";
import MantineLibProvider from "../Components/MantineLibProvider";
import gqlclient from "../graphql/gqlclient";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={gqlclient}>
      <MantineLibProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineLibProvider>
    </ApolloProvider>
  );
}

export default MyApp;
