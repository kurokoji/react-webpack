import React from "react";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 2 }}>
            Webpack React
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
