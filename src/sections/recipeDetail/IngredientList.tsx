import { Box, Button, Stack } from "@mui/material";
import {
  IngredientAmount,
  NewIngredientAmount,
} from "../../model/ingredientAmount.ts";
import IngredientRow from "./IngredientRow.tsx";
import { Add } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { useRecipeDetailContext } from "../../pages/recipeDetail/recipeDetailContext.ts";

function IngredientList() {
  const { currentRecipe, setCurrentRecipe } = useRecipeDetailContext();

  function addNewIngredientAmount() {
    const newIngredient = {
      uiKey: uuidv4(),
      ingredient: null,
      amount: null,
    };
    setCurrentRecipe({
      ...currentRecipe,
      ingredients: [...currentRecipe.ingredients, newIngredient],
    });
  }

  function updateIngredientAmount(
    newValue: IngredientAmount | NewIngredientAmount,
  ) {
    const updatedIngredients = [...currentRecipe.ingredients];
    const updateIndex = updatedIngredients.findIndex(
      (ingredient) => ingredient.uiKey === newValue.uiKey,
    );
    updatedIngredients[updateIndex] = newValue;
    setCurrentRecipe({ ...currentRecipe, ingredients: updatedIngredients });
  }

  function deleteIngredientAmount(uiKey: string) {
    const updatedIngredients = currentRecipe.ingredients.filter(
      (ingredient) => ingredient.uiKey !== uiKey,
    );
    setCurrentRecipe({ ...currentRecipe, ingredients: updatedIngredients });
  }

  return (
    <Box mt={5} mb={7} ml={"5%"} mr={"10%"}>
      <Stack spacing={-1}>
        {currentRecipe.ingredients.map((ingredientAmount) => (
          <IngredientRow
            key={ingredientAmount.uiKey}
            ingredientAmount={ingredientAmount}
            updateIngredientAmount={updateIngredientAmount}
            deleteIngredientAmount={deleteIngredientAmount}
          />
        ))}
      </Stack>
      <Button
        onClick={addNewIngredientAmount}
        startIcon={<Add />}
        sx={{ ml: "30%" }}
      >
        Zutat hinzufügen
      </Button>
    </Box>
  );
}

export default IngredientList;
