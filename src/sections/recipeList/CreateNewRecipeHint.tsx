import { Button, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigateToCreateRecipe } from "../../router/navigateHooks.ts";

function CreateNewRecipeHint() {
  const navigateToCreatePage = useNavigateToCreateRecipe();

  return (
    <Stack alignItems={"center"} mt={7} ml={2}>
      <Typography variant="h5">Noch keine Rezepte hinzugefügt...</Typography>
      <Button startIcon={<Add />} sx={{ mt: 2 }} onClick={navigateToCreatePage}>
        Neues Rezept erstellen
      </Button>
    </Stack>
  );
}

export default CreateNewRecipeHint;
