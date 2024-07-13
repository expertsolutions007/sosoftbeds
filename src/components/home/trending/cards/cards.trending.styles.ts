import { Height } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import { heIL } from "@mui/material/locale";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from "@mui/material";

export const PDiv = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "3rem",

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
    cursor: "pointer",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const Heading = styled("p")(({ theme }) => ({
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "600",
    width:"100%",
    marginBottom: "1rem",

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
        height: "250px",
        width: "100%",
        objectFit: "cover",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CustomCard = styled(Card)(({ theme }) => ({
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("md")]: {
        height: "100%",
        width: '100%',
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CustomCardContent = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {
        padding: "1rem",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#00ACBB",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "20px",


    ":hover": {
        backgroundColor: "black",
        color: "white",
    },
    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))

export const Price = styled("p")(({ theme }) => ({
    textAlign: "left",
    fontSize: "15px",
    color: "gray",

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))


export const Title_Price = styled("div")(({ theme }) => ({

    [theme.breakpoints.up("xl")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("md")]: {
        paddingTop: "1rem",
        display: "grid",
        gridTemplateRows: "1fr",
    },
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("xs")]: {},
}))