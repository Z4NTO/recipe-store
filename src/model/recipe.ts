import IngredientAmount from "./ingredientAmount.ts";

type Recipe = {
  id: string;
  title: string;
  tags: string[];
  ingredients: IngredientAmount[];
  notes: string;
};

export default Recipe;
