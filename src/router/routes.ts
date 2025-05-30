const routes = {
  cookbookList: "/cookbook",
  recipeList: (cookbookId: string) => `/cookbook/${cookbookId}`,
  recipeDetail: (cookbookId: string, recipeId: string) =>
    `/cookbook/${cookbookId}/recipe/${recipeId}`,
  createNewRecipe: (cookbookId: string) => `/cookbook/${cookbookId}/recipe`,
};

export default routes;
