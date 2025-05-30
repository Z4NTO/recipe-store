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
import { NewRecipe, Recipe } from "../../model/recipe.ts";
import { RecipeDetailContext } from "./recipeDetailContext.ts";

type PropType = {
  isCreateNew?: boolean;
};

function RecipeDetailPage({ isCreateNew = false }: Readonly<PropType>) {
  const cookbookId = useParams()[paramNames.cookbookId];
  const { data: recipes = [] } = useRecipeQuery(cookbookId ?? "");

  const recipeId = useParams()[paramNames.recipeId];

  const initialRecipe = useMemo(() => {
    return isCreateNew
      ? {
          cookbookId: Number(cookbookId),
          title: "",
          tags: [],
          ingredients: [],
          notes: "",
        }
      : recipes.find((recipe) => recipe.id.toString() === recipeId);
  }, [isCreateNew, recipeId, recipes]);

  const [currentRecipe, setCurrentRecipe] = useState<Recipe | NewRecipe>();

  useEffect(() => {
    if (initialRecipe) {
      setCurrentRecipe(initialRecipe);
    }
  }, [initialRecipe]);

  const isDirty = !objectDeepEquals(initialRecipe, currentRecipe);

  if (!initialRecipe || !currentRecipe) {
    return;
  }

  return (
    <RecipeDetailContext
      value={{
        currentRecipe,
        setCurrentRecipe,
        initialRecipe,
        isCreateNew,
        isDirty,
      }}
    >
      <Box sx={{ p: 3, height: "100%" }}>
        <Titlebar />
        <SectionDivider
          title="Zutaten"
          icon={<EggIcon fontSize="large" color="primary" />}
        />
        <IngredientList />
        <SectionDivider
          title="Notizen"
          icon={<DescriptionIcon fontSize="large" color="primary" />}
        />
        <Notes />
      </Box>
      {isDirty && <EditRecipeToolbar spaceFiller />}
      {isDirty && <EditRecipeToolbar />}
    </RecipeDetailContext>
  );
}

export default RecipeDetailPage;
