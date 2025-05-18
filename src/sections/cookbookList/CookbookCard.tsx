import { Avatar, Paper, Typography } from "@mui/material";
import { MenuBook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes.ts";

type PropType = {
  textContent: string;
};

function CookbookCard({ textContent }: PropType) {
  const navigate = useNavigate();
  return (
    <Paper
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
      <Avatar sx={{ width: "60px", height: "60px" }}>
        <MenuBook fontSize={"large"} />
      </Avatar>
      <Typography variant="h5" textAlign={"center"}>
        {textContent}
      </Typography>
    </Paper>
  );
}

export default CookbookCard;
