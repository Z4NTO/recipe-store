import { IngredientAmount, NewIngredientAmount } from "./ingredientAmount.ts";
import { NewTag, Tag } from "./tag.ts";

export type Recipe = {
  id: number;
  title: string;
  cookbookId: number;
  tags: Tag[];
  ingredients: IngredientAmount[];
  notes: string | null;
};

export type NewRecipe = Omit<Recipe, "id" | "tags" | "ingredients"> & {
  tags: (Tag | NewTag)[];
  ingredients: NewIngredientAmount[];
};
