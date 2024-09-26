import { Box, Divider } from "@mui/material";
import { ReactNode } from "react";
import { BoxProps } from "@mui/material/Box/Box";

export type ToolbarPropType = BoxProps & {
  toolbarPosition: "top" | "bottom";
  spaceFiller?: boolean;
  children: ReactNode;
};

function Toolbar(props: ToolbarPropType) {
  const { toolbarPosition, spaceFiller, children, ...otherProps } = props;

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
        position: spaceFiller ? "static" : "fixed",
        visibility: spaceFiller ? "hidden" : "visible",
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
