import { Button, Stack } from "@mui/material";
import Toolbar from "../../components/Toolbar.tsx";

type PropType = {
  spaceFiller?: boolean;
};

function EditRecipeToolbar({ spaceFiller }: PropType) {
  return (
    <Toolbar
      toolbarPosition="bottom"
      spaceFiller={spaceFiller}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        "&::WebkitBackdropFilter": "blur(5px)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"right"}
        alignItems={"center"}
        spacing={3}
        sx={{ pt: 2, pb: 2, pr: 3 }}
      >
        <Button variant={"contained"}>Speichern</Button>
        <Button variant={"outlined"} color={"inherit"}>
          Abbrechen
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default EditRecipeToolbar;
