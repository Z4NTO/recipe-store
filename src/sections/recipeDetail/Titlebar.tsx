import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import Recipe from "../../model/recipe";
import TagDisplay from "./TagDisplay.tsx";
import { useState } from "react";
import DiscardChangesDialog from "./DiscardChangesDialog.tsx";
import { useNavigateToRecipeList } from "../../router/navigateHooks.ts";
import NavigateBackButton from "../../components/NavigateBackButton.tsx";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
  isDirty: boolean;
};

function Titlebar({ recipe, setRecipe, isDirty }: Readonly<PropType>) {
  const [discardChangesDialogIsOpen, setDiscardChangesDialogIsOpen] =
    useState(false);

  const navigateToRecipeList = useNavigateToRecipeList();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function handleNavigateBack() {
    if (isDirty) {
      setDiscardChangesDialogIsOpen(true);
    } else {
      navigateToRecipeList();
    }
  }

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ pb: 2 }} spacing={1}>
        <NavigateBackButton onClick={handleNavigateBack} />
        <TextField
          variant="standard"
          placeholder={"Titel einfügen..."}
          value={recipe.title}
          onChange={(event) =>
            setRecipe({ ...recipe, title: event.target.value })
          }
          fullWidth
          InputProps={{
            sx: {
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: isMobile ? 400 : 300,
              "&::before": { borderBottom: "none" },
            },
          }}
        />
      </Stack>
      <TagDisplay recipe={recipe} setRecipe={setRecipe} />
      <DiscardChangesDialog
        isOpen={discardChangesDialogIsOpen}
        handleSubmit={navigateToRecipeList}
        handleCancel={() => setDiscardChangesDialogIsOpen(false)}
      />
    </>
  );
}

export default Titlebar;
