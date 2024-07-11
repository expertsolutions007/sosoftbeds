import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mb: true; 
  }
}