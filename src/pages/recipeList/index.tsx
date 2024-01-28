import { Box, Divider } from "@mui/material";
import RecipePreview from "../../sections/recipeList/RecipePreview";
import testData from "../../testData";

function RecipeListPage() {
  const [firstRecipe, ...otherRecipes] = testData;

  return (
    <Box>
      <RecipePreview recipe={firstRecipe} />
      {otherRecipes.map((recipe) => (
        <Box key={recipe.id}>
          <Divider />
          <RecipePreview recipe={recipe} />
        </Box>
      ))}
    </Box>
  );
}

export default RecipeListPage;
