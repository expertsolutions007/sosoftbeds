import { styled } from "@mui/material";

export const PDiv = styled("div")(({ theme }) => ({
    backgroundColor: 'rgb(246, 246, 248)',
    fontSize: "15px",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const PFlex = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    paddingLeft: '1rem',
    paddingRight: '1rem',

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const Heading = styled("p")(({ theme }) => ({
    fontSize: "25px",
    width: "50%",
    textAlign: "center",
    fontWeight: "700",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CAlign = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "5rem",
    gap: "10px",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CDiv = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const HeadingLine = styled("div")(({ theme }) => ({
    width: "100%",
    backgroundColor: "#00acbb",
    height: "0.5px",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CPadding = styled("div")(({ theme }) => ({

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("md")]: {
        paddingTop: "0 !important",
        padding: "5rem",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))