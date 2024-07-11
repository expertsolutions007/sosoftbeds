import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ScrollContainer from "react-indiana-drag-scroll";

interface backgroundInterface {
  image?: string;
  bg?: string;
}

interface TabButtonInterface {
  checked: boolean;
}
export const FullBox = styled(Box)<backgroundInterface>(({ image, theme }) => ({
  overflow: "hidden !important",
  background: `url(${image})`,
  backgroundColor: "black",
  backgroundSize: "cover",
  paddingBottom: "10%",
  paddingTop: "10%",
  boxShadow: "inset 0 0 0 1200px rgba(0,0,0,0.7)",
  position: "relative",
  borderBottomLeftRadius: 60,
  borderBottomRightRadius: 60,

  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("md")]: {
    // marginTop: -160,
    zIndex: 30,
    position: "relative",
  },
  [theme.breakpoints.between("sm", "md")]: {
    // marginTop: -360,
  },
  [theme.breakpoints.down("sm")]: {
    // marginTop: -370,
  },
  [theme.breakpoints.between("xs", "mb")]: {
    // marginTop: -220,
  },
}));

export const SContainer = styled(ScrollContainer)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
  whiteSpace: "nowrap",
  // width:"600%",
  //overflowX: "auto",

  "::-webkit-scrollbar": {
    display: "none",
  },
  ":active": {},
});

export const HeadingBox = styled(Box)(({ theme }) => ({
  paddingTop: "6%",
}));

export const HeadingFlexBox = styled(Box)({
  flexGrow: 2,
});

export const Subheading = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  lineHeight: 1,
  color: "#EBF2FF",
  opacity: 0.5,

  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#FFFFFF",

  [theme.breakpoints.up("md")]: {
    fontSize: "76px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "60px",
  },
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  float: "right",
}));

export const BoxMarginTop = styled("div")(({ theme }) => ({
  marginTop: 1,
  display: "flex",
  justifyContent: "start",
  gap: 3,
  paddingBottom: 10,

  [theme.breakpoints.up("xl")]: {
    paddingTop: "2%",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const PContainer = styled(Container)({
  whiteSpace: "nowrap",
  //overflowX: "auto",

  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const BoxFlex = styled(Box)(({ theme }) => ({
  width: "1400px !important",
  display: "flex",
  justifyContent: "start",
  gap: "20px",
  overflow: "auto",
  flexDirection: "row",
  position: "relative",
  scrollBehavior: "smooth",
  margin: "45px",

  // overflowX: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },

  // [theme.breakpoints.up("xl")]: {
  //   // width: "115.5% !important",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   width: "122%",
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: "124%",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   width: "165%",
  //   paddingLeft: 20,
  // },
}));

export const TopHeadingBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  paddingBottom: 5,
  alignItems: "center",
});
export const OuterHeadingBox = styled(Box)({
  flexGrow: 8,
});

export const ExploreBox = styled(Box)({});
export const ExploreButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  textTransform: "none",
  color: "#FFFFFF",
}));

export const ExploreSmButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    paddingTop: 40,
  },
  textTransform: "none",
  color: "#FFFFFF",
}));

export const TabButton = styled(Button)<TabButtonInterface>(
  ({ checked, theme }) => ({
    background: checked
      ? "-webkit-linear-gradient(-45deg, #00FAFF 5%, #0047FF 95% )"
      : "rgba(244, 254, 255, 0.2)",
    color: "#F4FEFF",

    borderRadius: "30px",

    fontWeight: "bold",
    minWidth: "max-content",

    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,

    marginRight: "20px",
    marginBottom: "2%",

    [theme.breakpoints.up("xl")]: {
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: "15px",
    },
    [theme.breakpoints.only("lg")]: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: "12px",
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: "12px",
    },

    "&:hover": {
      background: "-webkit-linear-gradient(-45deg, #00FAFF 5%, #0047FF 95% )",
    },
  })
);

export const MovementBox = styled(Box)(({ theme }) => ({
  justifyContent: "end",
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ProjectImage = styled("img")(({ theme }) => ({
  borderRadius: "60px",

  [theme.breakpoints.up("xl")]: {
    height: "450px !important",
    width: "450px !important",
  },
  [theme.breakpoints.up("lg")]: {
    height: "450px",
    width: "450px",
  },
  [theme.breakpoints.down("md")]: {
    height: "300px",
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const ProjectDataBox = styled("div")(({ theme }) => ({
  borderRadius: "30px",
  // marginRight: "13px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DarkOverlay = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  opacity: 0.5,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const MovingButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
