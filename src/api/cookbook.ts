import { useQuery } from "@tanstack/react-query";
import Cookbook from "../model/cookbook.ts";

export const COOKBOOK_QUERY_KEY = "cookbook";

export function useCookbookQuery() {
  return useQuery<Cookbook[], Error>({
    queryKey: [COOKBOOK_QUERY_KEY],
    queryFn: async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(new URL("/api/cookbook", baseUrl));
      if (!response.ok) {
        throw new Error(`Error fetching cookbooks: ${await response.text()}`);
      }
      return response.json();
    },
  });
}
