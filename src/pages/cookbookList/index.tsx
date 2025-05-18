import { Box, Stack, Typography } from "@mui/material";

import CookbookCard from "../../sections/cookbookList/CookbookCard.tsx";
import CreateNewButton from "../../sections/recipeList/CreateNewButton.tsx";

function CookbookListPage() {
  const testDataCookbooks = [
    "Kochbuch von Dorit",
    "Kochbuch von Felix Maximilian Müller der Knüller",
    "Kochbuch von Andreas",
  ];
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography variant="h2" ml={"2%"} mt={1}>
          Kochbücher
        </Typography>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={7}
          justifyContent={"center"}
          alignItems={"center"}
          mt={10}
        >
          {testDataCookbooks.map((cookbookContent) => {
            return (
              <CookbookCard
                key={cookbookContent}
                textContent={cookbookContent}
              />
            );
          })}
        </Stack>
      </Box>
      <CreateNewButton onClick={() => "lol"} />
    </>
  );
}

export default CookbookListPage;
