import Ingredient from "./ingredient.ts";

type IngredientAmount = {
  id: string;
  ingredient: Ingredient;
  amount?: string;
};

export default IngredientAmount;
