import { styled, Modal, Box, Button, Typography } from "@mui/material";

export const PModal = styled(Modal)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {
    height: "400px",
  },
  [theme.breakpoints.up("xs")]: {},
  border: "0",
}));

export const PRiv = styled("div")(({ lang }) => ({
  direction: lang == "ar" ? "rtl" : "ltr"
}))

export const PDiv = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  // marginTop: "-50%",
  // margin: "auto",
  top: "50%",
  // left: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  width: "800px",
  height: "600px",
  // right: "30%",

  // [theme.breakpoints.up("xl")]: {
  //   top: "15% !important",
  //   height: "80%  !important",
  //   width: "80% !important",
  // },
  // [theme.breakpoints.between("lg", "xl")]: {
  //   top: "10%",
  //   height: "80%",
  //   width: "80%",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   top: "15%",
  //   height: "90%",
  //   width: "90%",
  // },
  // [theme.breakpoints.up("md")]: {
  //   top: "15%",
  //   height: "80%",
  //   width: "80%",
  // },
  // [theme.breakpoints.down("md")]: {
  //   top: "25%",
  //   height: "65%",
  //   width: "80%",
  // },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "90%",
    top: "10%",
    margin: "auto",
  },
}));

export const PCont = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    display: "flex",
    height: "100%",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const PLeft = styled("div")(({ theme }) => ({
  height: "100%",

  [theme.breakpoints.up("xl")]: {
    width: "40%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const PRight = styled("div")(({ theme }) => ({
  height: "100%",
  display: "grid",

  [theme.breakpoints.up("xl")]: {
    padding: 70,
    width: "60%",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateRows: "0.2fr 1fr 1fr 1fr",
    padding: 20,
    width: "50%",
    display: "grid",
    gap: 20,
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
    padding: 20,
    // gridTemplateRows: "0.6fr 1fr 1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const PImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    WebkitTransform: "scaleX(-1)",
    transform: "scaleX(-1)",
    height: "50vh",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const XImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    width: "50px",
    height: "50px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "35px",
    height: "35px",
  },
  [theme.breakpoints.down("md")]: {
    width: "20px",
    height: "20px",
    position: "relative",
    top: 5,
    right: 5,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  justifySelf: "right",
  cursor: "pointer",
}));

export const PHead = styled("h2")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    fontSize: "30px !important",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
    lineHeight: 1,
    margin: 0,
  },
  [theme.breakpoints.down("md")]: {
    lineHeight: 1,
    margin: 0,
    fontSize: "20px",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const PBlue = styled("h2")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    fontSize: "55px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    fontSize: "35px",
    lineHeight: 1,
    margin: 0,
    marginTop: 10,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: 1,
    margin: 0,
    marginTop: 5,
  },
  [theme.breakpoints.up("xs")]: {},
  color: "#00AFFF",
}));

export const PDescription = styled("p")(({ theme }) => ({
  color: "gray",
  [theme.breakpoints.up("xl")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 10,
    fontSize: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const PButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("md")]: {
    height: "50px",
    width: "200px",
    fontSize: 17,
  },
  [theme.breakpoints.down("md")]: {
    height: "30px",
    width: "150px",
    fontSize: 12,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
  background:
    "linear-gradient(90deg, rgba(0,250,255,1) 35%, rgba(0,99,255,1) 80%,  rgba(0,0,0,1) 100%) !important",
  color: "white",
  hover: {
    background: "black !important",
    color: "white",
  },
}));

export const PBoxing = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const MXImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block !important",
    top: 10,
    right: 10,
    position: "absolute",
    height: 35,
    width: 35,
    zIndex: 3000000000,
  },
}));
