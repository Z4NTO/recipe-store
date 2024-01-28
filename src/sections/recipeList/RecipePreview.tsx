import { Box, Chip, Stack, Typography } from "@mui/material";
import Recipe from "../../model/recipe";

type PropType = {
  recipe: Recipe;
};

function RecipePreview({ recipe }: PropType) {
  return (
    <Box sx={{ pt: 2, pb: 2, pl: 2 }}>
      <Typography variant="h4" sx={{ pb: 1 }}>
        {recipe.title}
      </Typography>
      <Stack direction="row" spacing={1}>
        {recipe.ingredients.map((ingredient) => (
          <Chip key={ingredient} label={ingredient} />
        ))}
      </Stack>
    </Box>
  );
}

export default RecipePreview;
