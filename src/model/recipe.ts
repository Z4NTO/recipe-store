import IngredientAmount from "./ingredientAmount.ts";
import Tag from "./tag.ts";

type Recipe = {
  id: string;
  title: string;
  tags: Tag[];
  ingredients: IngredientAmount[];
  notes: string;
};

export default Recipe;
