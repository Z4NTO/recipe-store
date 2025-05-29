import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Stack, TextField } from "@mui/material";
import IngredientAmount from "../../model/ingredientAmount.ts";
import React from "react";
import RecipeStoreAutocomplete from "../../components/RecipeStoreAutocomplete.tsx";
import Ingredient from "../../model/ingredient.ts";
import { useParams } from "react-router-dom";
import paramNames from "../../router/paramNames.ts";
import { useIngredientQuery } from "../../api/ingredient.ts";

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
  const cookbookId = useParams()[paramNames.cookbookId];
  const { data: ingredients = [] } = useIngredientQuery(cookbookId ?? "");

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
        slotProps={{
          input: {
            sx: {
              "&::before": { borderBottom: "none" },
            },
          },
        }}
      />
      <RecipeStoreAutocomplete
        value={ingredientAmount.ingredient}
        onValueUpdate={handleIngredientUpdate}
        options={ingredients}
        autocompleteProps={{
          sx: {
            width: "75%",
            pt: 0.5,
          },
        }}
        textFieldProps={{ placeholder: "Zutat" }}
        inputProps={{
          sx: { fontWeight: 500, "&::before": { borderBottom: "none" } },
        }}
      />
    </Stack>
  );
}

export default IngredientRow;
