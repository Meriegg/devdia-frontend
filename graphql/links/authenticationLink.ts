import { ContextRef } from "../../Components/Context";
import { ApolloLink } from "@apollo/client";

export default new ApolloLink((operation, forward) => {
  if (!ContextRef?.current.accessToken) {
  }

  operation.setContext({
    headers: {
      authorization: `Bearer ${ContextRef.current?.accessToken}`,
    },
  });

  return forward(operation).map((data) => {
    return data;
  });
});
