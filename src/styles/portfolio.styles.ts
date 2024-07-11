import { styled } from "@mui/material";

interface Check {
  check?: boolean;
}

export const PDiv = styled("div")<Check>(({ theme, check }: any) => ({
  overflowY: check ? "hidden" : "inherit",
  ": ::-webkit-scrollbar": {
    display: "none",
  },
}));
