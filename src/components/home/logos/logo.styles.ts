import { styled } from "@mui/material/styles";
import { Box, Container, Paper } from "@mui/material";
import Slider from "react-slick";

export const Slid = styled(Slider)({});

export const LogoPaper = styled("div")(({ theme }) => ({
  backgroundColor: "#00060D",
  borderRadius: "0 !important",
  width: "100%",

  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {
    paddingTop: 10,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const PContainer = styled(Container)(({ theme }) => ({
  margin: 0,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Rad = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "60px 0px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("md")]: {
    // paddingTop:60,
  },
  [theme.breakpoints.down("md")]: {
    // paddingBottom:15,
    padding: 0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const LogoImage = styled("img")(({ theme }) => ({
  margin: 0,

  [theme.breakpoints.up("md")]: {
    width: "150px",
    height: "50%",
    overflow: "visible",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 30,
    height: "60px",
    width: "60px !important",
    overflow: "visible",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    height: "150px",
    width: "100px",
    maxWidth: "100px",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 30,
    height: "60px",
    width: "155px !important",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
