import Ingredient from "./ingredient.ts";

type IngredientAmount = {
  id: string;
  ingredient: Ingredient | null;
  amount?: string;
};

export default IngredientAmount;
