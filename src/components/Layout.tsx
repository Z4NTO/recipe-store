import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "whitesmoke",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1000px", backgroundColor: "white" }}>
        <Outlet />
      </Box>
    </Stack>
  );
}

export default Layout;
