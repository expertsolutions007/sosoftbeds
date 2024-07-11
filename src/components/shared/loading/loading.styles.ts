import { styled } from "@mui/material";

interface isLoading {
  isLoading: boolean;
}

export const PDiv = styled("div")<isLoading>({
  width: "100%",
  height: "99vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  "::-webkit-scrollbar": {
    display: "none !important",
  },
});

export const Logo = styled("img")<isLoading>(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {},
  [theme.breakpoints.only("lg")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.up("md")]: {
    width: "100px",
    height: "110px",
  },
  [theme.breakpoints.down("md")]: {
    width: "75px",
    height: "85px",
  },
  [theme.breakpoints.up("xs")]: {},
  "::-webkit-scrollbar": {
    display: "none !important",
  },
}));
