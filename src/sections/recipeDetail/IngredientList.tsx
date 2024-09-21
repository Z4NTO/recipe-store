import { Stack } from "@mui/material";
import Recipe from "../../model/recipe";
import IngredientAmount from "../../model/ingredientAmount.ts";
import IngredientRow from "./IngredientRow.tsx";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function IngredientList({ recipe, setRecipe }: PropType) {
  function updateIngredientAmount(newValue: IngredientAmount) {
    const updatedIngredients = [...recipe.ingredients];
    const updateIndex = updatedIngredients.findIndex(
      (ingredient) => ingredient.id === newValue.id,
    );
    updatedIngredients[updateIndex] = newValue;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  }

  return (
    <Stack spacing={1} pt={5} pb={7}>
      {recipe.ingredients.map((ingredientAmount) => (
        <IngredientRow
          ingredientAmount={ingredientAmount}
          setIngredientAmount={updateIngredientAmount}
        />
      ))}
    </Stack>
  );
}

export default IngredientList;
