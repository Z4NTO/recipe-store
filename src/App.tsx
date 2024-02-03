import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import theme from "./theme";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
