import {
  Box,
  Card,
  CardContent,
  Collapse,
  Typography,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

interface expanded {
  isexpanded: any;
}

interface heading {
  heading:string;
}

export const PBox = styled(Box)<expanded>(({ theme, isexpanded }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("md")]: {
    width: `${isexpanded ? "70%" : "30%"}`,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    height: `${isexpanded ? "600px" : "100px"}`,
  },
}));

export const CollapsibleCard = styled(Card)<expanded>(
  ({ theme, isexpanded }) => ({
    backgroundColor: "transparent",
    border: "1px solid black",
    borderRadius: 40,
    width: "100%",


    [theme.breakpoints.up("xl")]: {
      height: "600px !important",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: "400px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: isexpanded ? "500px" : "100px",
    },
    [theme.breakpoints.down("sm")]: {
      height: isexpanded ? "565px" : "100px",
    },

    "> div": {
      transition: "0.5s",
      transitionTimingFunction: "ease-out",
    }, //removes card transition
  })
);

export const CollapsibleContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: "black",
  width: "100%",
  margin: 0,

  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},

  transition: "0s",
}));

export const CardBox = styled("div")(({ theme }) => ({
  color: "white",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row-reverse !important",
    justifyContent: "space-between !important",
    width: "100%",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const BackDiv = styled("div")(({ theme }) => ({
  justifySelf: "center",
  width: "100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    transform: "rotate(180deg)",
    display:"flex",
    alignItems:"center",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeaderDiv = styled("div")(({ theme }) => ({
  justifySelf: "start !important",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    transform: "rotate(180deg)",
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const FlexBox1Image = styled("img")(({ theme }) => ({
  width: "10px",

  [theme.breakpoints.up("xl")]: {
    width: "15px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "13px",
    transform: "rotate(-90deg)",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const TransformText = styled(Typography)(({ theme }) => ({
  transform: "rotate(180deg)",

  background: "-webkit-linear-gradient(-45deg, #00FAFF 5%, #0047FF 95% )",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,

  [theme.breakpoints.up("xl")]: {
    fontSize: 50,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: 40,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 22,
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const CardCollapse = styled(Collapse)(({ theme }) => ({
  writingMode: "horizontal-tb",
  margin: 0,
  cursor: "pointer",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.up("xl")]: {
    width: "862px",
    height: "inherit",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "623px",
    height: "inherit",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "800px",
    height: "inherit",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "inherit",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const CollapseDiv = styled("div")(({ theme }) => ({
  display: "grid",

  [theme.breakpoints.up("xl")]: {
    height: "600px !important",
  },
  [theme.breakpoints.up("lg")]: {
    height: "500px",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "60% 40%",
    height: "400px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr 1fr",
    height: "600px",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateRows: "1fr",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",

  [theme.breakpoints.up("xl")]: {
    fontSize: "50px",
  },
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ButtonImage = styled("img")(({ theme }) => ({
  marginLeft: "10px",
  [theme.breakpoints.up("xl")]: {
    width: "30px",
    height: "30px",
  },
  [theme.breakpoints.only("lg")]: {
    width: "20px",
    height: "20px",
  },
  [theme.breakpoints.down("xl")]: {
    width: "20px",
    height: "20px",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const GapBox = styled(Box)(({ theme }) => ({
  flexGrow: 2,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const LeftDiv = styled("div")(({ theme }) => ({
  textAlign: "left",
  justifyItems: "center",

  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xl")]: {
    height: "600px !important",
  },
  [theme.breakpoints.up("lg")]: {
    height: "500px",
  },
  [theme.breakpoints.down("lg")]: {
    height: "250px",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const RightDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xl")]: {
    height: "600px !important",
  },
  [theme.breakpoints.up("lg")]: {
    height: "500px",
  },
  [theme.breakpoints.up("md")]: {
    justifySelf: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    justifySelf: "end",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const MoreBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,

  [theme.breakpoints.up("lg")]: {
    "> p": {
      fontSize: 24,
    },
    "> img": {
      width: "30px",
      height: "inherit",
    },
  },
  [theme.breakpoints.between("sm", "lg")]: {
    "> p": {
      fontSize: 14,
      fontWeight: "bold",
    },
    "> img": {
      width: "30px",
      height: "inherit",
    },
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    "> p": {
      fontSize: 14,
    },
    "> img": {
      width: "30px",
      height: "inherit",
    },
    display: "none",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const MorerBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const RightImg = styled("img")<heading>(({ theme,heading }) => ({
  maxWidth: "100%",
  paddingRight: "4px",
  borderRadius:30,

  [theme.breakpoints.up("xl")]: {
    width: "90% ",
    height: "90% !important",
  },
  [theme.breakpoints.up("lg")]: {
    width: "90%",
    height: "90%",
  },
  [theme.breakpoints.up("md")]: {
    width: "90%",
    height: "90%",
    objectPosition: heading == "Digital Twins" ? "-110px":"inherit"
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    alignSelf: "start",
    justifyContent: "start",
    height: "110%",
    paddingTop: 20,
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height:"280px",
    margin: "auto",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const LeftCont = styled("div")(({ theme }) => ({
  width: "80%",
  alignSelf: "center",
  margin: "auto",

  display: "grid",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    gridTemplateRows: "90% 10%",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateRows: "75% 25%",
  },
  [theme.breakpoints.up("sm")]: {
    height: "80%",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const HTitle = styled("h3")(({ theme }) => ({
  fontSize: "49px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    margin:0,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const DPara = styled("p")(({ theme }) => ({
  color: "grey",
  fontSize: 20,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    margin:0,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const TopBox = styled("div")(({ theme }) => ({
  alignSelf: "start",
  fontWeight: 500,

  [theme.breakpoints.up("xl")]: {
    "> h3": {
      fontSize: "49px !important",
    },
    "> p": {
      fontSize: "20px !important",
      color: "#1F2B2D",
      opacity: "0.8",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "> h3": {
      fontSize: 44,
      margin: 0,
    },
    "> p": {
      fontSize: 18,
      margin: 0,
      color: "#1F2B2D",
      opacity: "0.8",
    },
  },
  [theme.breakpoints.down("lg")]: {
    "> h3": {
      fontSize: 25,
    },
    "> p": {
      fontSize: 14,
      color: "#1F2B2D",
      opacity: "0.8",
    },
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Collapser = styled(motion.div)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    width: "1000px",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "550px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
  ":active": {
    backgroundColor: "#BCF0FF",
  },
}));

export const ELink = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
  width: "80%",
  textDecoration: "none",
  color: "black",
  cursor: "pointer",


  [theme.breakpoints.up("xl")]: {
    "> p": {
      fontSize: 28,
    },
    "> img": {
      width: "30px",
      height: "inherit",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "> p": {
      fontSize: 23,
    },
    "> img": {
      width: "28px",
      height: "inherit",
    },
  },
  [theme.breakpoints.between("sm", "lg")]: {
    "> p": {
      fontSize: 14,
    },
    "> img": {
      width: "30px",
      height: "inherit",
    },
    paddingLeft: 30,
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    "> p": {
      fontSize: 14,
    },
    "> img": {
      width: "30px",
      height: "inherit",
    },
    marginLeft: 40,
    marginTop: 10,
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Exp = styled("p")(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("md")]: {
    fontSize: "22px",
    fontWeight:"bold",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    fontWeight:"bold",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
