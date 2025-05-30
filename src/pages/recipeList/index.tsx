import { Box, CircularProgress, Divider, Stack } from "@mui/material";
import RecipePreview from "../../sections/recipeList/RecipePreview";
import SearchToolbar from "../../sections/recipeList/SearchToolbar.tsx";
import { useState } from "react";
import { Recipe } from "../../model/recipe.ts";
import CreateNewButton from "../../sections/recipeList/CreateNewButton.tsx";
import CreateNewRecipeHint from "../../sections/recipeList/CreateNewRecipeHint.tsx";
import { useNavigateToCreateRecipe } from "../../router/navigateHooks.ts";
import { useRecipeQuery } from "../../api/recipe.ts";
import { useParams } from "react-router-dom";
import paramNames from "../../router/paramNames.ts";

function RecipeListPage() {
  const [searchText, setSearchText] = useState("");
  const navigateToCreatePage = useNavigateToCreateRecipe();

  const cookbookId = useParams()[paramNames.cookbookId];
  const { data: recipes = [], isLoading } = useRecipeQuery(cookbookId ?? "");

  function recipeMatchesSearchTerm(recipe: Recipe) {
    const searchTextLowerCase = searchText.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(searchTextLowerCase) ||
      recipe.tags.some((tag) =>
        tag.name.toLowerCase().includes(searchTextLowerCase),
      ) ||
      recipe.ingredients.some((ingredientAmount) =>
        ingredientAmount.ingredient?.name
          .toLowerCase()
          .includes(searchTextLowerCase),
      )
    );
  }

  return (
    <Box>
      <SearchToolbar
        textFieldValue={searchText}
        setTextFieldValue={setSearchText}
      />
      <SearchToolbar spaceFiller />
      {isLoading ? (
        <Stack alignItems={"center"} mt={20}>
          <CircularProgress />
        </Stack>
      ) : (
        <Box>
          {recipes.length === 0 && <CreateNewRecipeHint />}
          {recipes
            .filter((recipe) => recipeMatchesSearchTerm(recipe))
            .map((recipe) => (
              <Box key={recipe.id}>
                <RecipePreview recipe={recipe} />
                <Divider />
              </Box>
            ))}
        </Box>
      )}
      <CreateNewButton onClick={navigateToCreatePage} />
    </Box>
  );
}

export default RecipeListPage;
