import { Chip, Stack } from "@mui/material";
import Recipe from "../../model/recipe";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import TagAddDialog from "./TagAddDialog.tsx";
import Tag from "../../model/tag.ts";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function TagDisplay({ recipe, setRecipe }: PropType) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  function openDialog() {
    setDialogIsOpen(true);
  }

  function closeDialog() {
    setDialogIsOpen(false);
  }

  function addTag(newTag: Tag) {
    if (recipe.tags.find((existingTag) => existingTag.name === newTag.name)) {
      return;
    }
    setRecipe({ ...recipe, tags: [...recipe.tags, newTag] });
  }

  function deleteTag(id: string) {
    const updatedTags = recipe.tags.filter((tag) => tag.id !== id);
    setRecipe({ ...recipe, tags: updatedTags });
  }

  return (
    <>
      <Stack
        direction={"row"}
        gap={1.5}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
        sx={{ pb: 5 }}
      >
        {recipe.tags.map((tag) => (
          <Chip
            key={`${tag.id} ${tag.name}`}
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
          onClick={openDialog}
        />
      </Stack>
      {dialogIsOpen && (
        <TagAddDialog
          isOpen={dialogIsOpen}
          closeDialog={closeDialog}
          addTag={addTag}
        />
      )}
    </>
  );
}

export default TagDisplay;
