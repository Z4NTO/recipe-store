import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import RecipeDetailPage from "../pages/recipeDetail";
import RecipeListPage from "../pages/recipeList";
import routes from "./routes";
import CookbookListPage from "../pages/cookbookList";
import paramNames from "./paramNames.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={routes.cookbookList} />,
      },
      {
        path: routes.cookbookList,
        element: <CookbookListPage />,
      },
      {
        path: routes.recipeList(`:${paramNames.cookbookId}`),
        element: <RecipeListPage />,
      },
      {
        path: routes.recipeDetail(
          `:${paramNames.cookbookId}`,
          `:${paramNames.recipeId}`,
        ),
        element: <RecipeDetailPage />,
      },
    ],
  },
]);

export default router;
