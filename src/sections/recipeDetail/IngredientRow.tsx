import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack, TextField } from "@mui/material";
import IngredientAmount from "../../model/ingredientAmount.ts";
import React from "react";
import IngredientAutocomplete from "./IngredientAutocomplete.tsx";
import Ingredient from "../../model/ingredient.ts";

type PropType = {
  ingredientAmount: IngredientAmount;
  updateIngredientAmount: (newValue: IngredientAmount) => void;
  deleteIngredientAmount: (id: string) => void;
};

function IngredientRow({
  ingredientAmount,
  updateIngredientAmount,
  deleteIngredientAmount,
}: Readonly<PropType>) {
  const [isHovered, setIsHovered] = React.useState(false);

  function handleIngredientUpdate(ingredient: Ingredient | null) {
    updateIngredientAmount({
      ...ingredientAmount,
      ingredient: ingredient,
    });
    setIsHovered(false); // Fixes issue with hover state not resetting when selecting dropdown option
  }

  return (
    <Stack
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      direction={"row"}
      alignItems={"start"}
      spacing={2}
      sx={{
        backgroundColor: isHovered ? "whitesmoke" : "inherit",
        borderRadius: 1,
        p: 0.5,
        pr: 2,
      }}
    >
      <IconButton
        aria-label="delete"
        sx={{
          visibility: isHovered ? "visible" : "hidden",
        }}
        onClick={() => deleteIngredientAmount(ingredientAmount.id)}
      >
        <DeleteIcon />
      </IconButton>
      <TextField
        variant="standard"
        value={ingredientAmount.amount}
        placeholder={isHovered ? "Menge" : ""}
        onChange={(event) => {
          updateIngredientAmount({
            ...ingredientAmount,
            amount: event.target.value,
          });
        }}
        sx={{
          "& .MuiInputBase-input": {
            textAlign: "end",
          },
          width: "25%",
          pt: 0.5,
        }}
        InputProps={{
          sx: {
            "&::before": { borderBottom: "none" },
          },
        }}
      />
      <IngredientAutocomplete
        ingredient={ingredientAmount.ingredient}
        onUpdateIngredient={handleIngredientUpdate}
      />
    </Stack>
  );
}

export default IngredientRow;
