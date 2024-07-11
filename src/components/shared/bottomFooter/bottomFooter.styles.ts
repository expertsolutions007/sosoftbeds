import { styled,Container } from "@mui/material";

export const PContainer = styled(Container)(({lang})=>({
    direction: lang === "ar" ? "rtl" : "ltr",
    marginTop:60,
    marginBottom:30,
}));