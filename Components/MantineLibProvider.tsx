import React from "react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

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
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  );
};

export default MantineLibProvider;
