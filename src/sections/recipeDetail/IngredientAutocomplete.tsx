import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
  TextField,
} from "@mui/material";
import Ingredient from "../../model/ingredient.ts";
import React from "react";
import { useParams } from "react-router-dom";
import paramNames from "../../router/paramNames.ts";
import { useIngredientQuery } from "../../api/ingredient.ts";

type PropType = {
  ingredient: Ingredient | null;
  onUpdateIngredient: (newValue: Ingredient | null) => void;
};

type AutocompleteOption = Ingredient & { label?: string };

function IngredientAutocomplete({
  ingredient,
  onUpdateIngredient,
}: Readonly<PropType>) {
  const cookbookId = useParams()[paramNames.cookbookId];
  const { data: allIngredients = [] } = useIngredientQuery(cookbookId ?? "");

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

  function filterOptionsOrReturnCreateNewRecipeOptionIfEmpty(
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
      filterOptions={filterOptionsOrReturnCreateNewRecipeOptionIfEmpty}
      getOptionLabel={(option) => option.name}
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
          slotProps={{
            input: {
              ...params.InputProps,
              sx: {
                fontWeight: 500,
                "&::before": { borderBottom: "none" },
              },
            },
          }}
        />
      )}
    />
  );
}

export default IngredientAutocomplete;
