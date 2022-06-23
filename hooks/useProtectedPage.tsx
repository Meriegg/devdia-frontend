import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_MY_DATA } from "../graphql/queries";
import { Loader } from "@mantine/core";

export default (loaderSize?: "xs" | "sm" | "md" | "lg" | "xl") => {
  const router = useRouter();

  const { loading } = useQuery(GET_MY_DATA, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: () => {
      router.push("/auth/register");
    },
  });

  return {
    Loader: () => <>{loading ? <Loader size={loaderSize || "md"} /> : null}</>,
    loading,
  };
};
