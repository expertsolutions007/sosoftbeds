import { Height } from "@mui/icons-material";
import { styled } from "@mui/material";
import { heIL } from "@mui/material/locale";

export const PDiv = styled("div")(({ theme }) => ({
    display: "grid",
    height: "750px",
    gridTemplateAreas: `"a a b b"
                         "c d b b"`,
    gap: "1rem",
    justifyContent: "center",
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

export const CDiv = styled("div")(({ theme, order }: any) => ({
    position: "relative",
    gridArea: order,
    display: "flex",
    justifyContent: 'center',

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const Heading = styled("p")(({ theme }) => ({
    fontSize: "15px",
    textAlign: "center",
    fontWeight: "500",
    position: "absolute",
    margin: "auto",
    bottom: "1rem",
    padding: "1rem",
    backgroundColor: "white",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const Image = styled("img")(({ theme, height }) => ({
    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {
        height: height ? height : "100%",
        width: "100%",
        objectFit: "cover",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))
