import { Autocomplete, Stack, TextField } from "@mui/material";
import Recipe from "../../model/recipe";
import testDataIngredients from "../../testData_ingredients.ts";
import Ingredient from "../../model/ingredient.ts";

type PropType = {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
};

function Ingredients({ recipe, setRecipe }: PropType) {
  const allIngredients = testDataIngredients;

  return (
    <Stack spacing={1} pt={5} pb={7}>
      {recipe.ingredients.map((ingredientAmount, index) => (
        <Stack key={ingredientAmount.id} direction={"row"} spacing={2}>
          <Stack width={"30%"} alignItems={"flex-end"}>
            <TextField
              variant="standard"
              value={ingredientAmount.amount}
              onChange={(event) => {
                const updatedIngredients = [...recipe.ingredients];
                updatedIngredients[index] = {
                  ...ingredientAmount,
                  amount: event.target.value,
                };
                setRecipe({
                  ...recipe,
                  ingredients: updatedIngredients,
                });
              }}
              sx={{
                width: "50%",
                "& .MuiInputBase-input": {
                  textAlign: "end",
                },
              }}
              InputProps={{
                sx: {
                  "&::before": { borderBottom: "none" },
                },
              }}
            />
          </Stack>
          <Autocomplete
            freeSolo
            value={ingredientAmount.ingredient}
            onChange={(_event, newValue) => {
              const updateIngredient = (ingredient: Ingredient) => {
                const updatedIngredients = [...recipe.ingredients];
                updatedIngredients[index] = {
                  ...ingredientAmount,
                  ingredient: ingredient,
                };
                setRecipe({ ...recipe, ingredients: updatedIngredients });
              };

              if (!newValue) {
                return;
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
                updateIngredient(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const { inputValue } = params;
              return options.filter((option) =>
                option.name.includes(inputValue),
              );
            }}
            selectOnFocus
            options={allIngredients}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              // Regular option
              return option.name;
            }}
            renderOption={(props, ingredient) => {
              return (
                <li key={ingredient.id} {...props}>
                  {ingredient.name}
                </li>
              );
            }}
            sx={{
              width: "50%",
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
      ))}
    </Stack>
  );
}

export default Ingredients;
