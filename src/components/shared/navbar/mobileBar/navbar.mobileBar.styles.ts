import { styled } from "@mui/material";
import Link from "next/link";

export const NarsunLogo = styled(Link)(({ theme }) => ({
  display: "flex",
  gap: 15,
  alignItems: "center",
  color: "white",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("xs")]: {},
}));
