import Ingredient from "./ingredient.ts";

type Recipe = {
  id: string;
  title: string;
  tags: string[];
  ingredients: { id: string; ingredient: Ingredient; amount?: string }[];
  notes: string;
};

export default Recipe;
