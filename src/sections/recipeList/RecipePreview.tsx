import { Box, Chip, Typography } from "@mui/material";
import DraggableStack from "../../components/DraggableStack";
import Recipe from "../../model/recipe";

type PropType = {
  recipe: Recipe;
};

function RecipePreview({ recipe }: PropType) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ pb: 1 }}>
        {recipe.title}
      </Typography>
      <DraggableStack>
        {recipe.ingredients.map((ingredient) => (
          <Chip key={ingredient} label={ingredient} />
        ))}
      </DraggableStack>
    </Box>
  );
}

export default RecipePreview;
