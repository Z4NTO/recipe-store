import { Search, Tune } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

function Toolbar() {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ p: 3 }}>
      <TextField
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
