import { styled } from "@mui/material/styles";
import { Box, Paper, Typography } from "@mui/material";
interface IDrawerDiv {
  checked: boolean;
}

interface IDrawerDiv {
  checked: boolean;
}
export const FullBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#EBF2FF",
  paddingTop: 80,
  borderTopRightRadius:50,
  borderTopLeftRadius:50,
  position:"relative",
  zIndex:10,
  marginTop:-50,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingBottom:10,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingFlexBox = styled(Box)(({ theme }) => ({
  flexGrow: 2,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Subheading = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    color: "green",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "20px",
    color: "red",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "30px",
  },
  color: "#5F5F5F",
}));

export const Heading = styled(Typography)(({ theme,lang }) => ({
  fontWeight: "bold",
  margin: 0,
  direction:lang === "ar"? "rtl" : "ltr",

  [theme.breakpoints.up("xl")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
    paddingBottom:50,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const DrawerBox = styled(Box)(({ theme }) => ({
  textAlign: "start",
  paddingTop: "4%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

// edit code from here,
// use grid template columns
// to check which card is expanded
// which is expanded give it 70% and the un expanded 30%
export const DrawerDiv = styled("div")<IDrawerDiv>(
  ({ checked }) =>
    ({ theme }) => ({
      width: "100%",
      gap: 10,
      writingMode: "vertical-lr",

      [theme.breakpoints.up("xl")]: {},
      [theme.breakpoints.only("lg")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      },
      [theme.breakpoints.down("md")]: {
        display: "grid",
        gridTemplateRows: "1fr",
        writingMode: "horizontal-tb",
      },
      [theme.breakpoints.up("xs")]: {},
    })
);
