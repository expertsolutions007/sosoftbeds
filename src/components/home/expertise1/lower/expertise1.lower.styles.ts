import { styled } from "@mui/material";

export const PBox = styled("div")(({ theme, title }) => ({
  borderRadius: 31,

  display: title == "Get A Quote" ? "flex" : "inherit",
  justifyContent: title == "Get A Quote" ? "center" : "inherit",
  alignItems: title == "Get A Quote" ? "center" : "inherit",
  backgroundColor: title == "Get A Quote" ? "black" : "#F8F8F8",
  gap: title == "Get A Quote" ? 10 : "0",
  color: title == "Get A Quote" ? "white" : "black",
  width: title == "Get A Quote" ? "100%" : "inherit",

  [theme.breakpoints.up("xl")]: {
    minHeight: 300,
    maxHeight: "max-content",
  },
  [theme.breakpoints.only("lg")]: {
    minHeight: 250,
    maxHeight: "max-content",
  },
  [theme.breakpoints.down("lg")]: {
    minHeight: 250,
    maxHeight: "max-content",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},

  ":hover":{
    backgroundColor:"#00E5FF",
  }
}));

export const ImgContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  paddingRight: 20,
  paddingTop: 20,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const BoxImage = styled("img")(({ theme, title }) => ({
  [theme.breakpoints.up("lg")]: {
    height: title == "Get A Quote" ? 30 : 50,
    width: title == "Get A Quote" ? 30 : 50,
  },
  [theme.breakpoints.down("lg")]: {
    height: title == "Get A Quote" ? 30 : 50,
    width: title == "Get A Quote" ? 30 : 50,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InfoContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    padding: 60,
  },
  [theme.breakpoints.only("lg")]: {
    padding: 50,
  },
  [theme.breakpoints.down("lg")]: {
    padding: 50,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Title = styled("h3")(({ theme }) => ({
  margin: 0,

  [theme.breakpoints.up("xl")]: {
    fontSize: 30,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 25,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 25,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Description = styled("p")(({ theme }) => ({
  margin: 0,
  fontWeight: 600,

  [theme.breakpoints.up("xl")]: {
    fontSize: 20,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
