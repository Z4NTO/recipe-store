import { Button, Stack } from "@mui/material";
import Toolbar from "../../components/Toolbar.tsx";
import Recipe, { NEW_RECIPE_ID } from "../../model/recipe.ts";
import routes from "../../router/routes.ts";
import { useNavigate } from "react-router-dom";

type PropType = {
  spaceFiller?: boolean;
  initialRecipe?: Recipe;
  setRecipe?: (recipe: Recipe) => void;
};

function EditRecipeToolbar({
  initialRecipe,
  setRecipe,
  spaceFiller,
}: PropType) {
  const navigate = useNavigate();

  function handleCancel() {
    if (!initialRecipe || !setRecipe) {
      return;
    }

    if (initialRecipe.id === NEW_RECIPE_ID) {
      navigate(routes.recipeList);
    } else {
      setRecipe(initialRecipe);
    }
  }

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
        <Button variant={"outlined"} color={"inherit"} onClick={handleCancel}>
          Abbrechen
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default EditRecipeToolbar;
