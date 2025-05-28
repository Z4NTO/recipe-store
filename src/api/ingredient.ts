import { useQuery } from "@tanstack/react-query";
import Ingredient from "../model/ingredient.ts";

export function useIngredientQuery(cookbookId: string) {
  return useQuery<Ingredient[], Error>({
    queryKey: ["ingredients", cookbookId],
    queryFn: async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const url = new URL("/api/ingredient", baseUrl);
      url.searchParams.append("cookbookId", cookbookId);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching ingredients: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: Boolean(cookbookId),
  });
}
