import IngredientAmount from "./ingredientAmount.ts";
import Tag from "./tag.ts";

export const NEW_RECIPE_ID = "new";

type Recipe = {
  id: string;
  title: string;
  tags: Tag[];
  ingredients: IngredientAmount[];
  notes: string;
};

export default Recipe;
