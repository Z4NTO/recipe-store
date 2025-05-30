import { Box, Chip, Typography } from "@mui/material";
import DraggableStack from "../../components/DraggableStack";
import { Recipe } from "../../model/recipe";
import { useNavigateToRecipeDetail } from "../../router/navigateHooks.ts";

type PropType = {
  recipe: Recipe;
};

function RecipePreview({ recipe }: Readonly<PropType>) {
  const navigateToRecipeDetail = useNavigateToRecipeDetail();

  const navigateIfMouseNotDragged = (e: React.MouseEvent<HTMLDivElement>) => {
    const initialMousePositionX = e.clientX;
    const initialMousePositionY = e.clientY;

    const mouseUpHandler = (e: MouseEvent) => {
      document.removeEventListener("mouseup", mouseUpHandler);

      const mouseMoveTolerance = 3;
      if (
        Math.abs(initialMousePositionX - e.clientX) <= mouseMoveTolerance &&
        Math.abs(initialMousePositionY - e.clientY) <= mouseMoveTolerance
      ) {
        navigateToRecipeDetail(recipe.id.toString());
      }
    };

    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <Box sx={{ p: 3 }} onMouseDown={navigateIfMouseNotDragged}>
      <Typography variant="h5" sx={{ pb: 3 }}>
        {recipe.title}
      </Typography>
      <DraggableStack>
        {recipe.tags.map((tag) => (
          <Chip key={tag.id} label={tag.name} />
        ))}
      </DraggableStack>
    </Box>
  );
}

export default RecipePreview;
