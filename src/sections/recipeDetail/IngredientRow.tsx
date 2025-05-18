import DeleteIcon from "@mui/icons-material/Delete";
import {
  Autocomplete,
  createFilterOptions,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import Ingredient from "../../model/ingredient.ts";
import IngredientAmount from "../../model/ingredientAmount.ts";
import React from "react";
import testDataIngredients from "../../testData/ingredients.ts";

type PropType = {
  ingredientAmount: IngredientAmount;
  updateIngredientAmount: (newValue: IngredientAmount) => void;
  deleteIngredientAmount: (id: string) => void;
};

type AutocompleteOption = Ingredient & { label?: string };

function IngredientRow({
  ingredientAmount,
  updateIngredientAmount,
  deleteIngredientAmount,
}: Readonly<PropType>) {
  const allIngredients = testDataIngredients;

  const [isHovered, setIsHovered] = React.useState(false);

  function updateIngredient(ingredient: Ingredient | null) {
    updateIngredientAmount({
      ...ingredientAmount,
      ingredient: ingredient,
    });
  }

  function handleFreeSoloAutocompleteChange(
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string | AutocompleteOption | null,
  ) {
    if (newValue === null) {
      updateIngredient(null);
    } else if (typeof newValue === "string") {
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
      updateIngredient({
        id: newValue.id,
        name: newValue.name,
      });
      setIsHovered(false); // Fixes issue with hover state not resetting when selecting dropdown option
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
      <Autocomplete
        freeSolo
        clearOnBlur
        selectOnFocus
        sx={{
          width: "75%",
          pt: 0.5,
        }}
        value={ingredientAmount.ingredient as AutocompleteOption}
        onChange={handleFreeSoloAutocompleteChange}
        options={allIngredients as AutocompleteOption[]}
        filterOptions={(options, params) => {
          const filter = createFilterOptions({
            stringify: (option: AutocompleteOption) => option.name,
            trim: true,
          });
          const filteredOptions = filter(options, params);

          const trimmedInputValue = params.inputValue.trim();
          const suggestNewValueCreation =
            trimmedInputValue !== "" && filteredOptions.length === 0;
          if (suggestNewValueCreation) {
            filteredOptions.push({
              id: "new",
              name: trimmedInputValue,
              label: `"${trimmedInputValue}" erstellen`,
            });
          }

          return filteredOptions;
        }}
        getOptionLabel={(option) => {
          const optionIsFreeSoloValue = typeof option === "string";
          if (optionIsFreeSoloValue) {
            return option;
          } else {
            return option.name;
          }
        }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={`${option.id} ${option.name}`}>
              {option.label || option.name}
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
