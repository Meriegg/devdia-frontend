import type { NextPage } from "next";

import { useQuery, gql } from "@apollo/client";

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(
    gql`
      query ($getUserId: ID!) {
        getUser(id: $getUserId) {
          email
          id
          joined_on
          r_t
          username
        }
      }
    `,
    { variables: { getUserId: "hello" } }
  );

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Hello DM SANS</h1>
    </div>
  );
};

export default Home;
