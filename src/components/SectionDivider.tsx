import {
  Divider,
  Stack,
  Typography,
  TypographyProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";

type PropType = {
  title: string;
  icon: ReactNode;
};

function SectionDivider({ title, icon }: PropType) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const props = isMobile
    ? { variant: "h5" }
    : { variant: "h4", fontWeight: 300 };

  return (
    <Divider textAlign="left">
      <Stack alignItems="center" direction="row" spacing={1}>
        {icon}
        <Typography {...(props as TypographyProps)}>{title}</Typography>
      </Stack>
    </Divider>
  );
}

export default SectionDivider;
