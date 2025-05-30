export type Tag = {
  id: number;
  name: string;
  cookbookId: number;
};

export type NewTag = Omit<Tag, "id">;
