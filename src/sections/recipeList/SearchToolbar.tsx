import { Search, Tune } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import Toolbar from "../../components/Toolbar.tsx";

type PropType = {
  spaceFiller?: boolean;
  textFieldValue?: string;
  setTextFieldValue?: (value: string) => void;
};

function SearchToolbar({
  spaceFiller,
  textFieldValue,
  setTextFieldValue,
}: PropType) {
  return (
    <Toolbar
      toolbarPosition={"top"}
      spaceFiller={spaceFiller}
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
        sx={{ p: 3, pt: 2, pb: 2 }}
      >
        <TextField
          value={textFieldValue}
          onChange={
            setTextFieldValue && ((e) => setTextFieldValue(e.target.value))
          }
          variant="outlined"
          type="search"
          placeholder={"Suche"}
          sx={{ mr: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 7,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            },
          }}
        />
        <Button variant="contained" color="secondary" startIcon={<Tune />}>
          Filter
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default SearchToolbar;
