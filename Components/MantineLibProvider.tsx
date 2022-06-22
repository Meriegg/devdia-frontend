import React from "react";
import { MantineProvider } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

const MantineLibProvider: React.FC<Props> = ({ children }) => {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark", fontFamily: "DM sans, 'sans-serif'" }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
};

export default MantineLibProvider;
