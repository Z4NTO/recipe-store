import { Search, Tune } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

type PropType = {
  textFieldValue: string;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
};

function Toolbar({ textFieldValue, setTextFieldValue }: PropType) {
  return (
    <Box
      sx={{
        position: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        width: "100%",
        maxWidth: "1000px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
        sx={{ p: 3, height: "90px" }}
      >
        <TextField
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
          variant="outlined"
          sx={{ pr: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" startIcon={<Tune />}>
          Zutaten
        </Button>
      </Stack>
      <Divider />
    </Box>
  );
}

export default Toolbar;
