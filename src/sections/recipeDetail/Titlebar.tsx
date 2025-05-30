import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import TagDisplay from "./TagDisplay.tsx";
import { useState } from "react";
import DiscardChangesDialog from "./DiscardChangesDialog.tsx";
import { useNavigateToRecipeList } from "../../router/navigateHooks.ts";
import NavigateBackButton from "../../components/NavigateBackButton.tsx";
import { useRecipeDetailContext } from "../../pages/recipeDetail/recipeDetailContext.ts";

function Titlebar() {
  const [discardChangesDialogIsOpen, setDiscardChangesDialogIsOpen] =
    useState(false);

  const { currentRecipe, setCurrentRecipe, isDirty } = useRecipeDetailContext();

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
          value={currentRecipe.title}
          onChange={(event) =>
            setCurrentRecipe({ ...currentRecipe, title: event.target.value })
          }
          fullWidth
          slotProps={{
            input: {
              sx: {
                fontSize: isMobile ? "2rem" : "3rem",
                fontWeight: isMobile ? 400 : 300,
                "&::before": { borderBottom: "none" },
              },
            },
          }}
        />
      </Stack>
      <TagDisplay />
      <DiscardChangesDialog
        isOpen={discardChangesDialogIsOpen}
        handleSubmit={navigateToRecipeList}
        handleCancel={() => setDiscardChangesDialogIsOpen(false)}
      />
    </>
  );
}

export default Titlebar;
