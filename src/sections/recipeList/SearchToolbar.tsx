import { Search, Tune } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import Toolbar from "../../components/Toolbar.tsx";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes.ts";
import NavigateBackButton from "../../components/NavigateBackButton.tsx";

type PropType = {
  spaceFiller?: boolean;
  textFieldValue?: string;
  setTextFieldValue?: (value: string) => void;
};

function SearchToolbar({
  spaceFiller,
  textFieldValue,
  setTextFieldValue,
}: Readonly<PropType>) {
  const navigate = useNavigate();
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
        <Stack direction="row" spacing={2}>
          <NavigateBackButton onClick={() => navigate(routes.cookbookList)} />
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
        </Stack>
        <Button variant="contained" color="primary" startIcon={<Tune />}>
          Filter
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default SearchToolbar;
