import { positions } from "./../../../career/join/data/positions";
import { Link, styled } from "@mui/material";

interface SBox {
  sBox: boolean;
  pBox: boolean;
}

export const CLink = styled("p")(({ theme, title, lang }) => ({
  textDecoration: "none",
  lineHeight: 1,
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100%",
  direction: lang === "ar" ? "rtl" : "ltr",
  cursor:"pointer",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    height: title != "Get A Quote" ? "100%" : "40%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const PBox = styled("div")<SBox>(({ theme, title, sBox }) => ({
  borderRadius: 40,
  zIndex: 30,
  transition: "0s",

  alignItems: title == "Get A Quote" ? "end" : "space-between",
  width: "100%",
  height: "100%",
  justifyContent: title == "Get A Quote" ? "center" : "inherit",
  backgroundColor: title == "Get A Quote" ? "black" : "#EBF2FFN",
  color: title == "Get A Quote" ? "white" : "black",
  border: "1px solid black",

  [theme.breakpoints.up("xl")]: {
    minHeight: "350px",
    maxHeight: "max-content",
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: "300px",
    maxHeight: "max-content",
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 300,
    maxHeight: "max-content",
    overflow: title == "Get A Quote" ? "hidden" : "inherit",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    minHeight: 280,
  },

  ":hover": {
    background: !sBox
      ? title == "Get A Quote"
        ? "linear-gradient(180deg, rgba(0,250,255,1) 25%, rgba(0,99,255,1) 80%, rgba(7,13,30,1) 100%)"
        : "#BCF0FF"
      : "linear-gradient(180deg, rgba(0,250,255,1) 25%, rgba(0,99,255,1) 80%, rgba(7,13,30,1) 100%)",
  },

  transitionProperty: "background-color",
  transitionDuration: "0.5s",
  transitionDelay: "0s",
}));

export const ImgContainer = styled("div")(({ theme, title }) => ({
  display: "flex",
  justifyContent: "end",
  paddingRight: 15,
  paddingTop: 15,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {
    position: "relative",
    zIndex: "12",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const BoxImage = styled("img")(({ theme, title }) => ({
  [theme.breakpoints.up("xl")]: {
    height: title == "Get A Quote" ? "80px !important" : "80px !important",
    width: title == "Get A Quote" ? "80px !important" : "80px !important",
  },
  [theme.breakpoints.up("lg")]: {
    height: title == "Get A Quote" ? 50 : 60,
    width: title == "Get A Quote" ? 50 : 60,
  },
  [theme.breakpoints.down("lg")]: {
    height: title == "Get A Quote" ? 60 : 60,
    width: title == "Get A Quote" ? 60 : 60,
  },
  [theme.breakpoints.down("sm")]: {
    height: title == "Get A Quote" ? 50 : 70,
    width: title == "Get A Quote" ? 50 : 70,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const InfoContainer = styled("div")(({ theme, title, lang }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: title == "Get A Quote" ? "space-between" : "start",
  alignItems: title == "Get A Quote" ? "left" : "",
  direction: lang === "ar" ? "rtl" : "ltr",

  [theme.breakpoints.up("xl")]: {
    paddingLeft: title != "Get A Quote" ? "40px !important" : 0,
    paddingRight: title != "Get A Quote" ? "40px !important" : 0,
    paddingBottom: title != "Get A Quote" ? "25px !important" : 0,
    paddingTop: title != "Get A Quote" ? "40px !important" : 0,
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: title != "Get A Quote" ? 40 : 0,
    paddingRight: title != "Get A Quote" ? 30 : 0,
    paddingBottom: title != "Get A Quote" ? 15 : 0,
    paddingTop: title != "Get A Quote" ? 30 : 0,
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: 20,
    paddingBottom: 20,
    height: title != "Get A Quote" ? "inherit" : "90%",

    paddingLeft: title != "Get A Quote" ? 30 : 30,
    paddingRight: title != "Get A Quote" ? 20 : 0,
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 15,
    height: title != "Get A Quote" ? "inherit" : "70%",
    paddingLeft: 30,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const Title = styled("h3")<SBox>(({ theme, title, sBox }) => ({
  margin: 0,
  marginLeft: title == "Get A Quote" ? "40px" : "0",
  position: title == "Get A Quote" ? "relative" : "inherit",

  [theme.breakpoints.up("xl")]: {
    fontSize: 30,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 25,
  },
  [theme.breakpoints.up("lg")]: {
    top:40,
  },
  [theme.breakpoints.down("md")]: {
    position: title == "Get A Quote" ? "relative" : "inherit",
    bottom: title == "Get A Quote" ? 70 : 0,
    right: title == "Get A Quote" ? 30 : 0,
    zIndex: 30,
  },
  [theme.breakpoints.down("sm")]: {
    position: title == "Get A Quote" ? "relative" : "inherit",
    bottom: title == "Get A Quote" ? 10 : 0,
    right: title == "Get A Quote" ? 30 : 0,
    zIndex: 30,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const Description = styled("p")<SBox>(({ theme, sBox }) => ({
  marginTop: 10,
  lineHeight: "130%",

  fontWeight: 500,
  color: sBox ? "white" : "#1F2B2D",
  opacity: sBox ? "1" : "0.8",

  [theme.breakpoints.up("xl")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DragonBox = styled("div")<SBox>(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("md")]: {
    height: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "55%",
    height: "100%",

    positon: "relative",
    bottom: 100,
    right: -235,
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    height: "100%",

    positon: "relative",
    bottom: 20,
    right: -100,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const ShadowBox = styled("div")<SBox>(({ theme, sBox, pBox }) => ({
  position: "absolute",
  zIndex: 30,
  width: "100%",
  bottom: 0,
  background: pBox
    ? "linear-gradient(0deg, rgba(0,250,255,1) 0%, rgba(0,120,250,200) 0%, rgba(0,0,0,0) 100%)"
    : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 100%)",

  [theme.breakpoints.up("xl")]: {
    height: "550px",
    background: pBox
      ? "linear-gradient(0deg, rgba(0,250,255,1) 0%, rgba(0,60,170,1) 0%, rgba(0,0,0,0) 100%)"
      : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 100%)",
  },
  [theme.breakpoints.between("md", "xl")]: {
    height: "150px",
  },
  // [theme.breakpoints.down("md")]: {
  //   height: "350px",
  //   background: pBox
  //     ? "linear-gradient(0deg, rgba(0,250,255,1) 0%, rgba(0,70,190,1) 0%, rgba(0,0,0,0) 100%)"
  //     : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  //   bottom: -82,
  //   left: -30,
  //   width: "120%",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   height: "200px !important",
  //   background: pBox
  //     ? "linear-gradient(0deg, rgba(0,250,255,1) 0%, rgba(0,100,230,1) 0%, rgba(0,0,0,0) 100%)"
  //     : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  // },
  [theme.breakpoints.up("xs")]: {},
  transition: "0s",
}));

export const Dragon = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: "150% !important",

    positon: "relative",
    zIndex: "1",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
