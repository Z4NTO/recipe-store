import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "whitesmoke",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "white",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
}

export default Layout;
