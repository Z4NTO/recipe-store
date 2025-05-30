import { Ingredient, NewIngredient } from "./ingredient.ts";

export type IngredientAmount = {
  id: number;
  uiKey: string;
  ingredient: Ingredient | null;
  amount: string | null;
};

export type NewIngredientAmount = Omit<
  IngredientAmount,
  "id" | "ingredient"
> & { ingredient: Ingredient | NewIngredient | null };
