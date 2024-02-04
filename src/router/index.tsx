import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import RecipeDetailPage from "../pages/recipeDetail";
import RecipeListPage from "../pages/recipeList";
import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to={routes.recipeList} />,
      },
      {
        path: routes.recipeList,
        element: <RecipeListPage />,
      },
      {
        path: routes.recipeDetail(":recipeId"),
        element: <RecipeDetailPage />,
      },
    ],
  },
]);

export default router;
