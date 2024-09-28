import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { Add } from "@mui/icons-material";
import { NEW_RECIPE_ID } from "../../model/recipe.ts";

function CreateNewRecipeHint() {
  const navigate = useNavigate();
  const navigateToCreatePage = () =>
    navigate(routes.recipeDetail(NEW_RECIPE_ID));

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
