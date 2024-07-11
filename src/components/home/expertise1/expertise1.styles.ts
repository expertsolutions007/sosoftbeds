import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";

export const FullBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#EBF2FF",
  overflow: "hidden",
  position: "relative",

  borderBottomRightRadius: 60,
  borderBottomLeftRadius: 60,
  marginBottom: -100,
  zIndex: 20,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    paddingTop: 10,
    paddingBottom: 150,
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: 100,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingBox = styled(Container)(({ theme }) => ({
  paddingTop: 0.1,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingFlexBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Subheading = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: "black",
  lineHeight: 1,
  fontWeight: 500,

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
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  paddingBottom: 10,

  [theme.breakpoints.up("xl")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  paddingTop: "3%",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const UpperBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",

  [theme.breakpoints.up("xl")]: {
    gap: 15,
  },
  [theme.breakpoints.only("lg")]: {
    gap: 15,
  },
  [theme.breakpoints.down("lg")]: {
    gap: 15,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ItemBox = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  backgroundColor: "#F8F8F8",
  borderRadius: 61,

  "&:hover": {
    backgroundColor: "#00E5FF",
  },

  [theme.breakpoints.up("xl")]: {
    height: 350,
  },
  [theme.breakpoints.only("lg")]: {
    height: 200,
  },
  [theme.breakpoints.down("lg")]: {
    height: 200,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ItemContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ContentFlexBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ContentImageBox = styled(Box)(({ theme }) => ({
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

export const LowerBox = styled(Box)(({ theme }) => ({
  display: "grid",
  marginTop: 13,
  gridTemplateColumns: "2fr 4.1fr",

  [theme.breakpoints.up("xl")]: {
    gap: 15,
  },
  [theme.breakpoints.only("lg")]: {
    gap: 7,
  },
  [theme.breakpoints.down("lg")]: {
    gap: 7,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ContentImage = styled("img")(({ theme }) => ({
  alignSelf: "end",

  [theme.breakpoints.up("xl")]: {
    width: 65,
    height: 65,
  },
  [theme.breakpoints.only("lg")]: {
    width: 35,
    height: 35,
  },
  [theme.breakpoints.down("lg")]: {
    width: 35,
    height: 35,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Innertext = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 10,

  [theme.breakpoints.up("xl")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InnerDescription = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ContentInfoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    padding: 30,
  },
  [theme.breakpoints.only("lg")]: {
    padding: 40,
  },
  [theme.breakpoints.down("lg")]: {
    padding: 40,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const QuoteBox = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  borderRadius: "25px",

  [theme.breakpoints.up("xl")]: {
    height: "400px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const QuoteButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "white",
  fontSize: "25px",

  top: "50%",
  left: "50%",

  transform: "translate(-50%, -50%)",
  [theme.breakpoints.up("xl")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const QuoteImg = styled("img")(({ theme }) => ({
  marginRight: "20px",
  height: "25px",
  width: "25px",

  [theme.breakpoints.up("xl")]: {
    height: "30px",
    width: "30px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const TopHeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const OuterHeadingBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ExploreBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const ExploreButton = styled(Button)(({ theme }) => ({}));

export const ExploreLink = styled(Link)(({ theme }) => ({
  textTransform: "none",
  textDecoration: "none",
  color: "black",

  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {
    fontSize: 17,
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Boxes = styled("div")({
  marginTop: 40,
});

export const UpperContainer = styled("div")(({ theme, title }) => ({
  display: "grid",
  alignItems: "center !important",
  justifyContent: "center",
  height: "100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const FullContainer = styled("div")(({ theme }) => ({
  display: "grid",
  alignItems: "start",
  height: "100%",
  gap: 10,

  [theme.breakpoints.up("xl")]: {
    gridTemplateColumns: "2.4fr 1fr !important",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    gridTemplateColumns: "2.43fr 1fr",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "2.43fr 1fr",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "2.43fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const LeftBox = styled("div")(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  height: "100%",
  gap: 10,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const RightBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const BeardRelBox = styled("div")(({ theme }) => ({
  position: "relative",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const BeardBox = styled("div")(({ theme }) => ({
  position: "absolute",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const BeardImage = styled("img")(({ theme }) => ({
  position: "relative",
  height: "500px",
  width: "300px",
  bottom: 330,
  zIndex: 0,

  [theme.breakpoints.up("xl")]: {
    height: "600px !important",
    width: "100% !important",
    bottom: "340px !important",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    height: "500px !important",
    width: "100%",
    bottom: 250,
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const ShadowBox = styled("div")(({ theme }) => ({
  background: "linear-gradient(180deg, transparent, #EBF2FF)",
  position: "absolute",
  zIndex: 1,
  display: "block",
  width: "300px",
  height: "200px",
  marginTop: -50,

  [theme.breakpoints.up("xl")]: {
    height: "200px",
    width: "600px",
    marginTop: -50,
  },
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.between("sm", "md")]: {},
  [theme.breakpoints.down("md")]: {},
}));
