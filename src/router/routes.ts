const routes = {
  cookbookList: "/cookbook",
  recipeList: (cookbookId: string) => `/cookbook/${cookbookId}`,
  recipeDetail: (cookbookId: string, recipeId: string) =>
    `/cookbook/${cookbookId}/recipe/${recipeId}`,
};

export default routes;
