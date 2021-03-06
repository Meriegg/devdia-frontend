import React, { createContext } from "react";
import { UserType } from "../types";

export const myContext = createContext<any>({});
export let ContextRef = React.createRef<any>();

interface Props {
  children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const [userData, setUserData] = React.useState<UserType | null>(null);

  const value = {
    accessToken,
    setAccessToken,
    userData,
    setUserData,
  };

  React.useImperativeHandle(ContextRef, () => value);

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export default ContextProvider;
