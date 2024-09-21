import { Autocomplete, Stack, TextField } from "@mui/material";
import testDataIngredients from "../../testData_ingredients.ts";
import Ingredient from "../../model/ingredient.ts";
import IngredientAmount from "../../model/ingredientAmount.ts";
import React from "react";

type PropType = {
  ingredientAmount: IngredientAmount;
  setIngredientAmount: (newValue: IngredientAmount) => void;
};

function IngredientRow({ ingredientAmount, setIngredientAmount }: PropType) {
  const allIngredients = testDataIngredients;

  function updateIngredient(ingredient: Ingredient) {
    setIngredientAmount({
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
    <Stack key={ingredientAmount.id} direction={"row"} spacing={2}>
      <Stack width={"30%"} alignItems={"flex-end"}>
        <TextField
          variant="standard"
          value={ingredientAmount.amount}
          onChange={(event) => {
            setIngredientAmount({
              ...ingredientAmount,
              amount: event.target.value,
            });
          }}
          sx={{
            width: "50%",
            "& .MuiInputBase-input": {
              textAlign: "end",
            },
          }}
          InputProps={{
            sx: {
              "&::before": { borderBottom: "none" },
            },
          }}
        />
      </Stack>
      <Autocomplete
        freeSolo
        selectOnFocus
        sx={{
          width: "50%",
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
