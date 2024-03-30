import DescriptionIcon from "@mui/icons-material/Description";
import EggIcon from "@mui/icons-material/Egg";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionDivider from "../../components/SectionDivider";
import Titlebar from "../../sections/recipeDetail/Titlebar";
import testData from "../../testData";

function RecipeDetailPage() {
  const { recipeId } = useParams();
  const theme = useTheme();

  const recipe = testData.find((recipe) => recipe.id === recipeId);
  if (!recipe) {
    return;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Titlebar recipe={recipe} />
      <SectionDivider
        title="Zutaten"
        icon={
          <EggIcon
            fontSize="large"
            sx={{ color: theme.palette.secondary.main }}
          />
        }
      />
      <Stack spacing={1} pt={5} pb={7}>
        {recipe.ingredients.map((ingredient) => (
          <Stack key={ingredient.name} direction={"row"} spacing={2}>
            <Stack width={"30%"} alignItems={"flex-end"}>
              {ingredient.amount && (
                <Typography>{ingredient.amount}</Typography>
              )}
            </Stack>
            <Typography fontWeight={500}>{ingredient.name}</Typography>
          </Stack>
        ))}
      </Stack>
      <SectionDivider
        title="Notizen"
        icon={
          <DescriptionIcon
            fontSize="large"
            sx={{ color: theme.palette.secondary.main }}
          />
        }
      />
      <Box pl={2} pr={2}>
        <Typography pt={5}>{recipe.notes}</Typography>
      </Box>
    </Box>
  );
}

export default RecipeDetailPage;
