import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "themes/theme";
import { Header } from "components/organisms/Header";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};
