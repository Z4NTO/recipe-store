export type Ingredient = {
  id: number;
  name: string;
  cookbookId: number;
};

export type NewIngredient = Omit<Ingredient, "id">;
