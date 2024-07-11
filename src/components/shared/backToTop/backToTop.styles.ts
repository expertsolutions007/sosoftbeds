import { Padding } from "@mui/icons-material";
import { styled, Container, Button } from "@mui/material";

export const ButtonContainer = styled("button")(({ theme }) => ({
  position: "fixed",
  bottom: "32px",
  right: "32px",
  alignIitems: "center",
  justifyContent: "center",
  // width: "40px",
  // height: "40px",
  zIndex: 1000,
  cursor: "pointer",
  animation: "fadeIn 0.3s",
  // borderRadius: "50%",
  border: 0,
  Padding: "0px",
  background: "transparent",

  transition:
    "opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s",

  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
