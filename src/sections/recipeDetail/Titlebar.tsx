import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Recipe from "../../model/recipe";
import routes from "../../router/routes";
import TagDisplay from "./TagDisplay.tsx";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function Titlebar({ recipe, setRecipe }: PropType) {
  const navigate = useNavigate();
  const navigateToListPage = () => navigate(routes.recipeList);

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ pb: 2 }} spacing={1}>
        <IconButton size="small" onClick={navigateToListPage}>
          <ArrowBackIcon fontSize="large" sx={{ color: "black" }} />
        </IconButton>
        <TextField
          variant="standard"
          placeholder={"Titel einfügen..."}
          value={recipe.title}
          onChange={(event) =>
            setRecipe({ ...recipe, title: event.target.value })
          }
          fullWidth
          InputProps={{
            sx: {
              fontSize: "3rem",
              fontWeight: 300,
              "&::before": { borderBottom: "none" },
            },
          }}
        />
      </Stack>
      <TagDisplay recipe={recipe} setRecipe={setRecipe} />
    </>
  );
}

export default Titlebar;
