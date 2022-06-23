import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { Loader, loading } = useProtectedPage();

  return (
    <div>
      <Loader />

      {!loading && (
        <>
          <h1>Hello DM Sans</h1>
          {JSON.stringify(loading)}
        </>
      )}
    </div>
  );
};

export default Home;
