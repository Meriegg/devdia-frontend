import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

// Links
import errorLink from "./links/errorLink";
import authenticationLink from "./links/authenticationLink";

const link = from([
  errorLink,
  authenticationLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" }),
]);

export default new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
