import DescriptionIcon from "@mui/icons-material/Description";
import EggIcon from "@mui/icons-material/Egg";
import { Box, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionDivider from "../../components/SectionDivider";
import Titlebar from "../../sections/recipeDetail/Titlebar";
import testData from "../../testData";
import { useState } from "react";
import Ingredients from "../../sections/recipeDetail/Ingredients";
import Notes from "../../sections/recipeDetail/Notes";

function RecipeDetailPage() {
  const { recipeId } = useParams();
  const theme = useTheme();

  const initialRecipe = testData.find((recipe) => recipe.id === recipeId);
  const [recipe, setRecipe] = useState(initialRecipe);

  if (!initialRecipe || !recipe) {
    return;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Titlebar recipe={recipe} setRecipe={setRecipe} />
      <SectionDivider
        title="Zutaten"
        icon={
          <EggIcon
            fontSize="large"
            sx={{ color: theme.palette.secondary.main }}
          />
        }
      />
      <Ingredients recipe={recipe} setRecipe={setRecipe} />
      <SectionDivider
        title="Notizen"
        icon={
          <DescriptionIcon
            fontSize="large"
            sx={{ color: theme.palette.secondary.main }}
          />
        }
      />
      <Notes recipe={recipe} setRecipe={setRecipe} />
    </Box>
  );
}

export default RecipeDetailPage;
