import { Box, Divider } from "@mui/material";
import RecipePreview from "../../sections/recipeList/RecipePreview";
import Toolbar from "../../sections/recipeList/Toolbar";
import testData from "../../testData";
import { useState } from "react";

function RecipeListPage() {
  const [searchText, setSearchText] = useState("");

  const recipes = testData;

  return (
    <Box>
      <Toolbar textFieldValue={searchText} setTextFieldValue={setSearchText} />
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
