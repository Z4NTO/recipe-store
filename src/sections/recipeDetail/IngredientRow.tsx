import DeleteIcon from "@mui/icons-material/Delete";
import { Autocomplete, IconButton, Stack, TextField } from "@mui/material";
import testDataIngredients from "../../testData_ingredients.ts";
import Ingredient from "../../model/ingredient.ts";
import IngredientAmount from "../../model/ingredientAmount.ts";
import React from "react";

type PropType = {
  ingredientAmount: IngredientAmount;
  updateIngredientAmount: (newValue: IngredientAmount) => void;
  deleteIngredientAmount: (id: string) => void;
};

function IngredientRow({
  ingredientAmount,
  updateIngredientAmount,
  deleteIngredientAmount,
}: PropType) {
  const allIngredients = testDataIngredients;

  const [isHovered, setIsHovered] = React.useState(false);

  function updateIngredient(ingredient: Ingredient) {
    updateIngredientAmount({
      ...ingredientAmount,
      ingredient: ingredient,
    });
  }

  function handleFreeSoloAutocompleteChange(
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string | Ingredient | null,
  ) {
    if (!newValue) {
      return;
    }

    if (typeof newValue === "string") {
      const existingIngredient = allIngredients.find(
        (ingredient) => ingredient.name === newValue,
      );
      if (existingIngredient) {
        updateIngredient(existingIngredient);
      } else {
        updateIngredient({
          id: "new",
          name: newValue,
        });
      }
    } else {
      updateIngredient(newValue);
    }
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
        padding: 0.5,
        paddingRight: 2,
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
          paddingTop: 0.5,
        }}
        InputProps={{
          sx: {
            "&::before": { borderBottom: "none" },
          },
        }}
      />
      <Autocomplete
        freeSolo
        selectOnFocus
        sx={{
          width: "75%",
          paddingTop: 0.5,
        }}
        value={ingredientAmount.ingredient}
        onChange={handleFreeSoloAutocompleteChange}
        options={allIngredients}
        filterOptions={(options, params) => {
          const { inputValue } = params;
          return options.filter((option) => option.name.includes(inputValue));
        }}
        getOptionLabel={(option) => {
          const optionIsFreeSoloValue = typeof option === "string";
          if (optionIsFreeSoloValue) {
            return option;
          } else {
            return option.name;
          }
        }}
        renderOption={(props, ingredient) => {
          return (
            <li key={ingredient.id} {...props}>
              {ingredient.name}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder={"Zutat"}
            fullWidth
            InputProps={{
              ...params.InputProps,
              sx: {
                fontWeight: 500,
                "&::before": { borderBottom: "none" },
              },
            }}
          />
        )}
      />
    </Stack>
  );
}

export default IngredientRow;
