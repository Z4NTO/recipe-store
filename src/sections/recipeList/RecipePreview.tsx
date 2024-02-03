import { Box, Chip, Typography } from "@mui/material";
import DraggableStack from "../../components/DraggableStack";
import StyledLink from "../../components/StyledLink";
import Recipe from "../../model/recipe";
import routes from "../../router/routes";

type PropType = {
  recipe: Recipe;
};

function RecipePreview({ recipe }: PropType) {
  return (
    <StyledLink to={routes.recipeDetail(recipe.id)}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ pb: 2 }}>
          {recipe.title}
        </Typography>
        <DraggableStack>
          {recipe.ingredients.map((ingredient) => (
            <Chip key={ingredient} label={ingredient} />
          ))}
        </DraggableStack>
      </Box>
    </StyledLink>
  );
}

export default RecipePreview;
