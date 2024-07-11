import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { Link as Lindk } from "@mui/material";

interface Background {
  bg?: string;
}

export const PBox = styled("div")(({ theme }: any) => ({
  [theme.breakpoints.down("sm")]: {
    ".mui-style-18hwg3h-MuiPaper-root-MuiAppBar-root": {
      paddingTop: "0 !important",
    },
  },
  zIndex: "1200",
}));

export const PCont = styled("div")(({ theme }) => ({
  margin: "auto",
  backgroundColor: "#14324b",
  color: "white",
  width: "100%",

  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.up("xl")]: {

  },
  [theme.breakpoints.between("lg", "xl")]: {

  },
  [theme.breakpoints.only("lg")]: {

  },
  [theme.breakpoints.between("md", "lg")]: {

  },
  [theme.breakpoints.up("md")]: {

  },
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
  },
}));

export const AppBarr = styled("div")<Background>(({ theme, bg }) => ({
  backgroundColor: "transparent",
}));

export const MenuToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.up("md")]: {
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const NarsunLogo = styled(Lindk)(({ theme }) => ({
  display: "flex",
  gap: 15,
  alignItems: "center",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",

  [theme.breakpoints.up("xl")]: {
    fontSize: 17,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const Menu = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xl")]: {
    gap: "35px !important",
  },
  [theme.breakpoints.up("md")]: {
    gap: 10,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},

  ":after": {
    padding: 0,
  },
}));

export const HireNow = styled(Link)(({ theme, lang }) => ({
  display: "flex",
  alignItems: "center",
  color: "white",
  textTransform: "none",
  textDecoration: "none",
  gap: 6,
  direction: lang == "ar" ? "rtl" : "ltr",

  [theme.breakpoints.up("xl")]: {
    fontSize: 17,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 17,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const BacktoTopImage = styled("img")(({ theme }) => ({
  width: "32px",
  height: "32px",
  // border: "2px solid",
  borderRadius: "50%",
  [theme.breakpoints.up("md")]: {
    // width: "32px",
    // height: "32px",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Term = styled("p")(({ theme }) => ({
  lineHeight: 1,
  [theme.breakpoints.up("xl")]: {
    fontSize: 20,
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropwDownImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    width: "15px",
    height: "15px",
    marginLeft: "10px",
  },
  [theme.breakpoints.only("lg")]: {
    width: "10px",
    height: "10px",
    marginLeft: "8px",
  },
  [theme.breakpoints.down("md")]: {
    width: "10px",
    height: "10px",
    marginLeft: "8px",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));