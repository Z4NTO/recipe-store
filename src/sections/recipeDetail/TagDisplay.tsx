import { Chip, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import TagAddDialog from "./TagAddDialog.tsx";
import { NewTag, Tag } from "../../model/tag.ts";
import { useRecipeDetailContext } from "../../pages/recipeDetail/recipeDetailContext.ts";

function TagDisplay() {
  const { currentRecipe, setCurrentRecipe } = useRecipeDetailContext();
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  function openDialog() {
    setDialogIsOpen(true);
  }

  function closeDialog() {
    setDialogIsOpen(false);
  }

  function addTag(newTag: Tag | NewTag) {
    if (
      currentRecipe.tags.find((existingTag) => existingTag.name === newTag.name)
    ) {
      return;
    }
    setCurrentRecipe({
      ...currentRecipe,
      tags: [...currentRecipe.tags, newTag],
    });
  }

  function deleteTag(name: string) {
    const updatedTags = currentRecipe.tags.filter((tag) => tag.name !== name);
    setCurrentRecipe({ ...currentRecipe, tags: updatedTags });
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
        {currentRecipe.tags.map((tag) => (
          <Chip
            key={`${tag.name}`}
            label={tag.name}
            onDelete={() => deleteTag(tag.name)}
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
