import { Container, styled } from "@mui/material";

export const ParentContainer = styled(Container)(({ theme }) => ({
  paddingTop: 100,
  paddingBottom: 100,
  display: "grid",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4,25%)",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    rowGap: 25,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const PDiv = styled("div")(({ theme, lang }) => ({
  with: "100%",
  direction: lang === "ar" ? "rtl" : "ltr",

  position: "relative",
  zIndex: 100,
  marginTop: -50,
  backgroundColor: "black",
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
