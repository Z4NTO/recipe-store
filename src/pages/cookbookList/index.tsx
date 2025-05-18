import { Box, Stack, Typography } from "@mui/material";

import CookbookCard from "../../sections/cookbookList/CookbookCard.tsx";
import CreateNewButton from "../../sections/recipeList/CreateNewButton.tsx";
import testDataCookbooks from "../../testData/cookbooks.ts";

function CookbookListPage() {
  const cookbooks = testDataCookbooks;
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
          {cookbooks.map((cookbook) => {
            return (
              <CookbookCard key={cookbook.id} textContent={cookbook.name} />
            );
          })}
        </Stack>
      </Box>
      <CreateNewButton onClick={() => "lol"} />
    </>
  );
}

export default CookbookListPage;
