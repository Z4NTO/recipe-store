import { Box, TextField } from "@mui/material";
import { useRecipeDetailContext } from "../../pages/recipeDetail/recipeDetailContext.ts";

function Notes() {
  const { currentRecipe, setCurrentRecipe } = useRecipeDetailContext();
  return (
    <Box pl={2} pr={2}>
      <TextField
        variant="standard"
        placeholder={"Notizen hier einfügen..."}
        multiline
        value={currentRecipe.notes}
        onChange={(event) => {
          setCurrentRecipe({ ...currentRecipe, notes: event.target.value });
        }}
        fullWidth
        sx={{ pt: 5 }}
        slotProps={{
          input: {
            sx: {
              "&::before": { borderBottom: "none" },
            },
          },
        }}
      />
    </Box>
  );
}

export default Notes;
