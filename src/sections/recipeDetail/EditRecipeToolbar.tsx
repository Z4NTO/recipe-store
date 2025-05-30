import { Button, Stack } from "@mui/material";
import Toolbar from "../../components/Toolbar.tsx";
import { useNavigateToRecipeList } from "../../router/navigateHooks.ts";
import { useRecipeDetailContext } from "../../pages/recipeDetail/recipeDetailContext.ts";

type PropType = {
  spaceFiller?: boolean;
};

function EditRecipeToolbar({ spaceFiller }: Readonly<PropType>) {
  const { initialRecipe, setCurrentRecipe, isCreateNew } =
    useRecipeDetailContext();
  const navigateToRecipeList = useNavigateToRecipeList();

  function handleCancel() {
    if (!initialRecipe) {
      return;
    }

    if (isCreateNew) {
      navigateToRecipeList();
    } else {
      setCurrentRecipe(initialRecipe);
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
