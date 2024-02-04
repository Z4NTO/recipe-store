import { Box, Chip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DraggableStack from "../../components/DraggableStack";
import Recipe from "../../model/recipe";
import routes from "../../router/routes";

type PropType = {
  recipe: Recipe;
};

function RecipePreview({ recipe }: PropType) {
  const navigate = useNavigate();

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
        navigate(routes.recipeDetail(recipe.id));
      }
    };

    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <Box sx={{ p: 3 }} onMouseDown={navigateIfMouseNotDragged}>
      <Typography variant="h5" sx={{ pb: 2 }}>
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
