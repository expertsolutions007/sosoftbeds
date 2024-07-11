import { Roboto, Syne, Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { arSA } from "@mui/material/locale"

export const syne = Syne({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: syne.style.fontFamily,
    },
    breakpoints: {
        values: {
            xs: 0,
            mb: 400,
            sm: 600,
            md: 940,
            lg: 1280,
            xl: 1536,
        },
    },
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    borderRadius: '50px',
                },
            },
        }
    },
}, arSA);

export default theme;
