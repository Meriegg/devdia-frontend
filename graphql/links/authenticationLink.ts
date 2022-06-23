import { ApolloLink } from "@apollo/client";

export default new ApolloLink((operation, forward) => {
  console.log(operation);

  return forward(operation).map((data) => {
    console.log(data);

    return data;
  });
});
