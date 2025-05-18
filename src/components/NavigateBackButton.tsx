import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type PropType = { onClick: () => void };

function NavigateBackButton(props: Readonly<PropType>) {
  return (
    <IconButton size="small" onClick={props.onClick}>
      <ArrowBackIcon color={"primary"} fontSize="large" />
    </IconButton>
  );
}

export default NavigateBackButton;
