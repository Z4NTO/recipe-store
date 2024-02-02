import { Box, Chip, Stack, Typography } from "@mui/material";
import testData from "../../testData";

function RecipeDetailPage() {
  const id = "bc57b897-81d1-4331-9d0e-f431945586c5";
  const recipe = testData.find((recipe) => recipe.id === id);
  if (!recipe) {
    return;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" sx={{ pb: 2 }}>
        {recipe?.title}
      </Typography>
      <Stack
        direction={"row"}
        gap={1}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
        sx={{ pb: 5 }}
      >
        {recipe.ingredients.map((ingredient) => (
          <Chip key={ingredient} label={ingredient} />
        ))}
      </Stack>
      <Typography>{recipe.notes}</Typography>
    </Box>
  );
}

export default RecipeDetailPage;
