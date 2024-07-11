import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// check featured

export const PDiv = styled("div")({
  backgroundColor: "#00060D",
})

export const BannerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: "left",
  justifyContent: "space-between",
  paddingTop: 40,
  paddingBottom: 80,
  backgroundColor:"#00060D",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 50,
  },
}));

export const InnerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#00060D",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "medium",
  backgroundColor: "#00060D",

  [theme.breakpoints.up("lg")]: {
    fontSize: 76,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 76,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 40,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 60,
  },
}));

export const SubHeading = styled(Typography)(({ theme }) => ({
  background:
    "-webkit-linear-gradient(-45deg, #00FAFF 40%, #0047FF 70%,#070D1E 100% )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  letterSpacing: 0.2,
  textAlign: "left",

  [theme.breakpoints.up("xl")]: {
    fontSize: 25,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 20,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 20,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
