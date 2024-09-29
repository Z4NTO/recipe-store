import { Fab, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigateToCreateRecipe } from "../../router/navigateHooks.ts";

function CreateNewRecipeButton() {
  const navigateToCreatePage = useNavigateToCreateRecipe();

  return (
    <Stack
      sx={{
        pointerEvents: "none",
        position: "fixed",
        bottom: 0,
        maxWidth: "1000px",
        width: "100%",
        right: "auto",
      }}
      direction={"row"}
      justifyContent={"flex-end"}
    >
      <Fab
        color="primary"
        aria-label="add"
        onClick={navigateToCreatePage}
        sx={{
          pointerEvents: "all",
          mb: 3,
          mr: 3,
        }}
      >
        <Add />
      </Fab>
    </Stack>
  );
}

export default CreateNewRecipeButton;
