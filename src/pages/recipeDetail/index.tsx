import DescriptionIcon from "@mui/icons-material/Description";
import EggIcon from "@mui/icons-material/Egg";
import { Box, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionDivider from "../../components/SectionDivider";
import Titlebar from "../../sections/recipeDetail/Titlebar";
import testDataRecipes from "../../testData/recipes.ts";
import { useState } from "react";
import IngredientList from "../../sections/recipeDetail/IngredientList.tsx";
import Notes from "../../sections/recipeDetail/Notes";
import EditRecipeToolbar from "../../sections/recipeDetail/EditRecipeToolbar.tsx";
import { objectDeepEquals } from "../../util/objects.ts";
import { NEW_RECIPE_ID } from "../../model/recipe.ts";

function RecipeDetailPage() {
  const { recipeId } = useParams();
  const theme = useTheme();

  const initialRecipe =
    recipeId === NEW_RECIPE_ID
      ? { id: NEW_RECIPE_ID, title: "", tags: [], ingredients: [], notes: "" }
      : testDataRecipes.find((recipe) => recipe.id === recipeId);

  const [recipe, setRecipe] = useState(initialRecipe);

  const isDirty = !objectDeepEquals(initialRecipe, recipe);

  if (!initialRecipe || !recipe) {
    return;
  }

  return (
    <>
      <Box sx={{ p: 3, height: "100%" }}>
        <Titlebar recipe={recipe} setRecipe={setRecipe} />
        <SectionDivider
          title="Zutaten"
          icon={
            <EggIcon
              fontSize="large"
              sx={{ color: theme.palette.secondary.main }}
            />
          }
        />
        <IngredientList recipe={recipe} setRecipe={setRecipe} />
        <SectionDivider
          title="Notizen"
          icon={
            <DescriptionIcon
              fontSize="large"
              sx={{ color: theme.palette.secondary.main }}
            />
          }
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
