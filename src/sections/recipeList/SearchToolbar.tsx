import { Search, Tune } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import Toolbar from "../../components/Toolbar.tsx";

type PropType = {
  textFieldValue: string;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
};

function SearchToolbar({ textFieldValue, setTextFieldValue }: PropType) {
  return (
    <Toolbar
      toolbarPosition={"top"}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        "&::WebkitBackdropFilter": "blur(5px)",
        backdropFilter: "blur(5px)",
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
          type="search"
          sx={{ mr: 3, backgroundColor: "white" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" startIcon={<Tune />}>
          Filter
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default SearchToolbar;
