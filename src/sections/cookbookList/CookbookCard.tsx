import { Avatar, Paper, Typography, useTheme } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes.ts";
import Cookbook from "../../model/cookbook.ts";

type PropType = {
  cookbook: Cookbook;
};

function CookbookCard({ cookbook }: Readonly<PropType>) {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Paper
      key={cookbook.id}
      onClick={() => {
        navigate(routes.recipeList("123"));
      }}
      elevation={2}
      sx={{
        p: 3,
        maxWidth: "300px",
        width: "100%",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Avatar
        sx={{
          width: "60px",
          height: "60px",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <MenuBook fontSize={"large"} />
      </Avatar>
      <Typography variant="h5" textAlign={"center"}>
        {cookbook.name}
      </Typography>
    </Paper>
  );
}

export default CookbookCard;
