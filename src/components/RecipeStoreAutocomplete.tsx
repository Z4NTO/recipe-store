import {
  Autocomplete,
  createFilterOptions,
  FilterOptionsState,
  TextField,
} from "@mui/material";
import React from "react";

type PropType = {
  value: AutocompleteOption | null;
  onValueUpdate: (newValue: AutocompleteOption | null) => void;
  options: AutocompleteOption[];
  autocompleteProps?: object;
  textFieldProps?: object;
  inputProps?: object;
};

type AutocompleteOption = {
  id: string; // TODO: change to number
  name: string;
  label?: string;
};

function RecipeStoreAutocomplete({
  value,
  onValueUpdate,
  options,
  autocompleteProps,
  textFieldProps,
  inputProps,
}: Readonly<PropType>) {
  function handleAutocompleteChange(
    _event: React.SyntheticEvent<Element, Event>,
    newValue: AutocompleteOption | null,
  ) {
    if (newValue === null) {
      onValueUpdate(null);
    } else {
      onValueUpdate({
        id: newValue.id,
        name: newValue.name,
      });
    }
  }

  function filterOptionsOrSuggestNewOptionCreation(
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
      value={value}
      onChange={handleAutocompleteChange}
      options={options}
      filterOptions={filterOptionsOrSuggestNewOptionCreation}
      getOptionLabel={(option) => option.name}
      noOptionsText={"Keine Optionen verfügbar"}
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
          fullWidth
          slotProps={{
            input: {
              ...params.InputProps,
              ...inputProps,
            },
          }}
          {...textFieldProps}
        />
      )}
      {...autocompleteProps}
    />
  );
}

export default RecipeStoreAutocomplete;
