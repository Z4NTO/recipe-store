import Ingredient from "./ingredient";

type Recipe = {
  id: string;
  title: string;
  tags: string[];
  ingredients: Ingredient[];
  notes: string;
};

export default Recipe;
