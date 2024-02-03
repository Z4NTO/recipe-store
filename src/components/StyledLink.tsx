import { ReactNode } from "react";
import { Link } from "react-router-dom";

type PropType = { to: string; children: ReactNode };

function StyledLink({ to, children }: PropType) {
  return (
    <Link
      to={to}
      draggable={false}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {children}
    </Link>
  );
}

export default StyledLink;
