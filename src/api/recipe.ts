import { useQuery } from "@tanstack/react-query";
import Recipe from "../model/recipe.ts";

export function useRecipeQuery(cookbookId: string) {
  return useQuery<Recipe[], Error>({
    queryKey: ["recipe", cookbookId],
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
