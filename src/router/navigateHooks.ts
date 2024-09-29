import { useNavigate, useParams } from "react-router-dom";
import paramNames from "./paramNames.ts";
import routes from "./routes.ts";
import { NEW_RECIPE_ID } from "../model/recipe.ts";

export function useNavigateToRecipeList() {
  const navigate = useNavigate();
  const cookbookId = useParams()[paramNames.cookbookId];
  return () =>
    navigate(cookbookId ? routes.recipeList(cookbookId) : routes.cookbookList);
}

export function useNavigateToRecipeDetail() {
  const navigate = useNavigate();
  const cookbookId = useParams()[paramNames.cookbookId];
  return (recipeId: string) =>
    navigate(
      cookbookId
        ? routes.recipeDetail(cookbookId, recipeId)
        : routes.cookbookList,
    );
}

export function useNavigateToCreateRecipe() {
  const navigateToRecipeDetail = useNavigateToRecipeDetail();
  return () => navigateToRecipeDetail(NEW_RECIPE_ID);
}
