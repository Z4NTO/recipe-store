import { Chip, Stack } from "@mui/material";
import Recipe from "../../model/recipe";
import { Add } from "@mui/icons-material";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function TagDisplay({ recipe, setRecipe }: PropType) {
  function deleteTag(id: string) {
    const updatedTags = recipe.tags.filter((tag) => tag.id !== id);
    setRecipe({ ...recipe, tags: updatedTags });
  }

  return (
    <Stack
      direction={"row"}
      gap={1.5}
      flexWrap={"wrap"}
      justifyContent={"flex-start"}
      sx={{ pb: 5 }}
    >
      {recipe.tags.map((tag) => (
        <Chip
          key={tag.id}
          label={tag.name}
          onDelete={() => deleteTag(tag.id)}
        />
      ))}
      <Chip
        key={"add-tag-chip"}
        label={"Tag hinzufügen"}
        icon={<Add />}
        color={"primary"}
        variant={"outlined"}
      />
    </Stack>
  );
}

export default TagDisplay;
