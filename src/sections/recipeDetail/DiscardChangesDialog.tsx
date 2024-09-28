import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type PropType = {
  isOpen: boolean;
  handleSubmit: () => void;
  handleCancel: () => void;
};

function DiscardChangesDialog({
  isOpen,
  handleSubmit,
  handleCancel,
}: PropType) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="add-tag-dialog-title"
    >
      <DialogTitle id="add-tag-dialog-title">Seite verlassen?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Änderungen werden nicht gespeichert.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color={"inherit"} onClick={handleCancel}>
          Abbrechen
        </Button>
        <Button color={"primary"} onClick={handleSubmit}>
          Verlassen
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DiscardChangesDialog;
