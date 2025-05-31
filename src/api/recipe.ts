import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NewRecipe, Recipe } from "../model/recipe.ts";
import { TAG_QUERY_KEY } from "./tag.ts";
import { INGREDIENT_QUERY_KEY } from "./ingredient.ts";

export const RECIPE_QUERY_KEY = "recipe";

export function useRecipeQuery(cookbookId: string) {
  return useQuery<Recipe[], Error>({
    queryKey: [RECIPE_QUERY_KEY, { cookbookId }],
    queryFn: async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const url = new URL("/api/recipe", baseUrl);
      url.searchParams.append("cookbookId", cookbookId);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching recipes: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: Boolean(cookbookId),
  });
}

export function useSaveRecipeMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newRecipe: NewRecipe) => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const url = new URL("/api/recipe", baseUrl);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });
      if (!response.ok) {
        throw new Error(`Error creating recipe: ${await response.text()}`);
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [RECIPE_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [TAG_QUERY_KEY] });
      queryClient.invalidateQueries({ queryKey: [INGREDIENT_QUERY_KEY] });
    },
  });
}
