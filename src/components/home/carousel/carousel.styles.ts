import { styled } from "@mui/material/styles";
import { Container, Paper, Skeleton, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import { keyframes } from "@emotion/react";
import theme from "../../../theme";

interface Background {
  background?: string;
}

export const wave = keyframes`
0% {
  transform: translateY(0);
}
30% {
  transform: translateY(-50px);
}
`;

export const PDiv = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow:"hidden",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const CDiv = styled("div")<Background>(({ background }:any) => ({
  backgroundImage: `url(${background})`,
  width:"100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    height:"100vh",
    padding:"5rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const CWrap = styled("div")<Background>(({ background }:any) => ({
  position: "relative",
  color:"white",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    top:"35%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const CImage = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Description = styled("p")(({ theme }) => ({
  margin:0,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    fontSize:"3.5rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Title = styled("p")(({ theme }) => ({
  margin:0,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    fontSize:"1.5rem",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Explore = styled(Button)(({ theme }) => ({
  background:"white",
  color:"black",
  borderRadius: 0,
  padding:"0.7rem",
  ":hover":{
    backgroundColor:"black !important",
    color:'white',
  },

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));