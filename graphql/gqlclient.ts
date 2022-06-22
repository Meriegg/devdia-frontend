import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

// Links
import errorLink from "./links/errorLink";

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
