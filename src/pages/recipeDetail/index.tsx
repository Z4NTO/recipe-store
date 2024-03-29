import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import testData from "../../testData";

function RecipeDetailPage() {
  const { recipeId } = useParams();

  const recipe = testData.find((recipe) => recipe.id === recipeId);
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
        spacing={1.5}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
        sx={{ pb: 5 }}
      >
        {recipe.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </Stack>
      <Grid container spacing={2} sx={{ pb: 5 }}>
        {recipe.ingredients.map((ingredient) => (
          <Grid key={ingredient.name} item xs={6}>
            <Stack direction={"row"} spacing={1}>
              {ingredient.amount && (
                <Typography>{ingredient.amount}</Typography>
              )}
              <Typography fontWeight={500}>{ingredient.name}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Typography>{recipe.notes}</Typography>
    </Box>
  );
}

export default RecipeDetailPage;
