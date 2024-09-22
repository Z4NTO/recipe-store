import { Box, Divider } from "@mui/material";
import { ReactNode } from "react";
import { BoxProps } from "@mui/material/Box/Box";

type PropType = BoxProps & {
  toolbarPosition: "top" | "bottom";
  children: ReactNode;
};

function Toolbar(props: PropType) {
  const { toolbarPosition, children, ...otherProps } = props;

  const toolbarStyles =
    toolbarPosition === "bottom"
      ? {
          top: "auto",
          bottom: 0,
        }
      : {};

  return (
    <Box
      {...otherProps}
      sx={{
        position: "fixed",
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "white",
        ...toolbarStyles,
        ...otherProps.sx,
      }}
    >
      {toolbarPosition === "bottom" && <Divider />}
      {children}
      {toolbarPosition === "top" && <Divider />}
    </Box>
  );
}

export default Toolbar;
