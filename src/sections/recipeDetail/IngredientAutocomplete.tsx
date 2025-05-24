import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
  TextField,
} from "@mui/material";
import Ingredient from "../../model/ingredient.ts";
import React from "react";
import testDataIngredients from "../../testData/ingredients.ts";

type PropType = {
  ingredient: Ingredient | null;
  onUpdateIngredient: (newValue: Ingredient | null) => void;
};

type AutocompleteOption = Ingredient & { label?: string };

function IngredientAutocomplete({
  ingredient,
  onUpdateIngredient,
}: Readonly<PropType>) {
  const allIngredients = testDataIngredients;

  function handleAutocompleteChange(
    _event: React.SyntheticEvent<Element, Event>,
    newValue: AutocompleteOption | null,
  ) {
    if (newValue === null) {
      onUpdateIngredient(null);
    } else {
      onUpdateIngredient({
        id: newValue.id,
        name: newValue.name,
      });
    }
  }

  function filterOptionsAndMaybeAddCreateNewRecipeOption(
    options: AutocompleteOption[],
    params: FilterOptionsState<AutocompleteOption>,
  ) {
    const filter = createFilterOptions({
      stringify: (option: AutocompleteOption) => option.name,
      trim: true,
    });
    const filteredOptions = filter(options, params);

    const trimmedSearchValue = params.inputValue.trim();
    const suggestNewValueCreation =
      trimmedSearchValue !== "" && filteredOptions.length === 0;
    if (suggestNewValueCreation) {
      filteredOptions.push({
        id: "new",
        name: trimmedSearchValue,
        label: `"${trimmedSearchValue}" erstellen`,
      });
    }

    return filteredOptions;
  }

  return (
    <Autocomplete
      clearOnBlur
      selectOnFocus
      sx={{
        width: "75%",
        pt: 0.5,
      }}
      value={ingredient as AutocompleteOption}
      onChange={handleAutocompleteChange}
      options={allIngredients as AutocompleteOption[]}
      filterOptions={filterOptionsAndMaybeAddCreateNewRecipeOption}
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
  );
}

export default IngredientAutocomplete;
