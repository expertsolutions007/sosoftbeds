import {
  Button,
  styled,
  Box,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../../theme";
import { FormControl } from "react-bootstrap";
import ITelInput from "react-intl-tel-input";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha";

export const Selection = styled(Select)({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    width: "100%",
    fontSize: "15px",
    "& img": {
      height: "30px",
      width: "30px",
      objectFit: "fill !important",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "150px",
    color: "black",
    fontSize: "10px",
    "& img": {
      height: "10px",
      width: "10px",
      objectFit: "fill !important",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    "& img": {
      height: "10px",
      width: "10px",
      objectFit: "fill !important",
    },
  },
});

export const CountrySelector = styled(ITelInput)({
  borderRadius: 60,
  border: "0",
  width: "100%",
  backgroundColor: "transparent",
  height: "100px",
  color: "black",

  ".iti-mobile .intl-tel-input .country-list": {
    height: "200px",
  },

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("xs")]: {},
});

export const PDiv = styled("div")(({ theme }) => ({
  backgroundColor: "#EBF2FF",
  // zIndex: 20,
  position: "relative",
  marginTop: -60,
  borderTopRightRadius: 50,
  borderTopLeftRadius: 50,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    paddingTop: "150px",
    paddingBottom: "150px",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "150px",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const FullBox = styled("div")(({ theme }) => ({
  borderRadius: 60,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  paddingBottom: "10px",
  paddingTop: "10px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "120px",
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingFlexBox = styled(Box)(({ theme }) => ({
  marginBottom: 27,
  textAlign: "center",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("lg")]: {
    fontSize: 60,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 40,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const FlexBox = styled(Box)(({ theme }) => ({
  paddingTop: "80px",
  paddingBottom: "80px",
  borderRadius: "60px",

  display: "flex",
  flexDirection: "column",
  gap: 20,

  [theme.breakpoints.up("xl")]: {
    paddingLeft: "150px !important",
    paddingRight: "150px !important",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "#E4EBF8",
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.up("xs")]: {},
}));

export const InputText = styled(TextField)(({ theme, lang }) => ({
  direction: lang === "ar" ? "rtl" : "ltr",
  borderRadius: "5px",
  color: "rgba(31, 43, 45, 0.5)", // Set the desired height here
  "& .MuiInputLabel-root": {
    color: "rgba(31, 43, 45, 0.5)", // Set the desired label color here
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Remove the border here
    },
    "&:hover fieldset": {
      border: "none", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove the border when focused
    },
  },
  border: "solid 2px grey",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const InputTextNumber = styled(TextField)(({ theme,lang }) => ({
  direction: lang === "ar" ? "rtl" : "ltr",
  color: "rgba(31, 43, 45, 0.5)", // Set the desired height here
  "& .MuiInputLabel-root": {
    color: "rgba(31, 43, 45, 0.5)", // Set the desired label color here
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Remove the border here
    },
    "&:hover fieldset": {
      border: "none", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove the border when focused
    },
  },

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropDownText = styled(TextField)(({ theme,lang }) => ({
  width: "100%",
  borderRadius: "5px",
  direction: lang === "ar" ? "rtl" : "ltr",
  "& .MuiInputLabel-root": {
    color: "rgba(31, 43, 45, 0.5)", // Set the desired label color here
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Remove the border here
    },
    "&:hover fieldset": {
      border: "none", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove the border when focused
    },
  },

  border: "solid 2px grey",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Seeker = styled(Select)(({ theme }) => ({
  width: "100%",
  borderRadius: "5px",
  "& .MuiInputLabel-root": {
    color: "rgba(31, 43, 45, 0.5)", // Set the desired label color here
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Remove the border here
    },
    "&:hover fieldset": {
      border: "none", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove the border when focused
    },
  },

  border: "solid 2px grey",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const CountryCode = styled(Select)(({ theme }) => ({
  color: "rgba(31, 43, 45, 0.5)", // Set the desired height here
  "& .MuiInputLabel-root": {
    color: "rgba(31, 43, 45, 0.5)", // Set the desired label color here
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Remove the border here
    },
    "&:hover fieldset": {
      border: "none", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Remove the border when focused
    },
  },

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const UnderFlexBox = styled(Box)(({ theme }) => ({
  paddingBottom: "20px",
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const FirstContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 10,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const RightBox = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 20,
  columnGap: 20,
  width: "100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const Former = styled(FormControl)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 20,
  columnGap: 20,
  width: "100%",
});

export const CountryCodeBox = styled("div")({
  display: "grid",
  gridTemplateColumns: "0.7fr 0.9fr",
  border: "2px solid grey",
  borderRadius: "5px",
  height: "60px",
});

export const FirstRightBox = styled(Box)(({ theme }) => ({
  justifyContent: "inline",
  width: "100%",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const FirstInputText = styled(InputText)(({ theme, lang }) => ({
  direction: lang === "ar" ? "rtl" : "ltr",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const EachRightItem = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  display: "flex",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const HeadingBottomImage = styled("img")(({ theme }) => ({
  marginLeft: "40%",
  width: "250px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropDownItem = styled(MenuItem)(({ theme }) => ({
  backgroundColor: "#F1F1F1",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));

export const DropDownImage = styled("img")(({ theme }) => ({
  marginRight: "10px",
  width: "20px",

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
}));
export const VerifyCapthaButton = styled(Button)(({ theme, disabled,lang }) => ({
  width: "250px",
  borderRadius: "10px",
  direction: lang === "ar" ? "rtl" : "ltr",

  backgroundColor: !disabled ? "black" : "#DBDBDB",
  color: !disabled ? "white" : "#909090",
  "&:hover": { backgroundColor: "#DBDBDB" },
  bacgkround: "black",
  ":hover": {
    background: !disabled
      ? "-webkit-linear-gradient(-45deg, #00FAFF 5%, #0047FF 60%, #000000 100% )"
      : "inherit",
  },
  transition: "0.7s linear",

  paddingTop: 35,
  paddingBottom: 35,
  fontSize: 15,
  fontWeight: 600,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {
    height: 40,
  },
}));
export const SendButton = styled(Button)(({ theme, disabled }) => ({
  width: "100%",
  borderRadius: "10px",

  backgroundColor: !disabled ? "black" : "#DBDBDB",
  color: !disabled ? "white" : "#909090",
  "&:hover": { backgroundColor: "#DBDBDB" },
  bacgkround: "black",
  ":hover": {
    background: !disabled
      ? "-webkit-linear-gradient(-45deg, #00FAFF 5%, #0047FF 60%, #000000 100% )"
      : "inherit",
  },
  transition: "0.7s linear",

  paddingTop: 35,
  paddingBottom: 35,
  fontSize: 15,
  fontWeight: 600,

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {
    height: 40,
  },
}));

export const CustomSnack = styled(Snackbar)({});

export const CustomNumberSelect = styled("select")({
  height: "60px",
  width: "100%",
  backgroundColor: "transparent",
  border: "0",
  fontSize: "20px !important",
  paddingLeft: 20,
});

export const CustomSeekingSelect = styled("select")(({lang})=>({
  height: "60px",
  width: "100%",
  backgroundColor: "transparent",
  fontSize: "20px !important",
  paddingLeft: 20,
  border: "2px solid gray",
  borderRadius: "6px",
  direction: lang === "ar" ? "rtl" : "ltr"
}))

export const SelectOption = styled("option")({
  paddingLeft: 20,
});

export const SelectText = styled("p")({});

export const ReCaptching = styled(ReCAPTCHA)({
  "& iframe": {
    width: "100% !important",
    margin: "0%",
  },

  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    "& iframe": {
      maxWidth: "100%",
      margin: "0% !important",
      objectFit: "cover !important",
      transform: "scale(0.77)",
      transformOrigin: "0 0",
    },
  },
  [theme.breakpoints.up("xs")]: {},
});

export const ReCaptchaCont = styled("div")({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("xs")]: {},
});
