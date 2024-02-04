import { Box, Divider } from "@mui/material";
import RecipePreview from "../../sections/recipeList/RecipePreview";
import Toolbar from "../../sections/recipeList/Toolbar";
import testData from "../../testData";

function RecipeListPage() {
  const recipes = testData;

  return (
    <Box>
      <Toolbar />
      {recipes.map((recipe) => (
        <Box key={recipe.id}>
          <Divider />
          <RecipePreview recipe={recipe} />
        </Box>
      ))}
    </Box>
  );
}

export default RecipeListPage;
