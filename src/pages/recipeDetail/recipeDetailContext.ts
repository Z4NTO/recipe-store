import { createContext, useContext } from "react";
import { NewRecipe, Recipe } from "../../model/recipe.ts";

type RecipeDetailContextType = null | {
  currentRecipe: Recipe | NewRecipe;
  setCurrentRecipe: (recipe: Recipe | NewRecipe) => void;
  initialRecipe: Recipe | NewRecipe;
  isCreateNew: boolean;
  isDirty: boolean;
};

export const RecipeDetailContext = createContext<RecipeDetailContextType>(null);

export function useRecipeDetailContext() {
  const context = useContext(RecipeDetailContext);
  if (context === null) {
    throw new Error(
      "useRecipeDetailContext must be used within a RecipeDetailProvider",
    );
  }
  return context;
}
