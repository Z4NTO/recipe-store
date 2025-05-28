import { Box, TextField } from "@mui/material";
import Recipe from "../../model/recipe";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function Notes({ recipe, setRecipe }: Readonly<PropType>) {
  return (
    <Box pl={2} pr={2}>
      <TextField
        variant="standard"
        placeholder={"Notizen hier einfügen..."}
        multiline
        value={recipe.notes}
        onChange={(event) => {
          setRecipe({ ...recipe, notes: event.target.value });
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
