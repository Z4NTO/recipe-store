import {
  Autocomplete,
  Button,
  createFilterOptions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Tag from "../../model/tag.ts";
import testDataTags from "../../testData/tags.ts";

type PropType = {
  isOpen: boolean;
  closeDialog: () => void;
  addTag: (newTag: Tag) => void;
};

type AutocompleteOption = Tag & { label?: string };

function TagAddDialog({ isOpen, closeDialog, addTag }: Readonly<PropType>) {
  const [tag, setTag] = useState<Tag | null>(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const allTags = testDataTags;

  function handleFreeSoloAutocompleteChange(
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string | AutocompleteOption | null,
  ) {
    if (newValue === null) {
      setTag(null);
    } else if (typeof newValue === "string") {
      const existingIngredient = allTags.find((tag) => tag.name === newValue);
      if (existingIngredient) {
        setTag(existingIngredient);
      } else {
        setTag({
          id: "new",
          name: newValue,
        });
      }
    } else {
      setTag({
        id: newValue.id,
        name: newValue.name,
      });
    }
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      open={isOpen}
      onClose={closeDialog}
      aria-labelledby="add-tag-dialog-title"
    >
      <DialogTitle id="add-tag-dialog-title">
        {"Neuen Tag hinzufügen"}
      </DialogTitle>
      <DialogContent>
        <Autocomplete
          freeSolo
          clearOnBlur
          selectOnFocus
          value={tag as AutocompleteOption}
          onChange={handleFreeSoloAutocompleteChange}
          options={allTags as AutocompleteOption[]}
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
            if (typeof option === "string") {
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
              placeholder={"Tag auswählen"}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button
          disabled={tag === null}
          onClick={() => {
            if (tag) {
              addTag(tag);
            }
            closeDialog();
          }}
          autoFocus
        >
          Hinzufügen
        </Button>
        <Button autoFocus onClick={closeDialog}>
          Abbrechen
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TagAddDialog;
