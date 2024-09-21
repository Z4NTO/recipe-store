import { Box, Button, Stack } from "@mui/material";
import Recipe from "../../model/recipe";
import IngredientAmount from "../../model/ingredientAmount.ts";
import IngredientRow from "./IngredientRow.tsx";
import { Add } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function IngredientList({ recipe, setRecipe }: PropType) {
  function addNewIngredientAmount() {
    const newIngredient: IngredientAmount = {
      id: uuidv4(),
      ingredient: null,
      amount: "",
    };
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, newIngredient],
    });
  }

  function updateIngredientAmount(newValue: IngredientAmount) {
    const updatedIngredients = [...recipe.ingredients];
    const updateIndex = updatedIngredients.findIndex(
      (ingredient) => ingredient.id === newValue.id,
    );
    updatedIngredients[updateIndex] = newValue;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  }

  function deleteIngredientAmount(deletedId: string) {
    const updatedIngredients = recipe.ingredients.filter(
      (ingredient) => ingredient.id !== deletedId,
    );
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  }

  return (
    <Box mt={5} mb={7} ml={"5%"} mr={"10%"}>
      <Stack spacing={-1}>
        {recipe.ingredients.map((ingredientAmount) => (
          <IngredientRow
            key={ingredientAmount.id}
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
