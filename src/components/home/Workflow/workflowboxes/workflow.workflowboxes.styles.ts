import { Divider, styled } from "@mui/material";

interface Check {
  check: boolean;
}

export const PDiv = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",

  [theme.breakpoints.up("xl")]: {
    height: "350px !important",
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {
    height: "250px",
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    height: "250px",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    display: "grid",
    margin: "auto",
    alignItems: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 120,
    paddingRight: 90,
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
  },
}));

export const HeadingBox = styled("div")(({ theme }) => ({
  display: "flex",
  margin: 0,
  padding: 0,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("md")]: {
    alignItems: "start",
    justifyContent: "end",
    flexDirection: "row",
    textAlign: "center",
    width: "70%",
    height:"max-content",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  
  overflow:"visible",
}));

export const ImgBox = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  backgroundColor: "gray",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Heading = styled("p")<Check>(({ theme, check }: any) => ({
  margin: 0,
  padding: 0,
  color: check ? "white" : "gray",

  [theme.breakpoints.up("xl")]: {
    fontSize: 25,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 20,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 20,
    marginTop: 10,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Content = styled("p")<Check>(({ theme, check }: any) => ({
  textAlign: "left",
  margin: 0,
  padding: 0,
  color: check ? "white" : "gray",

  [theme.breakpoints.up("xl")]: {
    fontSize: 20,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: 20,
    paddingRight: 20,
    color: "gray",
    margin: 0,
    padding: 0,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DividerBox = styled(Divider)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    width: "2px",
  },
  [theme.breakpoints.down("md")]: {
    width: "0px",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const ListDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom:-10,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const LogoBox = styled("div")(({ theme }) => ({
  width: "20px",
  height:"20px",
  margin: 0,
  padding: 0,
  overflow:"visible",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    marginLeft: -20,
    marginTop: -40,
  },
  [theme.breakpoints.down("md")]: {
    
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const CplBox = styled("div")(({ theme }) => ({

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("xs")]: {},
}));


export const List = styled("ul")(({theme})=>({
  
  display: "flex",
  justifyContent: "center",
  alignItems: "s",
  flexDirection: "column",
  listStyleType: "square",
  
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    marginTop: -10,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    paddingLeft:"20px !important",
  },
  [theme.breakpoints.up("xs")]: {},
}))

export const ListItem = styled("li")(({theme})=>({
  
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("xs")]: {},
}))