import { Box, Divider } from "@mui/material";
import RecipePreview from "../../sections/recipeList/RecipePreview";
import SearchToolbar from "../../sections/recipeList/SearchToolbar.tsx";
import testDataRecipes from "../../testData/recipes.ts";
import { useState } from "react";

function RecipeListPage() {
  const [searchText, setSearchText] = useState("");

  const recipes = testDataRecipes;

  return (
    <Box>
      <SearchToolbar
        textFieldValue={searchText}
        setTextFieldValue={setSearchText}
      />
      <Box sx={{ pt: "90px" }}>
        {recipes
          .filter((recipe) => recipe.title.includes(searchText))
          .map((recipe) => (
            <Box key={recipe.id}>
              <RecipePreview recipe={recipe} />
              <Divider />
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default RecipeListPage;
