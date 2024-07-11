import { Menu, Box, Button, styled, Container } from "@mui/material";
import Link from "next/link";

interface Name {
  name?: string;
}

interface Open {
  open: boolean;
}

export const PCont = styled(Container)({});

export const PMenu = styled(Menu)<Name>(({ theme, name }) => ({
  display:
    name == "Portfolio"
      ? "none"
      : name == "Learn"
      ? "none"
      : name == "Real Estate"
      ? "none"
      : "inherit",

  transitionDelay: "2s",

  "& .mui-style-g3hgs1-MuiBackdrop-root-MuiModal-backdrop": {
    height: "320px !important",
    top: "70px !important",
  },
  "& .mui-style-esi9ax": {
    height: "1px !important",
  },
  ":nth-child(n)": {
    height: "320px !important",
    maxHeight: "320px !important",
  },
  ".mui-style-1h3fr4v-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
    maxHeight: "320px !important",
    height: "320px !important",
  },
  ".mui-style-1we9249-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
    width: "10%",
  },
  "&": {
    top: "90px !important",
  },
  ".mui-style-1cfleju": {
    top: "70px !important",
  },
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const MenuItem = styled(Button)(({ theme }) => ({
  color: "white",
  textTransform: "none",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropDownMenuItem = styled(Box)<Name>(({ theme, name }: any) => ({
  display: "grid",
  gridTemplateColumns:
    name == "Learn" || name == "Portfolio" ? "" : "300px 300px",
  justifyContent: "center",
  columnGap: 20,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const BoxDropDownItem = styled("div")(({ theme }) => ({
  marginTop: "10px",
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: 1,
  paddingRight: 1,
  ":hover": {
    backgroundColor: "#00326B",
  },
  borderRadius: 30,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropDownButton = styled(Button)(({ theme, name }) => ({
  textTransform: "none",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  paddingLeft: name == "Company" ? 30 : 10,
  color:"white",

  ".mui-style-10ry97u-MuiButtonBase-root-MuiButton-root": {
    padding: "0 !important",
    paddingLeft: "0 !important",
  },

  [theme.breakpoints.up("xl")]: { fontSize: 20 },
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropDownImage = styled("img")<Name>(({ theme, name }) => ({
  marginRight: "20px",

  [theme.breakpoints.up("xl")]: { width: "20px", height: "20px" },
  [theme.breakpoints.down("xl")]: { width: "20px", height: "20px" },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const MenuItems = styled(MenuItem)<Open>(({ theme, open }: any) => ({
  color: open ? "white" : "#EBF2FF",
  opacity: open ? "1" : "0.5",
  textTransform: "none",
  cursor: "pointer !important",
  zIndex: 2000,
  position: "relative",

  [theme.breakpoints.up("xl")]: { fontSize: 20 },
  [theme.breakpoints.up("md")]: { fontSize: 15 },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropwDownImage = styled("img")<Name>(({ theme, name }) => ({
  display:
    name == "Portfolio"
      ? "none"
      : name == "Learn"
      ? "none"
      : name == "Real Estate"
      ? "none"
      : "inherit",

  [theme.breakpoints.up("xl")]: {
    width: "12px",
    height: "10px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "8px",
    height: "6px",
    marginLeft: "5px",
  },
  [theme.breakpoints.down("md")]: {
    width: "10px",
    height: "10px",
    marginLeft: "8px",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Linker = styled(Link)({
  display: "flex",
  alignItems: "center",
  padding: "0 !important",
  ".mui-style-10ry97u-MuiButtonBase-root-MuiButton-root": {
    paddingLeft: "0 !important",
  },
});