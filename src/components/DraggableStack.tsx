import { Stack } from "@mui/material";
import { ReactNode, useRef, useState } from "react";

type PropType = { children: ReactNode };

function DraggableStack({ children }: PropType) {
  const [mouseDown, setMouseDown] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stackRef.current) {
      return;
    }

    setMouseDown(true);
    const initialScrollPositionX = stackRef.current.scrollLeft;
    const initialMousePositionX = e.clientX;

    const mouseMoveHandler = (e: MouseEvent) => {
      if (!stackRef.current) {
        return;
      }

      // How far the mouse has been moved
      const dx = e.clientX - initialMousePositionX;

      // Scroll the element
      stackRef.current.scrollLeft = initialScrollPositionX - dx;
    };

    const mouseUpHandler = () => {
      setMouseDown(false);

      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <Stack
      ref={stackRef}
      direction="row"
      spacing={1}
      sx={{
        cursor: mouseDown ? "grabbing" : "grab",
        userSelect: mouseDown ? "none" : "auto",
        overflowX: "scroll",
        overflowY: "hidden",
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": { display: "none" },
      }}
      onMouseDown={mouseDownHandler}
    >
      {children}
    </Stack>
  );
}

export default DraggableStack;
