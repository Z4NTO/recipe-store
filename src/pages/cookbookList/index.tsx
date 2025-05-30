import { Box, CircularProgress, Stack, Typography } from "@mui/material";

import CookbookCard from "../../sections/cookbookList/CookbookCard.tsx";
import CreateNewButton from "../../sections/recipeList/CreateNewButton.tsx";
import { useCookbookQuery } from "../../api/cookbook.ts";

function CookbookListPage() {
  const { data: cookbooks = [], isLoading } = useCookbookQuery();

  return (
    <>
      {isLoading ? (
        <Stack alignItems={"center"} mt={20}>
          <CircularProgress />
        </Stack>
      ) : (
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
              return <CookbookCard key={cookbook.id} cookbook={cookbook} />;
            })}
          </Stack>
        </Box>
      )}
      <CreateNewButton onClick={() => "lol"} />
    </>
  );
}

export default CookbookListPage;
