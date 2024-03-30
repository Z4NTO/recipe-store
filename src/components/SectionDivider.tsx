import { Divider, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type PropType = {
  title: string;
  icon: ReactNode;
};

function SectionDivider({ title, icon }: PropType) {
  return (
    <Divider textAlign="left">
      <Stack alignItems="center" direction="row" spacing={1}>
        {icon}
        <Typography variant="h4" fontWeight={300}>
          {title}
        </Typography>
      </Stack>
    </Divider>
  );
}

export default SectionDivider;
