import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const ExperienceSlider = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
  height: "600px",
  display: "flex",
  flexDirect: "row",
  justifyContent: "center",
  position: "relative",
  userSelect: "none",
  WebkitUserSelect: "none" /* Safari/Chrome */,
  MozUserSelect: "none" /* Firefox */,
  msUserSelect: "none",
  backgroundColor:"black",
  [theme.breakpoints.up("xl")]: {
    height: "1100px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "600px",
  },
}));

export const ExperienceText = styled(Box)(({theme})=>({
  zIndex: "5",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    width:"100%",
  },
}))

export const TypographyExperience = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  lineHeight:1,

  [theme.breakpoints.up("xl")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    width:"100%",
  },
}));

export const ExpImage = styled("img")({
  width: "100%",
  filter: "brightness(50%) opacity(100%)",
  overflow:"hidden",
});


export const ExpBox = styled(Box)(({ theme }) => ({
  height: "100%",
  
  [theme.breakpoints.up("xl")]: {
    width: "800px",
  },
  [theme.breakpoints.between("lg","xl")]: {
    width: "600px",
  },
  [theme.breakpoints.only("lg")]: {
    width: "600px",
  },
  [theme.breakpoints.between("sm","lg")]: {
    width: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
  [theme.breakpoints.up("xs")]: {},
  overflow:"hidden",
}));

export const ExpMidBox = styled(Box)(({ theme }) => ({
  width: "600px",
  marginLeft: "10px",
  marginRight: "10px",
  [theme.breakpoints.up("xl")]: {
    width: "1500px",
  },
}));