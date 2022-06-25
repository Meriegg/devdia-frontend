import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import useGlobalContext from "../hooks/useGlobalContext";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const state = useGlobalContext();
  const { Loader, loading } = useProtectedPage();

  return (
    <div>
      <Loader />

      {!loading && (
        <>
          <h1>Hello {state?.userData?.username}</h1>
          {JSON.stringify(state)}
        </>
      )}
    </div>
  );
};

export default Home;
