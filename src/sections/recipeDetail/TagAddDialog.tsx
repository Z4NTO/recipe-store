import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { NewTag, Tag } from "../../model/tag.ts";
import RecipeStoreAutocomplete, {
  AutocompleteOption,
} from "../../components/RecipeStoreAutocomplete.tsx";
import { useParams } from "react-router-dom";
import paramNames from "../../router/paramNames.ts";
import { useTagQuery } from "../../api/tag.ts";

type PropType = {
  isOpen: boolean;
  closeDialog: () => void;
  addTag: (newTag: Tag | NewTag) => void;
};

function TagAddDialog({ isOpen, closeDialog, addTag }: Readonly<PropType>) {
  const [tag, setTag] = useState<Tag | NewTag | null>(null);

  const cookbookId = useParams()[paramNames.cookbookId];
  const { data: tags = [] } = useTagQuery(cookbookId ?? "");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
        <RecipeStoreAutocomplete
          value={tag}
          onValueUpdate={
            setTag as (newValue: AutocompleteOption | null) => void
          }
          options={tags}
          createNewOption={(name) => ({
            name,
            cookbookId: Number(cookbookId),
          })}
          textFieldProps={{ placeholder: "Tag auswählen" }}
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
