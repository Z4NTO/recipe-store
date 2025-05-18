import { Fab, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

type PropType = {
  onClick: () => void;
};

function CreateNewButton({ onClick }: PropType) {
  return (
    <Stack
      sx={{
        pointerEvents: "none",
        position: "fixed",
        bottom: 0,
        maxWidth: "1000px",
        width: "100%",
        right: "auto",
      }}
      direction={"row"}
      justifyContent={"flex-end"}
    >
      <Fab
        color="primary"
        aria-label="add"
        onClick={onClick}
        sx={{
          pointerEvents: "all",
          mb: 3,
          mr: 3,
        }}
      >
        <Add />
      </Fab>
    </Stack>
  );
}

export default CreateNewButton;
