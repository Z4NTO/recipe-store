import { useQuery } from "@tanstack/react-query";
import { Tag } from "../model/tag.ts";

export function useTagQuery(cookbookId: string) {
  return useQuery<Tag[], Error>({
    queryKey: ["tag", cookbookId],
    queryFn: async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const url = new URL("/api/tag", baseUrl);
      url.searchParams.append("cookbookId", cookbookId);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching tags: ${await response.text()}`);
      }
      return response.json();
    },
    enabled: Boolean(cookbookId),
  });
}
