import DescriptionIcon from "@mui/icons-material/Description";
import EggIcon from "@mui/icons-material/Egg";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionDivider from "../../components/SectionDivider";
import Titlebar from "../../sections/recipeDetail/Titlebar";
import { useEffect, useMemo, useState } from "react";
import IngredientList from "../../sections/recipeDetail/IngredientList.tsx";
import Notes from "../../sections/recipeDetail/Notes";
import EditRecipeToolbar from "../../sections/recipeDetail/EditRecipeToolbar.tsx";
import { objectDeepEquals } from "../../util/objects.ts";
import paramNames from "../../router/paramNames.ts";
import { useRecipeQuery } from "../../api/recipe.ts";
import Recipe, { NEW_RECIPE_ID } from "../../model/recipe.ts";

function RecipeDetailPage() {
  const cookbookId = useParams()[paramNames.cookbookId];
  const { data: recipes = [] } = useRecipeQuery(cookbookId ?? "");

  const recipeId = useParams()[paramNames.recipeId];

  const initialRecipe = useMemo(() => {
    return recipeId === NEW_RECIPE_ID
      ? { id: NEW_RECIPE_ID, title: "", tags: [], ingredients: [], notes: "" } // TODO: maybe remove id if backend does not require it
      : recipes.find((recipe) => recipe.id.toString() === recipeId);
  }, [recipeId, recipes]);

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    if (initialRecipe) {
      setRecipe(initialRecipe);
    }
  }, [initialRecipe]);

  const isDirty = !objectDeepEquals(initialRecipe, recipe);

  if (!initialRecipe || !recipe) {
    return;
  }

  return (
    <>
      <Box sx={{ p: 3, height: "100%" }}>
        <Titlebar recipe={recipe} setRecipe={setRecipe} isDirty={isDirty} />
        <SectionDivider
          title="Zutaten"
          icon={<EggIcon fontSize="large" color="primary" />}
        />
        <IngredientList recipe={recipe} setRecipe={setRecipe} />
        <SectionDivider
          title="Notizen"
          icon={<DescriptionIcon fontSize="large" color="primary" />}
        />
        <Notes recipe={recipe} setRecipe={setRecipe} />
      </Box>
      {isDirty && <EditRecipeToolbar spaceFiller />}
      {isDirty && (
        <EditRecipeToolbar
          initialRecipe={initialRecipe}
          setRecipe={setRecipe}
        />
      )}
    </>
  );
}

export default RecipeDetailPage;
