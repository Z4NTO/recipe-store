import { Fab, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import { Add } from "@mui/icons-material";

function CreateNewRecipeButton() {
  const navigate = useNavigate();
  const navigateToCreatePage = () => navigate(routes.recipeDetail("new"));

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
        onClick={navigateToCreatePage}
        sx={{
          pointerEvents: "all",
          marginBottom: 3,
          marginRight: 3,
        }}
      >
        <Add />
      </Fab>
    </Stack>
  );
}

export default CreateNewRecipeButton;
