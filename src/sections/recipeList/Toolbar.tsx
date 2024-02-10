import { Search, Tune } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

type PropType = {
  textFieldValue: string;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
};

function Toolbar({ textFieldValue, setTextFieldValue }: PropType) {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ p: 3 }}>
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
  );
}

export default Toolbar;
