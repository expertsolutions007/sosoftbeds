import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

interface workFlowBool {
  check: boolean;
}

export const PDiv = styled("div")(({ lang }) => ({
  backgroundColor: "#00060D",
  direction: lang === "ar" ? "rtl" : "ltr",
}));

export const FullBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#00060D",
  borderRadius: 7,
  height: "100% !important",
  // [theme.breakpoints.up("xl")]: {
  //   height: "2000px !important",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   height: "1600px",
  //   paddingBottom: 107,
  //   paddingTop: 150,
  // },
  // [theme.breakpoints.down("lg")]: {
  //   height: "1500px",
  //   marginBottom: 100,
  //   marginTop: 100,
  // },
  // [theme.breakpoints.down("md")]: {
  //   height: "1190px",
  //   marginBottom: 150,
  // },
  // [theme.breakpoints.between("xs", "sm")]: {
  //   height: "1350px",
  //   marginBottom: 150,
  // },
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingFlexBox = styled(Box)(({ theme }) => ({
  flexGrow: 2,
  textAlign: "center",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Subheading = styled(Typography)(({ theme }) => ({
  color: "white",

  [theme.breakpoints.up("xl")]: {
    fontSize: 25,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 22,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 22,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "left",
    fontSize: 16,
    paddingRight: 100,
    marginTop: 20,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  justifySelf: "center",
  background:
    "-webkit-linear-gradient(-45deg, #00FAFF 38%, #0047FF 80% , #000000 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  [theme.breakpoints.up("xl")]: {
    fontSize: 60,
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: 55,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 55,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 40,
    textAlign: "left",
  },
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  flexGrow: 10,
  paddingTop: "100px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("sm")]: {
    justifyContent: "left",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const checkBox = styled(Box)<workFlowBool>(({ check, theme }) => ({}));

export const gradient = `linear-gradient(to right, #052A6A, #00FFFF, #0063FF)`;

export const WorkFlowBox = styled(Box)<workFlowBool>(({ check, theme }) => ({
  // border:"linear-gradient(to left, #743ad5, #d53a9d",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {
    borderRadius: "60px",
    border: check ? "4px solid" : "none",
    background: check
      ? `linear-gradient(black, black) padding-box,
    linear-gradient(180deg, rgba(0,250,255,1) 0%, rgba(0,99,255,1) 35%, rgba(7,13,30,1) 100%) border-box`
      : "",
    boxShadow: check ? `0px 20px 30px #061635 ` : "none",
    borderImage:
      "linear-gradient(180deg, rgba(0,250,255,1) 0%, rgba(0,99,255,1) 35%, rgba(7,13,30,1) 100%) 1",
    display: "grid",
    gridTemplateColumns: "1fr",
    margin: 0,
    padding: 0,
    zIndex: check ? 2 : 0,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const WorkFlowLeftBox = styled(Box)(({ theme }) => ({
  flexGrow: 6,
  width: "50%",
  backgroundColor: "",
  alignSelf: "center",
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InnerLeftBox = styled(Box)(({ theme }) => ({
  backgroundColor: "",
  textAlign: "center",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InnerLeftHeading = styled(Typography)<workFlowBool>(
  ({ check, theme }) => ({
    color: check ? "white" : "#5F5F5F",

    [theme.breakpoints.up("xl")]: {
      fontSize: 25,
      fontWeight: 700,
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 20,
      fontWeight: 700,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
      fontWeight: 700,
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("xs")]: {},
  })
);

export const InnerLeftImage = styled("img")(({ theme }) => ({
  marginBottom: "30px",
  marginLeft: "-5px",
  width: "20px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DividerBox = styled(Divider)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",
  width: "2px",
  height: "200px",
  display: "block",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const WorkflowRightBox = styled(Box)(({ theme }) => ({
  flexGrow: 6,
  width: "50%",
  backgroundColor: "",
  alignSelf: "center",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InnerRightBox = styled(Box)(({ theme }) => ({
  marginLeft: "20%",
  marginRight: "20%",
  backgroundColor: "",
  textAlign: "start",
  color: "#5F5F5F",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InnerRightText = styled(Typography)<workFlowBool>(
  ({ check, theme }) => ({
    color: check ? "white" : "#5F5F5F",

    [theme.breakpoints.up("xl")]: {
      fontSize: 20,
      fontWeight: 500,
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 17,
      fontWeight: 500,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 17,
      fontWeight: 500,
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("xs")]: {},
  })
);

export const Liner = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    position: "absolute !important",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "2px",
    // height: "100% !important",
    left: "50%",
    zIndex: 2,
    marginTop: 270,
  },
  [theme.breakpoints.up("lg")]: {
    // position: "absolute !important",
    // backgroundColor: "white",
    // borderRadius: "20px",
    // width: "2px",
    // // height: "1405px !important",
    // left: "50%",
    // zIndex: 2,
    // marginTop: "280px !important",
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.between("sm", "md")]: {
    // backgroundColor: "#FFFFFF",
    // borderRadius: "20px",
    // width: "1.5px",
    // zIndex: "0",
    // position: "absolute",
    // left: "50%",
    // // marginTop: 200,
  },
  [theme.breakpoints.down("md")]: {
    // height: "1140px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("xs")]: {},
}));
